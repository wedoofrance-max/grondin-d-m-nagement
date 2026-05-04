import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  connectionTimeout: 60_000,
  greetingTimeout: 30_000,
  socketTimeout: 60_000,
})

export interface SendEmailParams {
  to: string
  subject: string
  html: string
  template: string
  devisRequestId?: string
  quoteId?: string
  bookingId?: string
  retryCount?: number
}

export async function sendEmail({
  to,
  subject,
  html,
  template,
  devisRequestId,
  quoteId,
  bookingId,
  retryCount = 0,
}: SendEmailParams): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    if (!to || !to.includes('@')) throw new Error('Invalid email address')

    const info = await transporter.sendMail({
      from: `"Grondin Déménagement" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      replyTo: process.env.EMAIL_GRONDIN ?? process.env.EMAIL_USER,
      headers: {
        'X-Application': 'Grondin-Demenagement',
        'X-Template': template,
        'X-Retry-Count': String(retryCount),
      },
    })

    try {
      const { prisma } = await import('@/lib/db')
      await prisma.emailLog.create({ data: { to, subject, template, status: 'sent', devisRequestId, quoteId, bookingId } })
    } catch { /* DB optional */ }

    console.log(`[EMAIL] ${template} → ${to} (${info.messageId})`)
    return { success: true, messageId: info.messageId }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error(`[EMAIL] Failed ${template} → ${to}:`, msg)

    try {
      const { prisma } = await import('@/lib/db')
      await prisma.emailLog.create({ data: { to, subject, template, status: 'failed', errorMessage: msg, devisRequestId, quoteId, bookingId } })
    } catch { /* DB optional */ }

    if (retryCount < 2) {
      console.log(`[EMAIL] Retry ${retryCount + 2}/3 for ${template}`)
      await new Promise((r) => setTimeout(r, 5_000))
      return sendEmail({ to, subject, html, template, devisRequestId, quoteId, bookingId, retryCount: retryCount + 1 })
    }
    return { success: false, error: msg }
  }
}

export async function sendBatchEmails(
  emails: { to: string; subject: string; html: string; template: string }[],
  batchSize = 10,
): Promise<{ sent: number; failed: number }> {
  let sent = 0
  let failed = 0
  for (let i = 0; i < emails.length; i += batchSize) {
    const results = await Promise.allSettled(emails.slice(i, i + batchSize).map((e) => sendEmail(e)))
    results.forEach((r) => {
      if (r.status === 'fulfilled' && r.value.success) sent++
      else failed++
    })
    if (i + batchSize < emails.length) await new Promise((r) => setTimeout(r, 2_000))
  }
  console.log(`[EMAIL] Batch: ${sent} sent, ${failed} failed`)
  return { sent, failed }
}

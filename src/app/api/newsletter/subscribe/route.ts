export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { NewsletterSchema } from '@/lib/validations'
import { sendEmail } from '@/lib/email/nodemailer'
import { getWelcomeNewsletterHTML } from '@/lib/email/templates/welcomeNewsletter'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = NewsletterSchema.parse(body)

    try {
      const { prisma } = await import('@/lib/db')
      await prisma.customer.upsert({
        where: { email: data.email },
        update: { newsletter: true },
        create: { email: data.email, firstName: data.firstName ?? '', lastName: '', phone: '', newsletter: true },
      })
    } catch (dbErr) {
      console.error('[NEWSLETTER] DB unavailable:', (dbErr as Error).message)
    }

    try {
      await sendEmail({
        to:       data.email,
        subject:  'Bienvenue dans la newsletter Grondin Déménagement',
        html:     getWelcomeNewsletterHTML({ firstName: data.firstName || 'cher client', email: data.email }),
        template: 'welcome_newsletter',
      })
    } catch (emailErr) {
      console.error('[NEWSLETTER] Welcome email failed:', (emailErr as Error).message)
    }

    console.log('[NEWSLETTER] Subscribe:', data.email)
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Email invalide', details: err.issues }, { status: 400 })
    }
    console.error('[NEWSLETTER] Error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

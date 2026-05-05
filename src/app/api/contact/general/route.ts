export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { ContactSchema } from '@/lib/validations'
import nodemailer from 'nodemailer'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = ContactSchema.parse(body)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })

    try {
      await transporter.sendMail({
        from: `"Site Grondin" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_GRONDIN ?? process.env.EMAIL_USER,
        replyTo: data.email,
        subject: `[CONTACT] ${data.subject} — ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="background: #071A2E; color: white; padding: 16px; border-radius: 8px 8px 0 0; margin: 0;">
              Nouveau message de contact
            </h2>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #E2E8F0; border-top: 0;">
              <tr style="background: #F8FAFC;"><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0; font-weight: 600; width: 30%;">Nom</td><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0;">${data.name}</td></tr>
              <tr><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0; font-weight: 600;">Email</td><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              ${data.phone ? `<tr style="background: #F8FAFC;"><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0; font-weight: 600;">Téléphone</td><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ''}
              <tr style="background: #F8FAFC;"><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0; font-weight: 600;">Sujet</td><td style="padding: 10px 16px; border-bottom: 1px solid #E2E8F0;">${data.subject}</td></tr>
              <tr><td style="padding: 10px 16px; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 10px 16px; white-space: pre-wrap;">${data.message}</td></tr>
            </table>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('[CONTACT] Email send failed:', (emailErr as Error).message)
    }

    console.log('[CONTACT]', data.name, data.email, '-', data.subject)
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides', details: err.issues }, { status: 400 })
    }
    console.error('[CONTACT] Error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

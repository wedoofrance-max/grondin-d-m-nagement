// Event handlers called at key business moments.
// Each function encapsulates what happens immediately on that event;
// time-based follow-ups (J-7 reminder, J+3 review request) are handled by cron jobs.

export async function onDevisSubmitted(_devisId: string): Promise<void> {
  // Confirmation + admin notification emails are sent directly in /api/devis/submit
  // GA4 tracking is handled client-side in DevisForm via track.devisSubmitted()
}

export async function onBookingConfirmed(bookingId: string): Promise<void> {
  try {
    const { prisma } = await import('@/lib/db')
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { customer: true },
    })
    if (!booking) return

    const { sendEmail } = await import('@/lib/email/nodemailer')
    const { getConfirmationDevisHTML } = await import('@/lib/email/templates/confirmationDevis')
    const { prisma: _p, ...emailData } = { prisma, ...booking } as unknown as Record<string, unknown>
    void _p

    // Simplified booking confirmation — full implementation requires booking confirmation template
    await sendEmail({
      to:       booking.customer.email,
      subject:  `Réservation confirmée ${booking.bookingRef} — Grondin Déménagement`,
      html:     getConfirmationDevisHTML({ ref: booking.bookingRef } as Parameters<typeof getConfirmationDevisHTML>[0]),
      template: 'booking_confirmation',
      bookingId,
    })
    void emailData
  } catch (err) {
    console.error('[WORKFLOW] onBookingConfirmed error:', err)
  }
}

export async function onQuoteSent(quoteId: string): Promise<void> {
  try {
    const { prisma } = await import('@/lib/db')
    const quote = await prisma.quote.findUnique({
      where: { id: quoteId },
      include: { devisRequest: { include: { customer: true } } },
    })
    if (!quote) return

    const { sendEmail } = await import('@/lib/email/nodemailer')
    const { getQuoteSentHTML } = await import('@/lib/email/templates/quoteSent')
    const customer = quote.devisRequest.customer

    if (!customer) return

    const html = getQuoteSentHTML({
      firstName:  customer.firstName,
      quoteRef:   quote.quoteRef,
      devisRef:   quote.devisRequest.devisRef,
      villeDepart: quote.devisRequest.villeDepart,
      villeArrivee: quote.devisRequest.villeArrivee,
      totalPrice: quote.totalPrice,
      formule:    quote.formule,
      pdfUrl:     quote.pdfUrl ?? undefined,
      expiresAt:  quote.expiresAt?.toISOString() ?? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    })

    await sendEmail({
      to:       customer.email,
      subject:  `Votre devis ${quote.quoteRef} — Grondin Déménagement`,
      html,
      template: 'quote_sent',
      quoteId,
    })
  } catch (err) {
    console.error('[WORKFLOW] onQuoteSent error:', err)
  }
}

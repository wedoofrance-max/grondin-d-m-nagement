export function getQuoteSentHTML(data: {
  firstName: string
  quoteRef: string
  devisRef: string
  villeDepart: string
  villeArrivee: string
  totalPrice: number
  formule: string
  pdfUrl?: string
  expiresAt: string
}): string {
  const formuleLabel: Record<string, string> = {
    economique: 'Formule Économique',
    confort:    'Formule Confort — Recommandée',
    premium:    'Formule Premium — Tout inclus',
  }
  const expiresFormatted = new Date(data.expiresAt).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Votre devis personnalisé — Grondin Déménagement</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#F8FAFC;color:#0F172A;">

<div style="background:#071A2E;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
  <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:2px;margin:0 0 4px;text-transform:uppercase;">Grondin Déménagement</p>
  <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Votre devis personnalisé</h1>
</div>

<div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E2E8F0;border-top:0;">
  <p style="font-size:18px;font-weight:600;color:#0F172A;margin:0 0 12px;">Bonjour ${data.firstName},</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 20px;">Suite à notre visite (réf. ${data.devisRef}), voici votre proposition tarifaire pour votre déménagement <strong>${data.villeDepart} → ${data.villeArrivee}</strong>.</p>

  <div style="background:#EFF6FF;border:2px solid #1783FF;border-radius:12px;padding:24px;text-align:center;margin:0 0 24px;">
    <p style="color:#1D4ED8;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 8px;">Votre devis</p>
    <p style="font-size:36px;font-weight:700;color:#071A2E;margin:0;">${data.totalPrice.toLocaleString('fr-FR')}&nbsp;€</p>
    <p style="color:#475569;font-size:14px;margin:8px 0 0;">${formuleLabel[data.formule] ?? data.formule}</p>
  </div>

  <div style="background:#F8FAFC;padding:16px;border-radius:10px;margin:0 0 20px;">
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Référence devis :</strong> ${data.quoteRef}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>De :</strong> ${data.villeDepart}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Vers :</strong> ${data.villeArrivee}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Valable jusqu'au :</strong> ${expiresFormatted}</p>
  </div>

  ${data.pdfUrl ? `<div style="text-align:center;margin:0 0 24px;"><a href="${data.pdfUrl}" style="display:inline-block;background:#071A2E;color:white;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px;">Télécharger le devis PDF</a></div>` : ''}

  <p style="font-weight:600;color:#1E293B;margin:0 0 8px;">Prochaines étapes :</p>
  <ul style="color:#475569;padding-left:20px;line-height:2;margin:0 0 24px;font-size:14px;">
    <li>Consultez votre devis et contactez-nous pour tout ajustement</li>
    <li>Validez votre réservation (acompte 30&nbsp;%)</li>
    <li>Recevez la confirmation de votre créneau de déménagement</li>
  </ul>

  <div style="text-align:center;margin:28px 0;">
    <a href="tel:+33185440050" style="display:inline-block;background:#1783FF;color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">Nous appeler · 01 85 44 00 50</a>
  </div>

  <p style="color:#64748B;font-size:12px;border-top:1px solid #F1F5F9;padding-top:14px;line-height:1.7;margin:0;">
    <strong style="color:#1783FF;">L'équipe Grondin Déménagement</strong> · <a href="mailto:contact@grondin-demenagement.fr" style="color:#1783FF;text-decoration:none;">contact@grondin-demenagement.fr</a>
  </p>
</div>

<p style="text-align:center;color:#94A3B8;font-size:11px;margin:16px 0 0;">grondin-demenagement.fr · 4,9/5 · 34 avis Google · Réf. ${data.quoteRef}</p>
</body></html>`
}

export function getAdminNotificationHTML(data: {
  devisRef: string
  firstName: string
  lastName: string
  email: string
  phone: string
  villeDepart: string
  villeArrivee: string
  dateSouhaitee?: string
  typeBien: string
  superficie: number
  nbPieces: number
  formule?: string
  message?: string
}): string {
  const dateLabel = data.dateSouhaitee
    ? new Date(data.dateSouhaitee).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'Non précisée'

  const formuleLabel: Record<string, string> = {
    economique: 'Économique', confort: 'Confort', premium: 'Premium', conseil: 'À définir',
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;font-weight:600;font-size:13px;color:#475569;width:35%;">${label}</td><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;font-size:13px;color:#0F172A;">${value}</td></tr>`

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8">
<title>[DEVIS ${data.devisRef}] ${data.firstName} ${data.lastName}</title></head>
<body style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#F8FAFC;color:#0F172A;">

<div style="background:#DC2626;padding:16px 20px;border-radius:8px 8px 0 0;display:flex;align-items:center;justify-content:space-between;">
  <span style="color:white;font-weight:700;font-size:15px;">Action requise sous 24h</span>
  <span style="font-family:'Courier New',monospace;font-size:13px;background:white;color:#DC2626;padding:3px 10px;border-radius:4px;font-weight:700;">${data.devisRef}</span>
</div>

<table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-top:0;">
  <thead><tr style="background:#FEF2F2;"><td colspan="2" style="padding:8px 14px;font-size:11px;font-weight:700;color:#991B1B;letter-spacing:1px;text-transform:uppercase;">Contact client</td></tr></thead>
  <tbody>
    ${row('Nom', `${data.firstName} ${data.lastName}`)}
    <tr><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;font-weight:600;font-size:13px;color:#475569;">Téléphone</td><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;"><a href="tel:${data.phone}" style="color:#1783FF;font-weight:700;font-size:15px;">${data.phone}</a></td></tr>
    <tr><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;font-weight:600;font-size:13px;color:#475569;">Email</td><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;"><a href="mailto:${data.email}" style="color:#1783FF;">${data.email}</a></td></tr>
  </tbody>
  <thead><tr style="background:#EFF6FF;"><td colspan="2" style="padding:8px 14px;font-size:11px;font-weight:700;color:#1D4ED8;letter-spacing:1px;text-transform:uppercase;">Déménagement</td></tr></thead>
  <tbody>
    ${row('Départ', data.villeDepart)}
    ${row('Arrivée', data.villeArrivee)}
    ${row('Logement', `${data.typeBien} · ${data.superficie} m² · ${data.nbPieces} pièce${data.nbPieces > 1 ? 's' : ''}`)}
    ${row('Date souhaitée', dateLabel)}
    ${data.formule ? row('Formule', formuleLabel[data.formule] ?? data.formule) : ''}
    ${data.message ? `<tr><td style="padding:9px 14px;font-weight:600;font-size:13px;color:#475569;vertical-align:top;">Message</td><td style="padding:9px 14px;font-size:13px;white-space:pre-wrap;">${data.message}</td></tr>` : ''}
  </tbody>
</table>

<p style="color:#94A3B8;font-size:11px;margin:8px 0 0;text-align:right;padding:0 8px;">Réf. ${data.devisRef}</p>
</body></html>`
}

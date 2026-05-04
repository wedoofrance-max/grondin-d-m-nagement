import type { DevisEmailData } from '@/lib/email'

export function getConfirmationDevisHTML(data: DevisEmailData): string {
  const typeBienLabel: Record<string, string> = {
    appartement: 'Appartement', maison: 'Maison', bureau: 'Bureau', autre: 'Autre',
  }
  const flexLabel: Record<string, string> = {
    fixe: 'Date fixe', semaine: 'Flexible à la semaine', mois: 'Flexible au mois', aucune: 'Sans contrainte',
  }
  const formuleLabel: Record<string, string> = {
    economique: 'Économique', confort: 'Confort', premium: 'Premium', conseil: 'À définir',
  }
  const dateLabel = data.dateSouhaitee
    ? new Date(data.dateSouhaitee).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'Non précisée'

  const row = (label: string, value: string) =>
    `<tr><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;font-weight:600;font-size:13px;color:#475569;width:38%;">${label}</td><td style="padding:9px 14px;border-bottom:1px solid #F1F5F9;font-size:13px;color:#0F172A;">${value}</td></tr>`

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Récapitulatif demande de devis — Grondin Déménagement</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#F8FAFC;color:#0F172A;">

<div style="background:#071A2E;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
  <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:2px;margin:0 0 4px;text-transform:uppercase;">Grondin Déménagement</p>
  <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Demande de devis reçue</h1>
</div>

<div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E2E8F0;border-top:0;">
  <p style="font-size:18px;font-weight:600;color:#0F172A;margin:0 0 12px;">Bonjour ${data.prenom},</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 20px;">Votre demande de devis a bien été reçue. Notre équipe vous recontactera sous 24h pour organiser une visite sur place et vous remettre votre offre personnalisée.</p>

  <div style="background:#F0F9FF;border-left:4px solid #1783FF;padding:14px 18px;border-radius:0 8px 8px 0;margin:0 0 24px;">
    <p style="color:#0369A1;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 4px;">Référence de votre demande</p>
    <p style="color:#0F172A;font-family:'Courier New',monospace;font-size:18px;font-weight:700;margin:0;letter-spacing:1px;">${data.ref}</p>
  </div>

  <p style="color:#1E293B;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 8px;">Récapitulatif</p>

  <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;margin:0 0 20px;">
    ${row('Départ', `${data.villeDepart} (${data.cpDepart}) — Étage ${data.etageDepart} · ${data.ascenseurDepart ? 'Avec ascenseur' : 'Sans ascenseur'}`)}
    ${row('Arrivée', `${data.villeArrivee} (${data.cpArrivee}) — Étage ${data.etageArrivee} · ${data.ascenseurArrivee ? 'Avec ascenseur' : 'Sans ascenseur'}`)}
    ${row('Logement', `${typeBienLabel[data.typeBien] ?? data.typeBien} · ${data.superficie} m² · ${data.nbPieces} pièce${data.nbPieces > 1 ? 's' : ''}`)}
    ${row('Date souhaitée', dateLabel)}
    ${row('Flexibilité', flexLabel[data.flexibilite] ?? data.flexibilite)}
    ${data.formule ? row('Formule', formuleLabel[data.formule] ?? data.formule) : ''}
  </table>

  <div style="text-align:center;margin:28px 0;">
    <a href="tel:+33185440050" style="display:inline-block;background:#1783FF;color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">Nous appeler · 01 85 44 00 50</a>
  </div>

  <p style="color:#64748B;font-size:12px;border-top:1px solid #F1F5F9;padding-top:14px;line-height:1.7;margin:0;">
    Devis 100&nbsp;% gratuit et sans engagement · Assurance RC Pro incluse<br>
    <strong style="color:#1783FF;">L'équipe Grondin Déménagement</strong>
  </p>
</div>

<p style="text-align:center;color:#94A3B8;font-size:11px;margin:16px 0 0;">
  Grondin Déménagement · Paris &amp; Île-de-France · <a href="https://grondin-demenagement.fr" style="color:#1783FF;text-decoration:none;">grondin-demenagement.fr</a><br>
  4,9/5 · 34 avis Google · Réf. ${data.ref}
</p>
</body></html>`
}

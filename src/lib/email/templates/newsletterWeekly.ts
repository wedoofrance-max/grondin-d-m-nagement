export function getNewsletterWeeklyHTML(data: {
  firstName: string
  email: string
}): string {
  const week = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Newsletter Grondin Déménagement</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#F8FAFC;color:#0F172A;">

<div style="background:#071A2E;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
  <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:2px;margin:0 0 4px;text-transform:uppercase;">Newsletter · ${week}</p>
  <h1 style="color:white;margin:0;font-size:20px;font-weight:700;">Conseils Grondin Déménagement</h1>
</div>

<div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E2E8F0;border-top:0;">
  <p style="font-size:18px;font-weight:600;color:#0F172A;margin:0 0 12px;">Bonjour ${data.firstName},</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 24px;">Voici nos derniers conseils pour préparer votre déménagement à Paris et en Île-de-France.</p>

  <div style="border:1px solid #E2E8F0;border-radius:10px;padding:20px;margin:0 0 20px;">
    <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 8px;">Conseil de la semaine</p>
    <p style="font-weight:600;color:#1E293B;margin:0 0 8px;">Anticipez les autorisations de stationnement</p>
    <p style="color:#475569;font-size:14px;line-height:1.6;margin:0 0 12px;">À Paris, toute réservation de voirie pour un camion de déménagement doit être faite au moins 5 jours ouvrés à l'avance auprès de votre mairie d'arrondissement. Pensez-y dès la confirmation de votre date !</p>
    <a href="https://grondin-demenagement.fr/conseils/obtenir-autorisation-stationnement-paris" style="color:#1783FF;font-size:14px;font-weight:600;text-decoration:none;">Lire le guide complet →</a>
  </div>

  <div style="text-align:center;margin:28px 0;">
    <a href="https://grondin-demenagement.fr/devis" style="display:inline-block;background:#1783FF;color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">Demander un devis gratuit</a>
  </div>

  <p style="color:#64748B;font-size:13px;border-top:1px solid #F1F5F9;padding-top:16px;line-height:1.7;margin:0;">
    <strong style="color:#1783FF;">L'équipe Grondin Déménagement</strong> · <a href="tel:+33185440050" style="color:#1783FF;text-decoration:none;">01 85 44 00 50</a>
  </p>
</div>

<p style="text-align:center;color:#94A3B8;font-size:11px;margin:16px 0 0;">
  grondin-demenagement.fr · 4,9/5 · 34 avis Google<br>
  <a href="https://grondin-demenagement.fr/newsletter/unsubscribe?email=${encodeURIComponent(data.email)}" style="color:#1783FF;text-decoration:none;">Se désinscrire</a>
</p>
</body></html>`
}

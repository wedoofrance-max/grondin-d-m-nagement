export function getWelcomeNewsletterHTML(data: {
  firstName: string
  email: string
}): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Bienvenue chez Grondin Déménagement</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#F8FAFC;color:#0F172A;">

<div style="background:#071A2E;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
  <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:2px;margin:0 0 4px;text-transform:uppercase;">Grondin Déménagement</p>
  <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Bienvenue dans la newsletter !</h1>
</div>

<div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E2E8F0;border-top:0;">
  <p style="font-size:18px;font-weight:600;color:#0F172A;margin:0 0 12px;">Bonjour ${data.firstName},</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 20px;">Merci de votre inscription&nbsp;! Vous recevrez désormais nos conseils pratiques pour organiser votre déménagement à Paris et en Île-de-France.</p>

  <p style="font-weight:600;color:#1E293B;margin:0 0 8px;">Au programme :</p>
  <ul style="color:#475569;padding-left:20px;line-height:2;margin:0 0 24px;font-size:14px;">
    <li>Guides pratiques déménagement Paris</li>
    <li>Astuces emballage et organisation</li>
    <li>Démarches administratives simplifiées</li>
    <li>Actualités et conseils exclusifs Grondin</li>
  </ul>

  <div style="text-align:center;margin:28px 0;">
    <a href="https://grondin-demenagement.fr/devis" style="display:inline-block;background:#1783FF;color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">Demander un devis gratuit</a>
  </div>

  <p style="color:#64748B;font-size:13px;border-top:1px solid #F1F5F9;padding-top:16px;line-height:1.7;margin:0;">
    <strong style="color:#1783FF;">L'équipe Grondin Déménagement</strong><br>
    <a href="tel:+33185440050" style="color:#1783FF;text-decoration:none;">01 85 44 00 50</a> · 7j/7 de 8h30 à 20h
  </p>
</div>

<p style="text-align:center;color:#94A3B8;font-size:11px;margin:16px 0 0;">
  Vous recevez cet email car vous êtes inscrit sur grondin-demenagement.fr.<br>
  <a href="https://grondin-demenagement.fr/newsletter/unsubscribe?email=${encodeURIComponent(data.email)}" style="color:#1783FF;text-decoration:none;">Se désinscrire</a>
</p>
</body></html>`
}

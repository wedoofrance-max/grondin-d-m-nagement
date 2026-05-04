export function getDemandeAvisHTML(data: {
  firstName: string
  bookingRef: string
  googleReviewUrl: string
}): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Votre avis nous intéresse — Grondin Déménagement</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#F8FAFC;color:#0F172A;">

<div style="background:#071A2E;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
  <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:2px;margin:0 0 4px;text-transform:uppercase;">Grondin Déménagement</p>
  <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Votre avis compte !</h1>
</div>

<div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E2E8F0;border-top:0;">
  <p style="font-size:18px;font-weight:600;color:#0F172A;margin:0 0 12px;">Bonjour ${data.firstName},</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 16px;">Votre déménagement (réf. <strong>${data.bookingRef}</strong>) est maintenant terminé. Nous espérons que tout s'est passé à votre entière satisfaction et que vous êtes bien installé dans votre nouveau logement&nbsp;!</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 28px;"><strong>Votre avis aide d'autres familles parisiennes à choisir un déménageur de confiance.</strong> Cela prend moins de 2&nbsp;minutes.</p>

  <div style="text-align:center;margin:0 0 28px;">
    <a href="${data.googleReviewUrl}" style="display:inline-block;background:#1783FF;color:white;padding:16px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;box-shadow:0 4px 12px rgba(23,131,255,0.3);">Laisser un avis Google</a>
  </div>

  <div style="background:#F8FAFC;padding:18px;border-radius:10px;text-align:center;margin:0 0 24px;">
    <p style="margin:0 0 4px;font-size:13px;color:#64748B;">Note actuelle Grondin Déménagement</p>
    <p style="margin:0;font-size:28px;font-weight:700;color:#F59E0B;">4,9 / 5</p>
    <p style="margin:4px 0 0;font-size:13px;color:#64748B;">34 avis Google vérifiés</p>
  </div>

  <p style="color:#475569;font-size:13px;line-height:1.7;margin:0 0 20px;">Un problème à signaler&nbsp;? Répondez directement à cet email — nous reviendrons vers vous rapidement.</p>

  <p style="color:#64748B;font-size:13px;border-top:1px solid #F1F5F9;padding-top:16px;line-height:1.7;margin:0;">
    Merci de votre confiance,<br>
    <strong style="color:#1783FF;">L'équipe Grondin Déménagement</strong><br>
    <a href="tel:+33185440050" style="color:#1783FF;text-decoration:none;">01 85 44 00 50</a> · 7j/7 de 8h30 à 20h
  </p>
</div>

<p style="text-align:center;color:#94A3B8;font-size:11px;margin:16px 0 0;">
  Grondin Déménagement · Paris &amp; Île-de-France · Réf. ${data.bookingRef}<br>
  Pour ne plus recevoir ces emails : <a href="mailto:contact@grondin-demenagement.fr" style="color:#1783FF;text-decoration:none;">contact@grondin-demenagement.fr</a>
</p>
</body></html>`
}

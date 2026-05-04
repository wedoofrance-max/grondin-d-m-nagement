export function getRappelJ7HTML(data: {
  firstName: string
  bookingRef: string
  movingDate: string
  departureAddress: string
  arrivalAddress: string
  movingTimeSlot: string
}): string {
  const movingDateFormatted = new Date(data.movingDate).toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  const slotLabel: Record<string, string> = {
    morning:   'Matin (8h30–12h30)',
    afternoon: 'Après-midi (13h30–18h00)',
    evening:   'Soirée (18h00–20h00)',
  }

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Rappel J-7 — Grondin Déménagement</title></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#F8FAFC;color:#0F172A;">

<div style="background:#071A2E;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
  <p style="color:#1783FF;font-size:11px;font-weight:700;letter-spacing:2px;margin:0 0 4px;text-transform:uppercase;">Grondin Déménagement</p>
  <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Rappel : J-7 avant votre déménagement</h1>
</div>

<div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #E2E8F0;border-top:0;">
  <p style="font-size:18px;font-weight:600;color:#0F172A;margin:0 0 12px;">Bonjour ${data.firstName},</p>
  <p style="color:#475569;line-height:1.7;margin:0 0 20px;">Dans <strong>7 jours</strong>, notre équipe sera chez vous pour votre déménagement. Voici un récapitulatif et les derniers préparatifs conseillés.</p>

  <div style="background:#EFF6FF;border-left:4px solid #1783FF;padding:18px 20px;border-radius:0 8px 8px 0;margin:0 0 24px;">
    <p style="color:#1D4ED8;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 10px;">Détails de votre déménagement</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Référence :</strong> ${data.bookingRef}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Date :</strong> ${movingDateFormatted}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Créneau :</strong> ${slotLabel[data.movingTimeSlot] ?? data.movingTimeSlot}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Départ :</strong> ${data.departureAddress}</p>
    <p style="margin:5px 0;color:#1E293B;font-size:14px;"><strong>Arrivée :</strong> ${data.arrivalAddress}</p>
  </div>

  <p style="font-weight:600;color:#1E293B;margin:0 0 10px;">Derniers préparatifs :</p>
  <ul style="color:#475569;padding-left:20px;line-height:2;margin:0 0 24px;font-size:14px;">
    <li>Vider et débrancher tous les appareils électriques</li>
    <li>Regrouper les objets fragiles dans des cartons étiquetés «&nbsp;FRAGILE&nbsp;»</li>
    <li>Préparer les clés et badges d'accès aux deux adresses</li>
    <li>Réserver les places de stationnement / ascenseur si nécessaire</li>
    <li>Prévoir une valise «&nbsp;première nuit&nbsp;» (draps, vêtements, essentiels)</li>
  </ul>

  <div style="text-align:center;margin:28px 0;">
    <a href="tel:+33185440050" style="display:inline-block;background:#1783FF;color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">Nous appeler · 01 85 44 00 50</a>
  </div>

  <p style="color:#64748B;font-size:13px;border-top:1px solid #F1F5F9;padding-top:16px;line-height:1.7;margin:0;">
    Questions ou modifications ? Répondez à cet email ou appelez-nous 7j/7 de 8h30 à 20h.<br>
    <strong style="color:#1783FF;">L'équipe Grondin Déménagement</strong>
  </p>
</div>

<p style="text-align:center;color:#94A3B8;font-size:11px;margin:16px 0 0;">Grondin Déménagement · Paris &amp; Île-de-France · 4,9/5 · 34 avis Google · Réf. ${data.bookingRef}</p>
</body></html>`
}

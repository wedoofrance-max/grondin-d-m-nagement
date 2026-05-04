import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const emailWrapper = (content: string) => `
  <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
    <div style="background: #071A2E; padding: 24px 32px; text-align: center;">
      <p style="color: #1783FF; font-size: 11px; font-weight: 700; letter-spacing: 2px; margin: 0 0 4px; text-transform: uppercase;">Grondin Déménagement</p>
      <p style="color: #94A3B8; font-size: 12px; margin: 0;">Paris &amp; Île-de-France &nbsp;·&nbsp; 7j/7 de 8h30 à 20h</p>
    </div>
    <div style="padding: 32px 32px 24px; background: #ffffff;">
      ${content}
    </div>
    <div style="background: #F8FAFC; padding: 16px 32px; text-align: center; border-top: 1px solid #E2E8F0;">
      <p style="color: #94A3B8; font-size: 11px; margin: 0 0 4px;">
        <a href="https://grondin-demenagement.fr" style="color: #1783FF; text-decoration: none;">grondin-demenagement.fr</a>
        &nbsp;·&nbsp;
        <a href="tel:+33185440050" style="color: #1783FF; text-decoration: none;">01 85 44 00 50</a>
        &nbsp;·&nbsp;
        <a href="mailto:contact@grondin-demenagement.fr" style="color: #1783FF; text-decoration: none;">contact@grondin-demenagement.fr</a>
      </p>
      <p style="color: #CBD5E1; font-size: 10px; margin: 0;">MustShine France — Tous droits réservés</p>
    </div>
  </div>
`

const row = (label: string, value: string, shaded = false) => `
  <tr style="background: ${shaded ? '#F8FAFC' : '#ffffff'};">
    <td style="padding: 10px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; font-size: 13px; color: #475569; width: 38%; white-space: nowrap;">${label}</td>
    <td style="padding: 10px 14px; border-bottom: 1px solid #F1F5F9; font-size: 13px; color: #0F172A;">${value}</td>
  </tr>
`

const FORMULE_LABEL: Record<string, string> = {
  economique: 'Économique — Manutention & transport',
  confort:    'Confort — Mobilier & cartons inclus',
  premium:    'Premium — Prise en charge intégrale',
  conseil:    'À définir avec le conseiller',
}

const FLEXIBILITE_LABEL: Record<string, string> = {
  fixe:    'Date fixe',
  semaine: 'Flexible à la semaine',
  mois:    'Flexible au mois',
  aucune:  'Sans contrainte de date',
}

const TYPE_BIEN_LABEL: Record<string, string> = {
  appartement: 'Appartement',
  maison:      'Maison',
  bureau:      'Bureau',
  autre:       'Autre',
}

export interface DevisEmailData {
  ref:       string
  prenom:    string
  nom:       string
  email:     string
  telephone: string
  villeDepart:      string
  cpDepart:         string
  etageDepart:      number
  ascenseurDepart:  boolean
  villeArrivee:     string
  cpArrivee:        string
  etageArrivee:     number
  ascenseurArrivee: boolean
  typeBien:      string
  superficie:    number
  nbPieces:      number
  dateSouhaitee?: string
  flexibilite:   string
  formule?:      string
  needDismounting: boolean
  needPacking:     boolean
  needFullPacking: boolean
  needCleaning:    boolean
  needMonteMeuble: boolean
  needStorage:     boolean
  storageDuration?: number
  message?: string
}

// ── Email client : récapitulatif complet ──────────────────────────────────────

export async function sendDevisConfirmation(data: DevisEmailData) {
  const options: string[] = []
  if (data.needDismounting) options.push('Démontage / remontage mobilier')
  if (data.needPacking)     options.push('Fourniture de cartons')
  if (data.needFullPacking) options.push('Emballage complet des affaires')
  if (data.needCleaning)    options.push('Nettoyage fin de bail')
  if (data.needMonteMeuble) options.push('Monte-meuble')
  if (data.needStorage)     options.push(`Garde-meubles${data.storageDuration ? ` (${data.storageDuration} mois)` : ''}`)

  const formuleLabel     = FORMULE_LABEL[data.formule ?? '']     ?? 'À définir avec le conseiller'
  const flexLabel        = FLEXIBILITE_LABEL[data.flexibilite]   ?? data.flexibilite
  const typeBienLabel    = TYPE_BIEN_LABEL[data.typeBien]        ?? data.typeBien
  const dateLabel        = data.dateSouhaitee
    ? new Date(data.dateSouhaitee).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'Non précisée'

  await transporter.sendMail({
    from:    `"Grondin Déménagement" <${process.env.EMAIL_USER}>`,
    to:      data.email,
    subject: `Récapitulatif de votre demande de devis — Grondin Déménagement`,
    html: emailWrapper(`
      <h2 style="color: #0F172A; font-size: 20px; margin: 0 0 6px;">Bonjour ${data.prenom},</h2>
      <p style="color: #475569; line-height: 1.6; margin: 0 0 24px;">
        Votre demande de devis a bien été reçue. Notre équipe vous recontactera rapidement pour organiser une visite sur place et vous remettre votre offre personnalisée.
      </p>

      <div style="background: #F0F9FF; border-left: 4px solid #1783FF; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 28px;">
        <p style="color: #0369A1; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 4px;">Référence de votre demande</p>
        <p style="color: #0F172A; font-family: 'Courier New', monospace; font-size: 18px; font-weight: 700; margin: 0; letter-spacing: 1px;">${data.ref}</p>
      </div>

      <p style="color: #0F172A; font-size: 14px; font-weight: 700; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.5px;">Récapitulatif de votre demande</p>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
        ${row('Départ',  `${data.villeDepart} (${data.cpDepart}) · Étage ${data.etageDepart} · ${data.ascenseurDepart ? 'Avec ascenseur' : 'Sans ascenseur'}`, false)}
        ${row('Arrivée', `${data.villeArrivee} (${data.cpArrivee}) · Étage ${data.etageArrivee} · ${data.ascenseurArrivee ? 'Avec ascenseur' : 'Sans ascenseur'}`, true)}
        ${row('Bien', `${typeBienLabel} · ${data.superficie} m² · ${data.nbPieces} pièce${data.nbPieces > 1 ? 's' : ''}`, false)}
        ${row('Date souhaitée', dateLabel, true)}
        ${row('Flexibilité', flexLabel, false)}
        ${row('Formule', formuleLabel, true)}
        ${options.length > 0 ? row('Options', options.join('<br/>'), false) : ''}
        ${data.message ? row('Message', data.message.replace(/\n/g, '<br/>'), true) : ''}
      </table>

      <div style="text-align: center; margin: 28px 0;">
        <a href="tel:+33185440050"
           style="display: inline-block; background: #1783FF; color: white; padding: 14px 36px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px;">
          Nous appeler · 01 85 44 00 50
        </a>
      </div>

      <p style="color: #94A3B8; font-size: 12px; border-top: 1px solid #F1F5F9; padding-top: 16px; margin-bottom: 0; line-height: 1.6;">
        Assurance RC Pro incluse · Devis 100&nbsp;% gratuit et sans engagement
      </p>
    `),
  })
}

// ── Email interne : fiche complète pour l'équipe Grondin ─────────────────────

export async function sendDevisNotification(data: DevisEmailData) {
  const options: string[] = []
  if (data.needDismounting) options.push('Démontage / remontage')
  if (data.needPacking)     options.push('Cartons')
  if (data.needFullPacking) options.push('Emballage complet')
  if (data.needCleaning)    options.push('Nettoyage')
  if (data.needMonteMeuble) options.push('Monte-meuble')
  if (data.needStorage)     options.push(`Garde-meubles${data.storageDuration ? ` ${data.storageDuration}m` : ''}`)

  const dateLabel = data.dateSouhaitee
    ? new Date(data.dateSouhaitee).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'Non précisée'

  await transporter.sendMail({
    from:    `"Site Grondin" <${process.env.EMAIL_USER}>`,
    to:      process.env.EMAIL_GRONDIN ?? process.env.EMAIL_USER,
    subject: `[DEVIS ${data.ref}] ${data.prenom} ${data.nom} — ${data.villeDepart} → ${data.villeArrivee}`,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px;">
        <div style="background: #071A2E; color: white; padding: 16px 20px; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 15px;">Nouvelle demande de devis</span>
          <span style="font-family: 'Courier New', monospace; font-size: 13px; background: #1783FF; padding: 3px 10px; border-radius: 4px;">${data.ref}</span>
        </div>

        <table style="width: 100%; border-collapse: collapse; border: 1px solid #E2E8F0; border-top: 0;">
          <thead>
            <tr style="background: #EFF6FF;">
              <td colspan="2" style="padding: 8px 14px; font-size: 11px; font-weight: 700; color: #1D4ED8; letter-spacing: 1px; text-transform: uppercase;">Contact</td>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569; width: 35%;">Nom</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${data.prenom} ${data.nom}</td></tr>
            <tr style="background: #FAFAFA;"><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Téléphone</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;"><a href="tel:${data.telephone}" style="color: #1783FF; font-weight: 700;">${data.telephone}</a></td></tr>
            <tr><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Email</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;"><a href="mailto:${data.email}" style="color: #1783FF;">${data.email}</a></td></tr>
          </tbody>

          <thead>
            <tr style="background: #EFF6FF;">
              <td colspan="2" style="padding: 8px 14px; font-size: 11px; font-weight: 700; color: #1D4ED8; letter-spacing: 1px; text-transform: uppercase;">Déménagement</td>
            </tr>
          </thead>
          <tbody>
            <tr style="background: #FAFAFA;"><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Départ</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${data.villeDepart} — ${data.cpDepart}<br/><span style="color: #64748B; font-size: 12px;">Étage ${data.etageDepart} · ${data.ascenseurDepart ? '✓ Ascenseur' : '✗ Sans ascenseur'}</span></td></tr>
            <tr><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Arrivée</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${data.villeArrivee} — ${data.cpArrivee}<br/><span style="color: #64748B; font-size: 12px;">Étage ${data.etageArrivee} · ${data.ascenseurArrivee ? '✓ Ascenseur' : '✗ Sans ascenseur'}</span></td></tr>
            <tr style="background: #FAFAFA;"><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Bien</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${TYPE_BIEN_LABEL[data.typeBien] ?? data.typeBien} · ${data.superficie} m² · ${data.nbPieces} pièce${data.nbPieces > 1 ? 's' : ''}</td></tr>
            <tr><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Date</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${dateLabel}<br/><span style="color: #64748B; font-size: 12px;">${FLEXIBILITE_LABEL[data.flexibilite] ?? data.flexibilite}</span></td></tr>
            <tr style="background: #FAFAFA;"><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Formule</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${FORMULE_LABEL[data.formule ?? ''] ?? 'Non précisée'}</td></tr>
            ${options.length > 0 ? `<tr><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #475569;">Options</td><td style="padding: 9px 14px; border-bottom: 1px solid #F1F5F9;">${options.join(' · ')}</td></tr>` : ''}
            ${data.message ? `<tr style="background: #FAFAFA;"><td style="padding: 9px 14px; font-weight: 600; color: #475569; vertical-align: top;">Message</td><td style="padding: 9px 14px; white-space: pre-wrap; font-size: 13px;">${data.message}</td></tr>` : ''}
          </tbody>
        </table>

        <p style="color: #94A3B8; font-size: 11px; margin: 8px 0 0; text-align: right;">Réf. ${data.ref}</p>
      </div>
    `,
  })
}

// ── Rappel J-7 avant déménagement ─────────────────────────────────────────────

export async function sendRappelJ7({
  to,
  prenom,
  bookingRef,
  dateDemenagement,
}: {
  to: string
  prenom: string
  bookingRef: string
  dateDemenagement: string
}) {
  await transporter.sendMail({
    from:    `"Grondin Déménagement" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Votre déménagement approche — rappel J-7 · Grondin Déménagement`,
    html: emailWrapper(`
      <h2 style="color: #0F172A; font-size: 20px; margin: 0 0 8px;">Bonjour ${prenom},</h2>
      <p style="color: #475569; line-height: 1.6;">
        Votre déménagement prévu le <strong>${dateDemenagement}</strong> arrive dans 7 jours.
        Voici quelques points à vérifier pour que tout se passe parfaitement.
      </p>

      <div style="background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 10px; padding: 20px; margin: 24px 0;">
        <p style="color: #92400E; font-weight: 700; margin: 0 0 12px; font-size: 14px;">✅ Check-list J-7</p>
        <ul style="color: #78350F; margin: 0; padding-left: 20px; line-height: 2.2; font-size: 13px;">
          <li>Confirmer l'accès et le stationnement aux deux adresses</li>
          <li>Signaler tout objet fragile ou de grande valeur à nos équipes</li>
          <li>Préparer vos cartons si vous avez choisi la formule Économique</li>
          <li>Vérifier que vos assurances habitation sont à jour</li>
          <li>Prévoir un accès facilité pour le monte-meuble si nécessaire</li>
        </ul>
      </div>

      <p style="color: #475569; line-height: 1.6;">Un doute, une modification ? Contactez-nous sans attendre.</p>

      <div style="text-align: center; margin: 28px 0;">
        <a href="tel:+33185440050"
           style="display: inline-block; background: #1783FF; color: white; padding: 14px 36px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px;">
          Nous appeler · 01 85 44 00 50
        </a>
      </div>

      <p style="color: #94A3B8; font-size: 11px; margin-bottom: 0;">Réf. ${bookingRef}</p>
    `),
  })
}

// ── Demande d'avis J+3 après déménagement ────────────────────────────────────

export async function sendDemandeAvis({
  to,
  prenom,
  bookingRef,
}: {
  to: string
  prenom: string
  bookingRef: string
}) {
  await transporter.sendMail({
    from:    `"Grondin Déménagement" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Votre déménagement s'est bien passé ? — Grondin Déménagement`,
    html: emailWrapper(`
      <h2 style="color: #0F172A; font-size: 20px; margin: 0 0 8px;">Bonjour ${prenom},</h2>
      <p style="color: #475569; line-height: 1.6;">
        Votre déménagement s'est terminé il y a 3 jours. Nous espérons que tout s'est passé à votre entière satisfaction !
      </p>
      <p style="color: #475569; line-height: 1.6;">
        Votre avis aide d'autres familles parisiennes à choisir un déménageur de confiance.
        Cela prend moins de 2 minutes.
      </p>

      <div style="text-align: center; margin: 32px 0;">
        <p style="font-size: 28px; margin: 0 0 16px;">⭐⭐⭐⭐⭐</p>
        <a href="https://g.page/r/grondin-demenagement/review"
           style="display: inline-block; background: #1783FF; color: white; padding: 14px 36px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 15px;">
          Laisser un avis Google
        </a>
      </div>

      <p style="color: #475569; line-height: 1.6; font-size: 13px;">
        Si quoi que ce soit ne vous a pas satisfait, répondez directement à cet email — nous reviendrons vers vous rapidement.
      </p>

      <p style="color: #94A3B8; font-size: 11px; margin-bottom: 0; border-top: 1px solid #F1F5F9; padding-top: 16px;">
        Réf. ${bookingRef} · Pour ne plus recevoir ces emails : <a href="mailto:contact@grondin-demenagement.fr" style="color: #1783FF;">contact@grondin-demenagement.fr</a>
      </p>
    `),
  })
}

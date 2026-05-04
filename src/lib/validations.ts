import { z } from 'zod'

export const DevisSchema = z.object({
  // Coordonnées
  prenom:    z.string().min(1, 'Prénom requis').max(50),
  nom:       z.string().min(1, 'Nom requis').max(50),
  email:     z.string().email('Email invalide'),
  telephone: z.string().min(10, 'Numéro de téléphone invalide').max(20),

  // Départ
  villeDepart:      z.string().min(1),
  cpDepart:         z.string().length(5, 'Code postal invalide'),
  etageDepart:      z.number().min(0).max(50),
  ascenseurDepart:  z.boolean(),

  // Arrivée
  villeArrivee:     z.string().min(1),
  cpArrivee:        z.string().length(5, 'Code postal invalide'),
  etageArrivee:     z.number().min(0).max(50),
  ascenseurArrivee: z.boolean(),

  // Bien
  typeBien:   z.enum(['appartement', 'maison', 'bureau', 'autre']),
  superficie: z.number().min(5).max(1000),
  nbPieces:   z.number().min(1).max(10),

  // Planning
  dateSouhaitee: z.string().optional(),
  flexibilite:   z.enum(['fixe', 'semaine', 'mois', 'aucune']),
  formule:       z.enum(['economique', 'confort', 'premium', 'conseil']).optional(),

  // Options
  needDismounting: z.boolean().default(false),
  needPacking:     z.boolean().default(false),
  needFullPacking: z.boolean().default(false),
  needCleaning:    z.boolean().default(false),
  needMonteMeuble: z.boolean().default(false),
  needStorage:     z.boolean().default(false),
  storageDuration: z.number().min(1).max(24).optional(),

  // Type client
  movingType: z.enum(['particulier', 'entreprise', 'mutation']).default('particulier'),

  // Tracking
  source:      z.string().optional(),
  utmSource:   z.string().optional(),
  utmMedium:   z.string().optional(),
  utmCampaign: z.string().optional(),

  // Message
  message: z.string().max(1000).optional(),

  // RGPD
  rgpdAccepted: z.boolean().refine(v => v === true, 'Vous devez accepter les CGU'),
  newsletter:   z.boolean().default(false),
})

export type DevisInput = z.infer<typeof DevisSchema>

export const ContactSchema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  phone:   z.string().min(10).max(20).optional(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
})

export type ContactInput = z.infer<typeof ContactSchema>

export const NewsletterSchema = z.object({
  email:     z.string().email(),
  firstName: z.string().min(1).max(50).optional(),
})

export type NewsletterInput = z.infer<typeof NewsletterSchema>

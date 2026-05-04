export type DevisData = {
  // Bien
  typeBien:   string
  superficie: number
  nbPieces:   number

  // Adresses
  villeDepart:      string
  cpDepart:         string
  etageDepart:      number
  ascenseurDepart:  boolean
  villeArrivee:     string
  cpArrivee:        string
  etageArrivee:     number
  ascenseurArrivee: boolean

  // Planning
  dateSouhaitee: string
  flexibilite:   string
  formule:       string

  // Options
  needDismounting: boolean
  needPacking:     boolean
  needFullPacking: boolean
  needCleaning:    boolean
  needMonteMeuble: boolean
  needStorage:     boolean
  storageDuration: number

  // Contact
  prenom:    string
  nom:       string
  telephone: string
  email:     string
  message:   string

  // Consentements
  rgpdAccepted: boolean
  newsletter:   boolean
}

export interface NavLink {
  label: string
  href:  string
  sub?:  { label: string; href: string; icon: string }[]
}

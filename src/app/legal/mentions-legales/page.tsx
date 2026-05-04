import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions Légales — Grondin Déménagement',
  description: 'Mentions légales de Grondin Déménagement, société spécialisée dans le déménagement à Paris et en Île-de-France.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://grondin-demenagement.fr/legal/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-grondin-900 py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Mentions légales' }]} />
          <h1 className="text-fluid-3xl font-extrabold text-white mt-4">
            Mentions légales
          </h1>
          <p className="text-white/70 mt-2">Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16">
        <div className="prose prose-neutral max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">1. Éditeur du site</h2>
            <p className="text-neutral-600 leading-relaxed">
              Le site <strong>grondin-demenagement.fr</strong> est édité par la société <strong>MustShine France</strong>,
              opérant sous la marque commerciale <strong>Grondin Déménagement</strong>.
            </p>
            <ul className="list-none pl-0 space-y-1 text-neutral-600 mt-3">
              <li><strong>Siège social :</strong> Paris (75011), France</li>
              <li><strong>Téléphone :</strong> <a href="tel:+33185440050" className="text-grondin-500 hover:underline">01 85 44 00 50</a></li>
              <li><strong>Email :</strong> <a href="mailto:contact@grondin-demenagement.fr" className="text-grondin-500 hover:underline">contact@grondin-demenagement.fr</a></li>
              <li><strong>Directeur de publication :</strong> Représentant légal de MustShine France</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">2. Hébergement</h2>
            <p className="text-neutral-600 leading-relaxed">
              Le site est hébergé par :
            </p>
            <ul className="list-none pl-0 space-y-1 text-neutral-600 mt-2">
              <li><strong>Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li><a href="https://vercel.com" className="text-grondin-500 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">3. Propriété intellectuelle</h2>
            <p className="text-neutral-600 leading-relaxed">
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes) sont la propriété exclusive de Grondin Déménagement / MustShine France ou de leurs auteurs respectifs, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-neutral-600 leading-relaxed mt-2">
              Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">4. Liens hypertextes</h2>
            <p className="text-neutral-600 leading-relaxed">
              Ce site peut contenir des liens vers d&apos;autres sites internet. Grondin Déménagement ne peut être tenu responsable du contenu de ces sites tiers ni des pratiques de confidentialité qu&apos;ils appliquent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">5. Données personnelles</h2>
            <p className="text-neutral-600 leading-relaxed">
              La collecte et le traitement de vos données personnelles sont décrits dans notre{' '}
              <a href="/legal/politique-de-confidentialite" className="text-grondin-500 hover:underline">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">6. Cookies</h2>
            <p className="text-neutral-600 leading-relaxed">
              Ce site utilise des cookies à des fins analytiques (Google Analytics). Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être averti lorsqu&apos;un cookie est envoyé. Consultez notre{' '}
              <a href="/legal/politique-de-confidentialite" className="text-grondin-500 hover:underline">
                Politique de confidentialité
              </a>{' '}
              pour plus d&apos;informations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">7. Limitation de responsabilité</h2>
            <p className="text-neutral-600 leading-relaxed">
              Grondin Déménagement s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la société ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">8. Droit applicable</h2>
            <p className="text-neutral-600 leading-relaxed">
              Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

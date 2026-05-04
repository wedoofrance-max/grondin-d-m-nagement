import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Grondin Déménagement',
  description: 'Politique de confidentialité de Grondin Déménagement. Comment nous collectons, utilisons et protégeons vos données personnelles.',
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-grondin-900 py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Mentions légales', href: '/legal/mentions-legales' },
            { label: 'Politique de confidentialité' },
          ]} />
          <h1 className="text-fluid-3xl font-extrabold text-white mt-4">
            Politique de confidentialité
          </h1>
          <p className="text-white/70 mt-2">Dernière mise à jour : mai 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-16">
        <div className="prose prose-neutral max-w-none space-y-8">

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">1. Identité du responsable de traitement</h2>
            <p className="text-neutral-600 leading-relaxed">
              La société <strong>Grondin Déménagement</strong>, dont le siège social est à Paris, est responsable du traitement de vos données personnelles collectées via le site grondin-demenagement.fr.
            </p>
            <p className="text-neutral-600 leading-relaxed mt-2">
              Contact : <a href="mailto:contact@grondin-demenagement.fr" className="text-grondin-500 hover:underline">contact@grondin-demenagement.fr</a> — Tél. 01 85 44 00 50
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">2. Données collectées</h2>
            <p className="text-neutral-600 leading-relaxed mb-3">
              Dans le cadre de votre demande de devis, nous collectons les données suivantes :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600">
              <li>Prénom et nom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email</li>
              <li>Adresses de départ et d'arrivée (ville, code postal, étage)</li>
              <li>Type et superficie du logement</li>
              <li>Date souhaitée de déménagement</li>
              <li>Message libre (optionnel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">3. Finalités du traitement</h2>
            <p className="text-neutral-600 leading-relaxed mb-3">Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600">
              <li>Traiter votre demande de devis et vous recontacter</li>
              <li>Établir un devis personnalisé</li>
              <li>Vous envoyer un email de confirmation de votre demande</li>
              <li>Gérer la relation commerciale si vous devenez client</li>
              <li>Vous envoyer des conseils déménagement (si vous y avez consenti)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">4. Base légale</h2>
            <p className="text-neutral-600 leading-relaxed">
              Le traitement de vos données est fondé sur votre consentement explicite (case à cocher dans le formulaire) et sur l'exécution de mesures précontractuelles prises à votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">5. Durée de conservation</h2>
            <p className="text-neutral-600 leading-relaxed">
              Vos données de contact et de demande de devis sont conservées pendant 3 ans à compter de votre dernière interaction avec nos services. Les données des clients sont conservées pendant la durée légale applicable (5 ans pour les données comptables).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">6. Partage des données</h2>
            <p className="text-neutral-600 leading-relaxed">
              Vos données ne sont pas vendues à des tiers. Elles peuvent être partagées avec nos sous-traitants techniques (hébergeur, service email) dans le strict cadre du traitement de votre demande. Ces sous-traitants sont soumis à des obligations de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">7. Vos droits</h2>
            <p className="text-neutral-600 leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@grondin-demenagement.fr" className="text-grondin-500 hover:underline">contact@grondin-demenagement.fr</a>
            </p>
            <p className="text-neutral-600 leading-relaxed mt-2">
              En cas de réclamation non résolue, vous pouvez contacter la CNIL : <a href="https://www.cnil.fr" className="text-grondin-500 hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">8. Cookies</h2>
            <p className="text-neutral-600 leading-relaxed">
              Ce site utilise Google Analytics pour mesurer l'audience (cookies analytiques). Ces cookies collectent des données anonymisées sur votre navigation. Vous pouvez les refuser via votre navigateur.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

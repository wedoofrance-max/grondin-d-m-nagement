import { event } from './gtag'

export const track = {
  devisStarted:       ()                       => event('devis_started',        { category: 'devis' }),
  devisStep:          (step: number)           => event('devis_step_completed',  { category: 'devis', value: step }),
  devisSubmitted:     (ref: string)            => event('devis_submitted',       { category: 'conversion', label: ref }),
  formuleSelected:    (formule: string)        => event('formule_selected',      { category: 'devis', label: formule }),
  phoneClicked:       (source: string)         => event('phone_click',           { category: 'contact', label: source }),
  whatsappClicked:    (source: string)         => event('whatsapp_click',        { category: 'contact', label: source }),
  faqOpened:          (question: string)       => event('faq_opened',            { category: 'engagement', label: question }),
  serviceClicked:     (service: string)        => event('service_clicked',       { category: 'services', label: service }),
  zoneCityClicked:    (city: string)           => event('zone_city_clicked',     { category: 'seo', label: city }),
}

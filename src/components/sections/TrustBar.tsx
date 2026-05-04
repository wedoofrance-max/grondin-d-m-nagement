import { Icon } from '@iconify/react'

const TRUST_ITEMS = [
  { icon: 'ph:star-fill',    label: '4,9/5 Google',       sub: '34 avis vérifiés',                   color: 'text-amber-400' },
  { icon: 'ph:users-three',  label: '1 500+ clients',      sub: 'Accompagnés depuis notre création',  color: 'text-grondin-400' },
  { icon: 'ph:clock',        label: 'Disponible 7j/7',     sub: 'De 8h30 à 20h00',                    color: 'text-grondin-400' },
  { icon: 'ph:shield-check', label: 'Assurance incluse',   sub: 'RC Pro sur tous les déménagements',  color: 'text-grondin-400' },
  { icon: 'ph:handshake',    label: '20+ partenaires B2B', sub: 'Réseau professionnel établi',        color: 'text-grondin-400' },
]

interface TrustBarProps {
  dark?: boolean
}

export function TrustBar({ dark = false }: TrustBarProps) {
  return (
    <div className={`py-8 border-y ${dark ? 'bg-grondin-900 border-white/10' : 'bg-white border-neutral-100'}`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <Icon icon={item.icon} width={28} height={28} className={item.color} aria-hidden />
              <div>
                <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-neutral-900'}`}>
                  {item.label}
                </p>
                <p className={`text-xs ${dark ? 'text-white/50' : 'text-neutral-500'}`}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

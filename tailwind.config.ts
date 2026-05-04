import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grondin: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#1783FF',
          600: '#1268CC',
          700: '#0E4F9E',
          800: '#0B3B76',
          900: '#071A2E',
        },
        brand: {
          primary: '#1783FF',
          dark:    '#071A2E',
          amber:   '#F59E0B',
          success: '#22C55E',
          error:   '#EF4444',
        },
        success: {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
        },
        error: {
          50:  '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs':   ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',   { lineHeight: '1.5' }],
        'fluid-sm':   ['clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',    { lineHeight: '1.5' }],
        'fluid-base': ['clamp(1rem, 0.975rem + 0.125vw, 1.0625rem)', { lineHeight: '1.65' }],
        'fluid-lg':   ['clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', { lineHeight: '1.5' }],
        'fluid-xl':   ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',    { lineHeight: '1.35' }],
        'fluid-2xl':  ['clamp(1.5rem, 1.375rem + 0.625vw, 1.875rem)', { lineHeight: '1.35' }],
        'fluid-3xl':  ['clamp(1.875rem, 1.625rem + 1.25vw, 2.5rem)', { lineHeight: '1.2' }],
        'fluid-4xl':  ['clamp(2.25rem, 1.875rem + 1.875vw, 3.25rem)', { lineHeight: '1.15' }],
        'fluid-5xl':  ['clamp(2.75rem, 2.25rem + 2.5vw, 4rem)',      { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm':  '4px',
        'md':  '8px',
        'lg':  '12px',
        'xl':  '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'xs':         '0 1px 2px 0 rgba(0,0,0,0.05)',
        'sm':         '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'md':         '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)',
        'lg':         '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)',
        'xl':         '0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)',
        '2xl':        '0 25px 50px -12px rgba(0,0,0,0.18)',
        'grondin':    '0 8px 24px -4px rgba(23,131,255,0.25)',
        'card':       '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-in':    'fadeIn 0.3s ease-out forwards',
        'slide-up':   'slideUp 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer':    'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:   { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { from: { opacity: '0', transform: 'translateY(-12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseSoft: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.75' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
}

export default config

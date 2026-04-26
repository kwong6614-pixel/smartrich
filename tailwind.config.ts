import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        secondary: '#0f172a',
        accent: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        panel: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        gradient: {
          start: 'var(--color-primary)',
          end: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
        'xl-2': '2.5rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(30, 58, 138, 0.1)',
        card: '0 4px 6px -1px rgba(30, 58, 138, 0.1), 0 2px 4px -1px rgba(30, 58, 138, 0.06)'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary) 0%, #6366f1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-border) 100%)'
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0d0d0f',
          800: '#141418',
          700: '#1f1f26'
        },
        accent: {
          400: '#62f5ff',
          500: '#3ad9ff',
          600: '#00b5f5'
        },
        ember: {
          400: '#ff8c5a',
          500: '#ff6a3d'
        },
        mist: {
          100: '#e6e7f2',
          200: '#cfd2e6'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'var(--font-hebrew)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        wide: '0.04em'
      }
    }
  },
  plugins: []
};

export default config;

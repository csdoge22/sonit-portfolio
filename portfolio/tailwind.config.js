/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#02EEFF',
          dark: '#00c8d6',
        },
        secondary: '#7B61FF',
        dark: {
          bg: '#00033B',
          bg2: '#0a0c2e',
          bg3: '#15173a',
        },
        glass: {
          bg: 'rgba(29, 31, 81, 0.75)',
          border: 'rgba(2, 238, 255, 0.25)',
          highlight: 'rgba(123, 97, 255, 0.15)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b2ebf2',
          tertiary: '#80deea',
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'xl': '24px',
        'lg': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shine: {
          'to': { 'background-position': '200% center' },
        },
      },
      boxShadow: {
        'primary': '0 8px 32px rgba(2, 238, 255, 0.25)',
        'secondary': '0 4px 24px rgba(123, 97, 255, 0.2)',
        'glow': '0 0 20px rgba(2, 238, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
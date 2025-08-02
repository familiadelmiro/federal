/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // Azul Royal
          light: '#3b82f6',   // Azul mais claro
          dark: '#1e3a8a',    // Azul mais escuro
        },
        accent: {
          DEFAULT: '#22c55e', // Verde para CTAs
          light: '#4ade80',   // Verde claro
          dark: '#16a34a',    // Verde escuro
        },
        warning: {
          DEFAULT: '#eab308', // Amarelo para ofertas
          light: '#facc15',
          dark: '#ca8a04',
        },
        danger: {
          DEFAULT: '#ef4444', // Vermelho para urgência
          light: '#f87171',
          dark: '#dc2626',
        },
        light: '#f5f5f5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
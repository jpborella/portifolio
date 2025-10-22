/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f19', 
        surface: '#111827', 
        primary: {
          DEFAULT: '#22c55e', 
          600: '#16a34a',
        },
        secondary: {
          DEFAULT: '#8b5cf6', 
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.45)'
      },
    }
  },
  plugins: []
}

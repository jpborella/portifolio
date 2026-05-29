/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f', 
        surface: '#141414', 
        primary: {
          DEFAULT: '#10b981', 
          600: '#059669',
        },
        secondary: {
          DEFAULT: '#00ff88', 
          600: '#00cc6d',
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

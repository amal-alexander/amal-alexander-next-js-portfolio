/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#00d4ff',
          purple: '#8b5cf6',
          green: '#10b981',
        },
        dark: {
          bg: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
        },
        text: {
          light: '#ffffff',
          gray: '#a0a0a0',
          'light-gray': '#d0d0d0',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6, #10b981)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-page': '#0a0a0b',
        'bg-card': '#141416',
        'bg-elevated': '#1a1a1d',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1a6',
        'text-muted': '#6b6b70',
        'accent-primary': '#0066ff',
        'accent-hover': '#0052cc',
        'accent-light': 'rgba(0, 102, 255, 0.1)',
        'border-subtle': 'rgba(255, 255, 255, 0.06)',
        'border-medium': 'rgba(255, 255, 255, 0.1)',
        'border-strong': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'card': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}
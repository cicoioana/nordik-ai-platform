/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nordik: {
          cream: '#FFFBF7',
          peach: '#FFD4B4',
          pink: '#FFB6D9',
          lavender: '#E8D5F2',
          purple: '#C9B1E4',
          orange: '#FFB84D',
          navy: '#1A2332',
          white: '#FFFFFF',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'drift': 'drift 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
        'glow': '0 0 30px rgba(255, 180, 77, 0.15)',
      },
    },
  },
  plugins: [],
}

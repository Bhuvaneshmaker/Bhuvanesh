/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { keyframes: {
        'horizontal-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        'horizontal-scroll': 'horizontal-scroll 20s linear infinite',
        'fadeInUp': 'fadeInUp 0.5s ease-out forwards'
      }},
  },
  
  plugins: [],
};

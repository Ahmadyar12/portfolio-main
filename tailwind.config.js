const { useWillChange } = require("framer-motion");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themcolor: '#f5df4e',
        FullRed: '#FF0000'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      screens: {
        'xs': '480px',
        'xxs': '320px'
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateY(-100%)', opacity: '0', willChange: 'transform, opacity' },
          '100%': { transform: 'translateY(0)', opacity: '1', willChange: 'transform, opacity' },

        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            transform: 'translateY(20px)', // Start slightly below
            opacity: '0', // Start as invisible
          },
          '100%': {
            transform: 'translateY(0)', // Move to original position
            opacity: '1', // Fade in to full visibility
          },
        },
      },
    },
  },
  plugins: [],
}

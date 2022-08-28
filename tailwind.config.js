/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', '微軟正黑體', 'sans-serif']
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px'
        }
      },
      colors: {
        primary: '#94ECFF',
        secondary: '#21B8D9'
        // ...
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 49.48%, #070707 88.54%), url('@/assets/images/3_Forest009.png')",
        'content-prairie':
          'linear-gradient(180deg, #070707 7.29%, rgba(7, 7, 7, 0) 53.65%, #070707 86.98%), url(@/assets/images/2_Prairie005.png)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

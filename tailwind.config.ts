import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ct-dark-600': '#222',
        'ct-dark-200': '#e5e7eb',
        'ct-dark-100': '#f5f6f7',
        'ct-blue-600': '#362869',
        'ct-yellow-600': '#f9d13e',
        'light-blue': '#83BEDF',
        'dark-blue': '#0093EE',
        'darker-blue': '#174A84',
        'light-gray': '#707070',
        'lighter-gray': '#9EA0A5',
        'lightest-gray': '#E3E3E3',
        'dark-gray': '#5A5A5A',
        'darker-gray': '#45484B',
        'progress-bar': '#EAECEE',
        'k24-primary': '#362869',
        'k24-secondary': '#4A4999',
        'k24-tertiary': '#C1BDD0',
      },
      fontSize: {
        '10px': '.625rem', //10px
        '11px': '0.6875rem', //11px
        '15px': '0.9375rem', //15px
        '22px': '1.375rem', //22px
        '35px': '2.1875rem', //35px
        '55px': '3.4375rem', //55px
      },
      fontFamily: {
        Poppins: ['Poppins, sans-serif'],
        //'lato': ['Lato', 'sans-serif'],
      },
      screens: {
        'c-2xl': { 'max': '1535px' },
        'c-xl': { 'max': '1279px' },
        'c-lg': { 'max': '1023px' },
        'c-md': { 'max': '767px' },
        'c-sm': { 'max': '639px' },
        'c-xs': { 'max': '475px', },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1125px',
          xl: '1125px',
          '2xl': '1125px',
        },
      },
    },
  },
  plugins: [],
};
export default config;

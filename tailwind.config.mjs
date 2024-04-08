/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      columns: {
        '4xs': '12rem',
      },
    },
    backgroundPosition: {
        custom: 'calc(100% - 750px) 50%',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    container: {
      center: true,
    },
    colors: {
      body: '#fff',
      primary: '#fff',
      white: '#FFF',
      blue: '#0177fd',
      red: '#fa5500',
      black: '#000',
      yellow: '#ffd001',
      transparent: 'transparent',
      card: '#003267'
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography')],
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
};

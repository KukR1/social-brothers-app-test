/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sb-gray': '#262626',
        'sb-gray-100': '#868686',
        'sb-gray-200': '#7D7D7D',
        'sb-gray-300': '#404040',
        'sb-black-100': '#262626',
        'sb-white-100': '#F4F4F4',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2560px',
    },
  },
  plugins: [],
};

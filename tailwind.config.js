/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary-medium': '#2A7AE4',
        'color-frontend': '#6BD1FF',
        'color-backend': '#69953B',
        'color-mobile': '#FFBA05',
        'color-ux': '#DC6EBE',
        'color-infra': '#9CD33B',
        'color-marketing': '#6B5BE2',
        'color-inovation': '#FF8C2A',
        'color-data-science': '#9CD33B',
        'color-black-dark': 'rgba(0, 0, 0, 0.9)',
        'color-gray-medium': 'rgba(0, 0, 0, 0.6)',
        'color-gray-light': 'rgba(0, 0, 0, 0.5)',
        'color-gray-lighter': '#9E9E9E',
        'color-gray-dark': '#C2C2C2',
        'color-gray-medium': '#E5E5E5',
        'color-gray-light': '#F5F5F5',
        'color-error-dark': '#C62828',
        'color-error-medium': '#E53935',
        'color-error-light': '#FCE7E7',
      },
      fontSize: {
        'title-big': '3.75rem',
        'title-medidum': '2.875rem',
        'title-small': '2.1875rem',
        'body-big': '1.6875rem',
        'body-medium': '1.125rem',
        'body-small': '1rem',
        'body-smaller': '0.75rem',
      },
    },
  },
  plugins: [],
};

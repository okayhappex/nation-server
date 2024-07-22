/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{html,vue,js}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffb800',
        'secondary': '#3257ec',
        'tertiary': '#26ce85',
      }
    },
  },
  plugins: [],
}


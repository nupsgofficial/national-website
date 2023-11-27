/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        primary: '#572FC6',
        'primary-1': '#272330',
        'primary-2': '#333343',
        'primary-3': '#29292F',
        secondary: '#6c63ff',
        'color-1': '#fff' //text-color
      }
    }
  },
  plugins: []
}

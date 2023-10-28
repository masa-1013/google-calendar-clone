/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: '96px minmax(200px, 1fr)'
      }
    }
  },
  plugins: []
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { 'tablet': { min: '640px', max: '1180px' } },
    },
  },
  plugins: [],
}

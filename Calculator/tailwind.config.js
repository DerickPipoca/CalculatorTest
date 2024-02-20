/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Barlow Semi Condensed"]
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}


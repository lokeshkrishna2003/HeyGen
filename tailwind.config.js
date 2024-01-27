/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // 194, 181, 251
        'custom': '2px 15px 12px rgba(198, 184, 252, 1)', // Customize as needed
      },
    },
  },
  plugins: [],
}
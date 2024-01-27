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
        'video': '-180px 180px 400px rgba(153, 132, 250, 1)', // Customize as needed
        'video1': '-20px 250px 600px rgba(198, 184, 270, 1)', // Customize as needed
      },
      borderWidth:{
        'custom': '2px 15px 12px rgb(80, 60, 187)',
      }
      ,
      borderColor:{
        'custom': 'rgb(80, 60, 187)', // Replace with your desired color value
      }
    },
  },
  plugins: [],
}
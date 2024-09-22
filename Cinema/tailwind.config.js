/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

      screens: {
        'xs': '390px', // Crée un nouveau point de rupture pour 390px
      },
    
    colors: {
      principal: '#002C45',
      spantextcolor: '#591DA7',
      backgroundticket: "#2017B6",
      backgroundprincipal: "#15121E",
    },
  },
},
  plugins: [],
}


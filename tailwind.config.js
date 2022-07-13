module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
        spacing: {
            '128': '32rem',
            '68' : '17rem',
            '120': '30rem',
            '80src': '80vh',
            '25wid': '25vw',
            '50wid': '50vw',
            '35wid': '35vw',
            '55wid': '55vw',
            '80wid': '80vw',
        }
    },
  },
  plugins: [
      require('tailwind-scrollbar'),
  ],
  variants:{
      scrollbar:['rounded'],
  }
}

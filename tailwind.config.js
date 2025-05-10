module.exports = {
  content: ["public/*.{html,js}", "public/User/*.{html,js}", "public/Admin/*.html",'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      fontFamily:{Poppins:['Poppins']}
    },
  },
  utilities: {
    bgimg: {
      '.bg-img': {
        '@apply bg-[url(`/src/assests/loginbg.png`)] bg-contain bg-no-repeat': '',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
      require('preline/plugin'),
  ],
}
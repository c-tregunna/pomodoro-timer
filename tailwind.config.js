/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
            "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'serif'],
        },
      colors: {
        'retro-green': "#22C55E",
        'retro-drk-green': "#16803C"
      },
     },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}


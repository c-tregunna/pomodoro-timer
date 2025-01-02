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
      keyframes: {
        moveAlienHorizontal: {
          "0%": {
            left: "0%"
          },
          "50%": {
            left: "50%"
          },
          "100%": {
            left: "100%"
          }
        }
      },
      animation: {
        moveAlien: "moveAlienHorizontal 5s steps(16) infinite alternate"
      }
     },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}


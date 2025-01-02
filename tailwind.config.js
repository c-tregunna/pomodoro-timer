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
        },
        blink: {
          "0%": {
            color: "black"
          },
          "100%": {
            color: "#22C55E"
          }
        }
      },
      animation: {
        moveAlien: "moveAlienHorizontal 5s steps(8) infinite alternate",
        cursorBlink: "blink .8s ease-in-out infinite"
      }
     },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}


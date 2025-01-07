/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
            "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'serif'],
        },
      colors: {
        'retro-green': "#22C55E",
        'retro-drk-green': "#16803C",
        "gross-pink": "#FD6EFC",
        "gross-yellow": "#FFEB24"
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
        },
        blinkDark: {
          "0%": {
            color: "white"
          },
          "100%": {
            color: "#FD6EFC"
          }
        }
      },
      animation: {
        moveAlien: "moveAlienHorizontal 5s steps(8) infinite alternate",
        cursorBlink: "blink .8s ease-in-out infinite",
        cursorBlinkDark: "blinkDark .8s ease-in-out infinite"
      }
     },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1040px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1100px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1536px) { ... }
    }
  }
  }



const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  // ... el resto igual
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bordo: "#9D2235",
        "bordo-dark": "#7A1A29",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // Aquí agregamos la fuente playfair:
      fontFamily: {
        playfair: ['var(--font-playfair)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

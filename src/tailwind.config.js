module.exports = {
  important: "#app",
  purge: false,
  theme: {
    extend: {
      screens: {
        xxl: "2560px",
      },
      fontFamily: {
        sans: ["Maven Pro", "sans-serif"],
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        gray: {
          100: "#f3f4fa",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#717485",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        purple: {
          100: "#E9F0EF",
          200: "#C8DAD8",
          300: "#A6C3C0",
          400: "#649790",
          500: "var(--color-primary, #216A61)",
          600: "#1E5F57",
          700: "#14403A",
          800: "#0F302C",
          900: "#0A201D",
        },
      },
    },
    fill: (theme) => ({
      purple: theme("colors.purple.500"),
    }),
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "even", "odd"],
    textColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};

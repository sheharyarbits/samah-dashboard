/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        button:
          "linear-gradient(180deg, rgba(9,9,9,1) 5%, rgba(139,139,139,1) 100%)",
      },
    },
  },
  plugins: [],
};

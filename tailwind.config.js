/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "intro": 'hsl(217, 28%, 15%)',
        "main": ' hsl(218, 28%, 13%)',
        'footer': 'hsl(216, 53%, 9%)',
        'testimonials': 'hsl(219, 30%, 18%)',
        'inside-Cyan': 'hsl(176, 68%, 64%)',
        'inside-black': 'hsl(198, 60%, 50%)',
        'error': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'Open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

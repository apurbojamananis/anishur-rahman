/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          PrimaryBg: "#111418",
          SecondaryBg: "#19293B",
          PrimaryText: "#ffffff",
          SecondaryText: "#999999",
          MenuText: "#F3FAFF",
        },
        light: {
          PrimaryBg: "#ffffff",
          SecondaryBg: "#f6f6f6",
          AccentBg: "#ffffff",
          PrimaryText: "#121212",
          SecondaryText: "#757575",
          MenuText: "#F3FAFF",
        },
      },
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary: ["PT Serif", "serif"],
    },
  },
  plugins: [require("daisyui")],
};

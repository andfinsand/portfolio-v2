import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '0px 10px 25px 0px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        poppinsLight: ['PoppinsLight', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsSemiBold: ['PoppinsSemiBold', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

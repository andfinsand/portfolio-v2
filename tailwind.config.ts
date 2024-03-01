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
      colors: {
        dividerColor: 'rgba(7, 23, 22, 0.2)',
        projectFooter: 'rgba(150, 150, 150, 0.7)',
        offBlack: 'rgba(48, 48, 48)',
      },
      fontFamily: {
        poppinsLight: ['PoppinsLight', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsMedium: ['PoppinsMedium', 'sans-serif'],
        poppinsSemiBold: ['PoppinsSemiBold', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
      },
      screens: {
        '3xl': '1792px',
      }
    },
  },
  plugins: [],
};
export default config;

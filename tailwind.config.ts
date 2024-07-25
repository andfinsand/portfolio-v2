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
        'customShadowLarge': 'rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.15) 0px 3px 6px',
        'customShadowSmall': 'rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.15) 0px 1.5px 3px',
      },
      colors: {
        dividerColor: 'rgba(7, 23, 22, 0.2)',
        projectFooter: 'rgba(130, 130, 130, 0.7)',
        technologyBubblesGray: 'rgba(140, 140, 140)',
        offBlack: 'rgba(48, 48, 48)',
      },
      fontFamily: {
        poppinsLight: ['PoppinsLight', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsMedium: ['PoppinsMedium', 'sans-serif'],
        poppinsSemiBold: ['PoppinsSemiBold', 'sans-serif'],
        poppinsBold: ['PoppinsBold', 'sans-serif'],
        poppinsBlack: ['PoppinsBlack', 'sans-serif'],
        robotoCondensedLight: ['RobotoCondensedLight', 'sans-serif'],
        robotoCondensedMedium: ['RobotoCondensedMedium', 'sans-serif'],
        robotoCondensedBold: ['RobotoCondensedBold', 'sans-serif'],
      },
      screens: {
        'xs': '512px',
        '3xl': '1792px',
        '4xl': '2048px',
      }
    },
  },
  plugins: [],
};
export default config;

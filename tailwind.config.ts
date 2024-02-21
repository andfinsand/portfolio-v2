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
        bannerColorFrom: 'rgba(28, 39, 50, 0.9)',
        bannerColorTo: 'rgba(28, 39, 50)',
        dividerColor: 'rgba(80, 80, 80, 0.15)',
        layerColorFrom: 'rgba(255, 183, 130, 0.2)',
        layerColorTo: 'rgba(35, 48, 64, 0.0)',
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

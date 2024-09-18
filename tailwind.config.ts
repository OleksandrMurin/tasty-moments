import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange100':'#FFC295',
        'orange200':'#F28738',
        'orange400':'#CD5C08',
        'orange600':'#93440A',
        'sage200':'#CEE5D0',
        'sage400':'#B0D2B3',
        'sage600':'#6E9371',
        'teal200':'#9AC6B5',
        'teal400':'#6A9C89',
        'teal600':'#30624F',
        'cream200':'#FFF8ED',
        'cream400':'#FFF5E4',
        'cream600':'#F3DDB8',
        'cold-grey200':'#B7C8C2',
        'cold-grey400':'#8DA19A',
        'cold-grey600':'#202523',
        'warm-grey200':'#CCC7C3',
        'warm-grey400':'#908985',
        'warm-grey600':'#282624',
        'green': '#48CC54',
        'red': '#E71D35',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-img": "url('/hero-img.png')"
      },
    },
  },
  plugins: [],
};
export default config;

import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'main-title': '28px',
        'secondary-validation': '13px',
      },
      colors: {
        success: '#27B274',
        danger: '#FF8080',
        placeholder: '#6F91BC',
        'main-text': '#4A4E71',
      },
      backgroundImage: {
        'main-image': "url('/img/stars-group.svg')",
        'main-gradient': 'linear-gradient(167.96deg, #F4F9FF 0%, #E0EDFB 100%)',
        'action-gradient': 'linear-gradient(110.46deg, #70C3FF 12.27%, #4B65FF 93.92%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;

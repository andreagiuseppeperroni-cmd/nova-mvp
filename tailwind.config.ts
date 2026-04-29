import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg0: '#12071f',
          bg1: '#1b1033',
          bg2: '#111827',
          pink: '#ec4899',
          fuchsia: '#d946ef',
          violet: '#8b5cf6',
          cyan: '#22d3ee',
          lime: '#bef264',
        }
      },
      boxShadow: {
        candy: '0 18px 70px rgba(217, 70, 239, .22)',
      }
    },
  },
  plugins: [],
};
export default config;

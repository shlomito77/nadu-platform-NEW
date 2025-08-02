import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./client/**/*.{html,tsx}', './server/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {},
};

export default config;

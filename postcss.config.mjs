/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ correct package
    autoprefixer: {},
  },
};

export default config;

module.exports = {
  content: [
    './index.js',
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};

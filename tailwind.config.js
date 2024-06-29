module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
     'node_modules/flowbite-react/lib/esm/**/*.js'
]
};

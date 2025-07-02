// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tangua: {
          'lake-blue': '#3BAFDA',
          'bamboo-beige': '#EDE9DD',
          'sunset-orange': '#F4A261',
          'deep-green': '#264653',
          'charcoal-grey': '#333333',
          'cloud-white': '#FAFAFA',
          'green': {
            DEFAULT: '#4CAF50',
            dark: '#388E3C',
            light: '#8BC34A',
          },
        },
      },
    },
  },
  plugins: [],
}

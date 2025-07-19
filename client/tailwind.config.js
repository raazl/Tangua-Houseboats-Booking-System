// tailwind.config.js
// This file configures Tailwind CSS for the project.
export default {
  // Specify files to scan for Tailwind classes to optimize output size
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  // Define and extend Tailwind's default theme
  theme: {
    extend: {
      // Custom color palette for the Tangua theme
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
      // Define custom keyframe animations
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      // Map keyframe animations to utility classes
      animation: {
        'fade-up': 'fade-up 1s ease-out',
      },
    },
  },
  // Add Tailwind CSS plugins here
  plugins: [],
}

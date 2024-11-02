// Import daisyui at the top of the file
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'nanum': ['Nanum Gothic Coding', 'monospace'],
      },
    },
  },
  plugins: [
    daisyui, // Use the imported daisyui plugin directly
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570df8", 
          "secondary": "#f000b8", 
          "accent": "#37cdbe", 
          "neutral": "#3d4451", 
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
}

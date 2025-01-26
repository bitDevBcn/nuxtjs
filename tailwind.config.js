/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),       // Mejora los estilos de los formularios
    require('@tailwindcss/typography'),  // Estiliza el contenido de texto largo
    require('@tailwindcss/aspect-ratio'), // Gestión de proporciones de elementos
  ],
};

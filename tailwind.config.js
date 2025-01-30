/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),       // Mejora los estilos de los formularios
    require('@tailwindcss/typography'),  // Estiliza el contenido de texto largo
    require('@tailwindcss/aspect-ratio'), // Gestión de proporciones de elementos
    require('flowbite/plugin'),          // Importa los estilos de Flowbite
  ],
};

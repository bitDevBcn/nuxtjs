// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    assets: "#rootDir/assets",
  },
  css: ['./assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@pinia/nuxt'],
  postcss: {
    plugins: {
      '@tailwindcss/nesting': {},  // Corrección aquí
      tailwindcss: {},  
      autoprefixer: {},
    },
  },
});





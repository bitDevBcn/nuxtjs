<template>
    <header class="bg-gray-900 text-white py-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <h1 class="text-xl font-bold">Mi Sitio</h1>
  
        <!-- Menú de navegación -->
        <nav>
          <ul class="hidden md:flex space-x-6">
            <li><NuxtLink to="/" class="hover:underline">Inicio</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:underline">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">Contacto</NuxtLink></li>
          </ul>
  
          <!-- Botón de menú hamburguesa en móvil -->
          <button class="md:hidden text-2xl" @click="toggleMenu">☰</button>
        </nav>
      </div>
  
      <!-- Menú desplegable en móvil -->
      <div v-if="menuOpen" class="md:hidden bg-gray-800 p-4">
        <ul class="space-y-3">
          <li><NuxtLink to="/" class="block hover:underline">Inicio</NuxtLink></li>
          <li><NuxtLink to="/about" class="block hover:underline">Nosotros</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block hover:underline">Contacto</NuxtLink></li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Estado para el menú hamburguesa
  const menuOpen = ref(false)
  
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }
  </script>
  
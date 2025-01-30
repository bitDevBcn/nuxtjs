<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <Header />
  
      <!-- Contenido principal -->
      <main class="flex-1 container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
        <slot />
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
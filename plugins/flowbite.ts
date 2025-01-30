export default defineNuxtPlugin((nuxtApp) => {
    // Solo importar Flowbite en el cliente
    if (import.meta.client) {
      // Importar dinámicamente Flowbite
      import('flowbite').then((module) => {
        // Asignar el módulo a window para asegurarnos que esté disponible globalmente
        (window as any).Flowbite = module;
      }).catch((error) => {
        console.error("Error al cargar Flowbite:", error);
      });
    }
  });
  
  
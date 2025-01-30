<template>
  <div class="p-4">
    <!-- Botón para abrir el modal -->
    <button @click="openModal"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Abrir Modal
    </button>

    <!-- Modal -->
    <div id="example-modal" ref="modalRef" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow">
          <div class="p-4 border-b">
            <h3 class="text-lg font-semibold text-gray-900">Este es un modal de Flowbite</h3>
          </div>
          <div class="p-4">
            <p class="text-sm text-gray-600">Si puedes ver esto, Flowbite está funcionando correctamente.</p>
          </div>
          <div class="flex justify-end p-4 border-t">
            <button @click="closeModal"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Referencia al modal
const modalRef = ref(null);
let modalInstance = null;

onMounted(async () => {
  if (import.meta.client) {
    const { Modal } = await import("flowbite");

    if (modalRef.value) {
      modalInstance = new Modal(modalRef.value);
    }
  }
});

// Función para abrir el modal
const openModal = () => {
  if (modalInstance) {
    modalInstance.show();
  }
};

// Función para cerrar el modal
const closeModal = () => {
  if (modalInstance) {
    modalInstance.hide();
  }
};
</script>





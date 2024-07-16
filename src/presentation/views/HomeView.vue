<script setup lang="ts">
// Importa el router para poder navegar
import { useRouter } from 'vue-router';

const router = useRouter();

// Funciones para navegar
const goToLogin = () => {
  router.push({ name: 'login' }); // Asume que tienes una ruta llamada 'login'
};

const goToRegister = () => {
  router.push({ name: 'register' }); // Asume que tienes una ruta llamada 'register'
};
</script>

<template>
  <main>
    <h1>Home</h1>
    <!-- Botones para navegar a login y registro -->
    <button class="btn btn-primary" @click="goToLogin">Login</button>
    <button class="btn btn-secondary" @click="goToRegister">Register</button>
  </main>
</template>
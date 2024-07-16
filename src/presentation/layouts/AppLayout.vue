<template>
  <Header />
  <main class="m-16">
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import Header from "@/presentation/structures/Header.vue"
</script>
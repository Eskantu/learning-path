
<script setup lang="ts">
import navbar from './components/navbar.vue';
import sidebar from './components/sidebar.vue';
</script>
<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">

    <navbar />

    <!-- Sidebar -->
    <sidebar />


    <main class="p-4 md:ml-64 h-screen pt-20">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>

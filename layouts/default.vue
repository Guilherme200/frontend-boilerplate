<template>
  <div class="bg-gray-50 dark:bg-gray-800">
    <Navbar />
    <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main>
          <slot />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/layouts/navbar/index.vue";
import Sidebar from "~/layouts/sidebar/index.vue";
import Footer from "~/layouts/footer/index.vue";
import { initFlowbite } from 'flowbite'

onMounted(() => initFlowbite())
</script>

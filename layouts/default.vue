<template>
  <div class="bg-gray-100 h-screen">
    <Navbar />
    <div class="flex h-[90vh]">
      <Sidebar />
      <div class="relative w-full">
        <main class="px-4 pt-4 overflow-y-auto flex h-full flex-col">
          <Breadcrumb class="flex-none" />
          <div class="w-full p-4 bg-white border-b border-gray-200 grow overflow-y-auto">
            <div class="w-full flex-none">
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl mb-4">
                {{ title }}
              </h1>
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/layouts/template/navbar/index.vue'; 
import Sidebar from '~/layouts/template/sidebar/index.vue';
import Breadcrumb from '~/layouts/template/Breadcrumb.vue';

const route = useRoute()
const title = _get(route.meta, 'title', '')
</script>

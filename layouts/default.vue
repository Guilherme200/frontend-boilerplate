<template>
  <div class="bg-gray-50">
    <Navbar class="h-[6vh]"/>
    <div class="flex overflow-hidden bg-gray-50">
      <Sidebar/>
      <div class="relative w-full bg-gray-50 h-[94vh]">
        <main class="p-4 h-full">
          <Breadcrumb/>
          <div class="w-full p-4 bg-white block sm:flex h-full justify-between border-b border-gray-200 lg:mt-1.5">
            <div class="w-full h-full">
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl mb-4">{{ title }}</h1>
              <slot/>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/layouts/template/navbar/index.vue";
import Sidebar from "~/layouts/template/sidebar/index.vue";
import Breadcrumb from "~/layouts/template/Breadcrumb.vue";

const route = useRoute()
const title = _get(route.meta, 'title', '')
</script>

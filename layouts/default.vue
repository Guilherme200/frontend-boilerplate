<template>
  <div class="bg-gray-50">
    <Navbar class="h-[6vh]" />
    <div class="flex overflow-hidden bg-gray-50">
      <Sidebar/>
      <div id="main-content" class="relative w-full overflow-y-auto bg-gray-50 h-[94vh]">
        <main class="m-4">
          <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
            <div class="w-full mb-1">
              <div class="mb-4">
                <Breadcrumb/>
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">{{ title }}</h1>
              </div>
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

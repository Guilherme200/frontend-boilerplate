<template>
  <div class="bg-gray-50 dark:bg-gray-800">
    <Navbar/>
    <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar/>
      <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main class="px-4 pt-6">
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
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/layouts/template/navbar/index.vue";
import Sidebar from "~/layouts/template/sidebar/index.vue";
import Footer from "~/layouts/template/footer/index.vue";
import Breadcrumb from "~/layouts/template/Breadcrumb.vue";

const route = useRoute()
const title = _get(route.meta, 'title', '')
</script>

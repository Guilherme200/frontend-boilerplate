<template>
  <div class="flex flex-col lg:flex-row justify-between mt-5">
    <div class="flex text-gray-500 items-center mt-4 text-sm lg:mt-0">
      <span>Total de itens cadastrados:</span>
      <span class="ml-2 text-gray-600 font-medium">150</span>
    </div>
    <div class="flex flex-col lg:flex-row items-center text-sm">
      <label class="text-gray-500 mt-4 mr-2 lg:mt-0">Itens por página:</label>
      <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block">
        <option selected>
          10
        </option>
        <option value="15">
          15
        </option>
        <option value="20">
          20
        </option> 
        <option value="25">
          25
        </option>
      </select>
    </div>

    <nav class="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">
      <NuxtLink to="" class="p-2 mr-2 rounded hover:bg-gray-100">
        <AngleLeftIcon />
      </NuxtLink>
      <NuxtLink to="" class="px-4 py-2 text-gray-500 text-sm rounded hover:bg-gray-100">
        1
      </NuxtLink>
      <NuxtLink to="" class="px-4 py-2 text-gray-500 text-sm rounded hover:bg-gray-100">
        2
      </NuxtLink>
      <NuxtLink
        to=""
        class="px-4 py-2 text-sm rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"
      >
        3
      </NuxtLink>
      <NuxtLink to="" class="px-4 py-2 text-gray-500 text-sm rounded hover:bg-gray-100">
        ...
      </NuxtLink>
      <NuxtLink to="" class="px-4 py-2 text-gray-500 text-sm rounded hover:bg-gray-100">
        10
      </NuxtLink>
      <NuxtLink to="" class="px-4 py-2 text-gray-500 text-sm rounded hover:bg-gray-100">
        11
      </NuxtLink>
      <NuxtLink to="" class="px-4 py-2 text-gray-500 text-sm rounded hover:bg-gray-100">
        12
      </NuxtLink>
      <a href="#" class="p-2 ml-2 rounded hover:bg-gray-100">
        <AngleRightIcon />
      </a>
    </nav>
  </div>
</template>
<script setup lang="ts">
import AngleLeftIcon from '~/components/shared/icons/AngleLeftIcon.vue';
import AngleRightIcon from '~/components/shared/icons/AngleRightIcon.vue';
</script>

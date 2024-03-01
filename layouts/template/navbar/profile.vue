<template>
  <div class="flex items-center ml-3">
    <div>
      <button
        type="button"
        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
        @click="dropdown = !dropdown"
      >
        <img
          class="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="user photo"
        >
      </button>
    </div> 

    <div v-show="dropdown" class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow profile">
      <div class="px-4 py-3">
        <p class="text-sm text-gray-900 dark:text-white">
          João Lucas
        </p>
        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
          joaolucas@email.com
        </p>
      </div>
      <ul class="py-1">
        <li>
          <NuxtLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Configurações
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sair
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const dropdown = ref(false)
</script>

<style scoped>
.profile {
  position: absolute;
  inset: 0 auto auto 0;
  margin: 0;
  transform: translate3d(1489px, 61px, 0px);
}
</style>

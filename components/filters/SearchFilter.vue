<template>
  <div class="flex items-center mb-4 sm:mb-0">
    <div class="sm:pr-3">
      <div class="relative w-48 mt-1 sm:w-64 xl:w-96">
        <input
            type="text"
            name="search"
            class="search focus:ring-primary-500 focus:border-primary-500"
            placeholder="Pesquisar..."
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  @apply bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5
}
</style>

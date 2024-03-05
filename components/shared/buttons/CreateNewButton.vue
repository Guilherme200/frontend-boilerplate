<template>
  <NuxtLink :to="link" class="button focus:ring-4 focus:ring-primary-300 focus:outline-none">
    <PlusIcon class="text-sm text-white" />
    <span class="mx-2">{{ title }}</span>
  </NuxtLink>
</template>
<script setup lang="ts"> 
import PlusIcon from '../icons/PlusIcon.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  link:  {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.button {
  @apply flex text-white bg-primary hover:bg-primary items-center font-medium rounded-lg text-sm px-5 py-2.5
}
</style>

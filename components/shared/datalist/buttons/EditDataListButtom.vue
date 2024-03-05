<template>
  <NuxtLink
    :to="link"
    type="button"
    class="btn-action bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-200"
  >
    <EditIcon />
  </NuxtLink>
</template>
<script setup lang="ts">
import EditIcon from '../../icons/EditIcon.vue';

defineProps({
  link:  {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.btn-action {
  @apply inline-flex items-center justify-center p-2 text-sm font-medium text-center text-white rounded-lg
}
</style>

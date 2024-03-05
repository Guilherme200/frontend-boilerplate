<template>
  <button
    type="button"
    class="btn-action bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
  >
    <TrashIcon />
  </button>
</template>
<script setup lang="ts">
import TrashIcon from '../../icons/TrashIcon.vue';

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

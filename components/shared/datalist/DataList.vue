<template>
  <div class="inline-block min-w-full align-middle overflow-y-auto h-[57vh]">
    <div class="relative table-wrp shadow">
      <table class="min-w-full divide-y divide-gray-200 table-fixed">
        <thead class="bg-gray-100 sticky top-0">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all"
                  aria-describedby="checkbox-1"
                  type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                >
                <label for="checkbox-all" class="sr-only">checkbox</label>
              </div>
            </th>
            <th
              v-for="(item,index) in headers"
              :key="index"
              scope="col"
              class="header"
            >
              {{ item.label }}
            </th>
          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="data.length <= 0" class="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td class="w-4 p-4 text-center" colspan="100%">
              <label>Nenhum item encontrado</label>
            </td>
          </tr>
          <tr
            v-for="(item,index) in data"
            v-else
            :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox"
                  aria-describedby="checkbox"
                  type="checkbox"
                  class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                >
                <label for="checkbox-all" class="sr-only">checkbox</label>
              </div>
            </td>
            <td
              v-for="(header, index) in headers"
              :key="index"
              class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400"
            >
              <slot :name="columnSlotName(header.key)" :item="item">
                {{ getItemAttr(item, header.key) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Pagination />
</template>
<script setup lang="ts">
import Pagination from './Pagination.vue';

defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
})

function getItemAttr(item: any, attr: any) {
  return _get(item, attr, '-')
}

function columnSlotName(headerValue: any) {
  return 'column' + _upperFirst(_camelCase(headerValue))
}
</script>

<style scoped>
.header {
  @apply p-4 text-xs font-medium text-left text-gray-500 uppercase
}
</style>

<template>
  <nav class="flex mb-5" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
      <li v-for="(item, index) in breadcrumb" :key="item.link" class="inline-flex items-center">
        <NuxtLink
          :to="item?.link"
          class="inline-flex items-center text-gray-700 hover:text-primary-600"
        >
          <HomeIcon v-if="index === 0" />
          <ArrowRightIcon v-else />
          {{ item?.title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import ArrowRightIcon from '~/components/shared/icons/ArrowRightIcon.vue';
import HomeIcon from '~/components/shared/icons/HomeIcon.vue';

const route = useRoute()
const breadcrumb = _get(route.meta, 'breadcrumb', [])
</script>

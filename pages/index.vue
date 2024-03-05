<template>
  <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
    <SearchFilter />
    <CreateNewButton title="Nova categoria" link="" />
  </div>
  <div class="mt-5">
    <ListCategories />
  </div>
</template>
<script setup lang="ts">
import SearchFilter from '~/components/shared/filters/SearchFilter.vue';
import CreateNewButton from '~/components/shared/buttons/CreateNewButton.vue';
import ListCategories from '~/components/admin/categories/ListCategories.vue';

definePageMeta({
  title: 'Categorias',
  breadcrumb: [
    {link: '/', title: 'Home'},
    {link: '', title: 'Categorias'},
  ],
})
</script>

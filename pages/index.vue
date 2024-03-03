<template>
  <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
    <SearchFilter />
    <CreateNewButton title="Nova categoria" link="" />
  </div>
  <div class="mt-5">
    <DataList :headers="headers" :data="data?.data" />
  </div>
</template>
<script setup lang="ts">
import DataList from '~/components/datalist/DataList.vue';
import SearchFilter from '~/components/filters/SearchFilter.vue';
import CreateNewButton from '~/components/buttons/CreateNewButton.vue';

const headers = [
  {key: 'id', label: 'ID'},
  {key: 'name', label: 'Nome'},
  {key: 'description', label: 'Descrição'},
  {key: 'createdAt', label: 'Criado em'},
  {key: 'updatedAt', label: 'Editado em'},
]

const {data} = await useFetch('/api/categories', {
  method: 'GET',
  headers: [
    ['Content-Type', 'application/json'],
    ['Content-Type', 'text/plain'],
  ],
})

definePageMeta({
  title: 'Categorias',
  breadcrumb: [
    {link: '/', title: 'Home'},
    {link: '', title: 'Categorias'},
  ],
})
</script>

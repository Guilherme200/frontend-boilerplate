<template>
  <DataList :headers="headers" :data="data?.data" :meta="data?.meta">
    <template #columnCreatedAt="{item}">
      {{ useFormatOutputDate(item?.createdAt) }}
    </template>
    <template #columnUpdatedAt="{item}">
      {{ useFormatOutputDate(item?.updatedAt) }}
    </template>
  </DataList>
</template>
<script setup lang="ts">
import DataList from '~/components/shared/datalist/DataList.vue';

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
</script>

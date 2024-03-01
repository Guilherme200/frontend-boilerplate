<template>
    <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
      <SearchFilter/>
      <CreateNewButton title="Nova categoria" link=""/>
    </div>
    <DataList :headers="headers" :data="data"/>
</template>
<script setup lang="ts">
import DataList from "~/components/datalist/DataList.vue";
import SearchFilter from "~/components/filters/SearchFilter.vue";
import CreateNewButton from "~/components/buttons/CreateNewButton.vue";

const headers = [
  {key: 'id', label: 'ID'},
  {key: 'name', label: 'Nome'},
  {key: 'description', label: 'Descrição'},
  {key: 'createdAt', label: 'Criado em'},
  {key: 'updatedAt', label: 'Editado em'},
]

const data = [
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
  {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
]

definePageMeta({
  title: 'Categorias',
  breadcrumb: [
    {link: '/', title: 'Home'},
    {link: '', title: 'Categorias'},
  ]
})
</script>

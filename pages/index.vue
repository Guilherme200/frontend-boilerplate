<template>
  <div>
    <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
      <SearchFilter/>
      <CreateNewButton title="Nova categoria" link=""/>
    </div>
    <DataList/>
  </div>
</template>
<script setup lang="ts">
import DataList from "~/components/datalist/DataList.vue";
import SearchFilter from "~/components/filters/SearchFilter.vue";
import CreateNewButton from "~/components/buttons/CreateNewButton.vue";

definePageMeta({
  title: 'Categorias',
  breadcrumb: [
    {link: '/', title: 'Home'},
    {link: '', title: 'Categorias'},
  ]
})
</script>

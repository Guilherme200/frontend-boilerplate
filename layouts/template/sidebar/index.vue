<template>
  <aside 
    class="sticky top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 font-normal duration-75 lg:flex transition-width"
  >
    <div
      class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200"
    >
      <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
          <ul class="pb-2 space-y-2">
            <li>
              <NuxtLink to="/" class="link">
                <ChartIcon />
                <span class="ml-3">Dashboard</span>
              </NuxtLink>
            </li>
          </ul>

          <div class="pt-2 space-y-2">
            <h3 class="flex items-center p-2 text-sm font-semibold text-gray-900">
              Serviços e produtos
            </h3>
            <ul class="pb-2 space-y-2">
              <li>
                <NuxtLink to="/" class="link">
                  <GridIcon />
                  <span class="ml-3">Categorias</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="link">
                  <NoteIcon />
                  <span class="ml-3">Serviços</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="link">
                  <ShoppingIcon />
                  <span class="ml-3">Produtos</span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="pt-2 space-y-2">
            <h3 class="flex items-center p-2 text-sm font-semibold text-gray-900">
              Clientes e funcionários
            </h3>
            <ul class="pb-2 space-y-2">
              <li>
                <NuxtLink to="/" class="link">
                  <UserGroupIcon />
                  <span class="ml-3">Clientes</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="link">
                  <UsersIcon />
                  <span class="ml-3">Funcionários</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="link">
                  <CalendarIcon />
                  <span class="ml-3">Agenda</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ChartIcon from '~/components/icons/ChartIcon.vue';
import GridIcon from '~/components/icons/GridIcon.vue';
import NoteIcon from '~/components/icons/NoteIcon.vue';
import ShoppingIcon from '~/components/icons/ShoppingIcon.vue';
import UserGroupIcon from '~/components/icons/UserGroupIcon.vue';
import UsersIcon from '~/components/icons/UsersIcon.vue';
import CalendarIcon from '~/components/icons/CalendarIcon.vue';
</script>

<style scoped>
ul li .link {
  @apply flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100
}
</style>

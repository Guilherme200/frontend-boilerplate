<template>
  <div>
    <button
        @click="dropdown = !dropdown"
        type="button"
        :class="{'bg-gray-100' : dropdown}"
        class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
      <NotificationIcon/>
    </button>

    <div
        v-show="dropdown"
        class="notifications z-20 z-50 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg"
    >
      <div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50">Notificações</div>
      <div v-if="notifications.length > 0">
        <NuxtLink v-for="item in notifications" to="#" class="flex px-4 py-3 border-b hover:bg-gray-100">
          <div class="flex-shrink-0">
            <img class="rounded-full w-11 h-11" :src="item.image" alt="User image">
            <div
                class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full">
              <MessageIcon/>
            </div>
          </div>

          <div class="w-full pl-3">
            <div class="text-gray-500 font-normal text-sm mb-1.5">
              <h3 class="font-semibold text-gray-900">{{ item.title }}</h3>
              <span class="mx-1">{{ item.message }}</span>
            </div>
            <div class="text-xs font-medium text-primary-700 dark:text-primary-400">{{ item.createdAt }}</div>
          </div>
        </NuxtLink>
      </div>
      <div v-else>
        <div class="flex px-4 py-3 border-b hover:bg-gray-100">
          <div class="w-full pl-3">
            <div class="text-gray-500 font-normal text-sm mb-1.5 text-center">
              Você não possui notificações
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="#" class="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100">
        <div class="inline-flex items-center">
          <EyeIcon/>
          Ver todas
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import NotificationIcon from "~/components/icons/NotificationIcon.vue";
import MessageIcon from "~/components/icons/MessageIcon.vue";
import EyeIcon from "~/components/icons/EyeIcon.vue";

const dropdown = ref(false)
const notifications = ref([
  {
    id: 1,
    image: 'https://flowbite-admin-dashboard.vercel.app/images/users/leslie-livingston.png',
    title: 'Victória',
    message: 'O que você acha?',
    createdAt: '10 minutos atrás'
  },
  {
    id: 2,
    image: 'https://flowbite-admin-dashboard.vercel.app/images/users/robert-brown.png',
    title: 'João Vitor',
    message: 'Quanto você cobraria por este serviço?',
    createdAt: '35 minutos atrás'
  },
  {
    id: 3,
    image: 'https://flowbite-admin-dashboard.vercel.app/images/users/joseph-mcfall.png',
    title: 'Lucas',
    message: 'Gostaria de saber mais informações!',
    createdAt: '1 hora atrás'
  }
])
</script>

<style scoped>
.notifications {
  position: absolute;
  min-width: 340px;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate3d(1291.2px, 64.8px, 0px);
}
</style>

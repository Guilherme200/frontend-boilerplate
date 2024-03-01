<template>
  <nav class="sticky top-0 z-30 w-full bg-white border-b border-gray-200">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <NuxtLink to="#" class="flex ml-2 md:mr-24">
            <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">Mtcode Sistemas</span>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <Notifications/>
          <Profile/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Profile from "~/layouts/template/navbar/profile.vue";
import Notifications from "~/layouts/template/navbar/notifications.vue";
</script>

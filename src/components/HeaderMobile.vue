<template>
    <div>
      <div class="md:hidden fixed bottom-0 flex items-center w-full h-16 bg-personnalized-purple justify-center">
        <div class="flex items-center justify-center">
          <router-link to="/home" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full py-2">
            <img alt="Home" class="px-4 w-20 h-20" src="../components/icons/header/home-1-svgrepo-com.svg" />
          </router-link>
          <router-link to="/" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
            <img alt="Expos" class="px-4 w-20 h-20" src="../components/icons/header/icons8-chevalet-100 1.svg" />
          </router-link>
          <router-link to="/currently" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
            <img alt="En ce moment" class="px-4 w-20 h-20" src="../components/icons/header/new-5-svgrepo-com.svg" />
          </router-link>
          <router-link to="/billetterie" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
          <img alt="Billeterie" class="px-4 w-20 h-20 text-white" src="../components/icons/header/ticket-svgrepo-com.svg" />
          </router-link>
          <router-link to="/contact" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
          <img alt="Contact" class="px-4 w-20 h-20" src="../components/icons/header/contact-dm-email-svgrepo-com.svg" />
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  </script>
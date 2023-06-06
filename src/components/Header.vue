<template>
    <div>
      <div class="flex items-center w-full h-30 bg-personnalized-purple justify-between">
        <div class="flex items-center justify-start py-4">
          <img alt="Vue logo" class="px-4 w-28 h-20" src="@/assets/logo_white.png" />
          <span class="text-3xl font-bold text-white px-4">MSL</span>
        </div>
        <div class="flex items-center justify-end mr-4">
          <router-link to="/home" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full py-2">
            Accueil
          </router-link>
          <router-link to="/" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
            Expos
          </router-link>
          <router-link to="/currently" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
            En ce moment
          </router-link>
          <router-link to="/contact" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
            Contact
          </router-link>
          <router-link to="/billetterie" class="text-xl font-bold text-white px-4 hover:bg-[#686296] rounded-full">
            Billeterie
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  </script>
  
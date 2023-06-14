<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import space from '@/assets/reverse_space.png';
import reverse_space from '@/assets/space.png';
import ticket from '@/assets/ticket.png';
</script>

<template>
  <Header />

  <div class="bg-black">
    <div class="py-40 flex">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ml-20">
        <h1 class="text-white font-bold text-4xl mb-10">ENTRÉE MUSÉE</h1>
        <p class="text-center text-2xl mt-2 text-white font-bold">Exposition du moment : PLANÈTE MARS </p>
        <p class="text-center text-2xl mt-2 text-white font-bold">Exposition du moment : PLANÈTE MARS </p>

        <div class="mt-24 relative">
          <div class="flex justify-between">
            <p class="text-3xl font-bold text-white pb-4">Billet -26 ans</p>
            <p class="text-3xl font-bold text-white pb-4 ">10E</p>
            <p class="text-3xl font-bold text-black pb-4 w-10 h-10 border border-black text-center bg-gray-500">
              0</p>
          </div>

          <div class="flex justify-between">
            <p class="text-3xl font-bold text-white pb-4">Billet normal</p>
            <p class="text-3xl font-bold text-white pb-4 ml-20">10E</p>
            <p class="text-3xl font-bold text-black pb-4 w-10 h-10 border border-black text-center bg-gray-500 ml-20">
              0</p>
          </div>

          <div>
            <button class="mt-10 bg-[#7160FA] text-white text-3xl font-bold py-4 px-8 rounded-full ml-80 cursor-pointer">
              Valider
            </button>
          </div>
        </div>
      </div>
      <img :src="ticket" class="absolute w-1/4 top-1/2 ml-8 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center pl-16 pr-24 mr-32">

      <div class="w-full blur-container flex mx-auto bg-[#FFFFFF20] blur-md">
        <img :src="reverse_space" class="absolute w-96">
        <img :src="space" class="absolute w-96 right-0">
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.blur-container {
    height:600px;
}


</style>

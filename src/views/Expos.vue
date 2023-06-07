<template>
    <Header />
    <div class="bg-[#171717] h-fit pb-20 text-center">
      <p class="text-2xl text-white ml-10 font-bold py-20 mr-8">DÉCOUVRIR</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14 mx-auto max-w-5xl">
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer1">
          <img :src="img_espace_1" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer2">
          <img :src="img_espace_2" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer3">
          <img :src="img_espace_3" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer4">
          <img :src="img_espace_1" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer5">
          <img :src="img_espace_2" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer6">
          <img :src="img_espace_3" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer7">
          <img :src="img_espace_3" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer8">
          <img :src="img_espace_2" alt="">
        </div>
        <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer9">
          <img :src="img_espace_3" alt="">
        </div>
      </div>
      <h1 class = "text-3xl text-white mt-10 font-bold">Rendez-vous au musée pour la suite !</h1>
      <button class="mt-10 bg-[#7160FA] text-white text-3xl font-bold py-4 px-4 rounded-full">
      Découvrir
    </button>
    </div>
    <Footer />
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import img_espace_1 from '@/assets/img_espace_1.png';
  import img_espace_2 from '@/assets/img_espace_2.png';
  import img_espace_3 from '@/assets/img_espace_3.png';
  
  import VanillaTilt from 'vanilla-tilt';
  import { onMounted, ref } from 'vue';
  
  const tiltContainer1 = ref(null);
  const tiltContainer2 = ref(null);
  const tiltContainer3 = ref(null);
  const tiltContainer4 = ref(null);
  const tiltContainer5 = ref(null);
  const tiltContainer6 = ref(null);
  const tiltContainer7 = ref(null);
  const tiltContainer8 = ref(null);
  const tiltContainer9 = ref(null);
  // ... ajoutez d'autres références pour les autres éléments tilt-container supplémentaires ...
  
  onMounted(() => {
    VanillaTilt.init(tiltContainer1.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  
    VanillaTilt.init(tiltContainer2.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  
    VanillaTilt.init(tiltContainer3.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
    
    VanillaTilt.init(tiltContainer4.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    VanillaTilt.init(tiltContainer5.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    VanillaTilt.init(tiltContainer6.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    VanillaTilt.init(tiltContainer7.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    VanillaTilt.init(tiltContainer8.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    VanillaTilt.init(tiltContainer9.value, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  
  });
  </script>
  
  <style>
  .tilt-container {
    
  }
  </style>
  
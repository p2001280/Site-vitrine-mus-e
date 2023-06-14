<template>
  <Header />
  <div class="bg-[#171717] h-fit pb-20 text-center">
    <p class="text-2xl text-white ml-10 font-bold py-20 mr-8">DÉCOUVRIR</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14 mx-auto max-w-5xl">
      <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer1" @click="openModal(1)">
        <img :src="img_espace_1" alt="">
      </div>
      <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer2" @click="openModal(2)">
        <img :src="img_espace_2" alt="">
      </div>
      <div class="col-span-1 cursor-pointer tilt-container" ref="tiltContainer3" @click="openModal(3)">
        <img :src="img_espace_3" alt="">
      </div>
      <!-- Ajoutez les autres éléments tilt-container avec des images -->
    </div>
    <h1 class="text-3xl text-white mt-10 font-bold">Rendez-vous au musée pour la suite !</h1>
    <button class="mt-10 bg-[#7160FA] text-white text-2xl font-bold py-4 px-4 rounded-full">
      C'EST PARTI
    </button>
  </div>
  <Footer />
  <!-- Modal -->
  <div v-if="showModal !== 0" class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75" @click.self="closeModal">
    <div class="bg-[#372F7A] p-6 rounded-lg w-1/2" @keydown.escape="closeModal">
      <p class="text-xl text-white">
        {{ modals[showModal - 1].content }}
      </p>
      <button @click="closeModal" class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Fermer
      </button>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import img_espace_1 from '@/assets/img_espace_1.png';
import img_espace_2 from '@/assets/img_espace_2.png';
import img_espace_3 from '@/assets/img_espace_3.png';

import { ref, onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

const showModal = ref(0);

const modals = [
  {
    content: "Découvrez notre exposition dédiée aux étoiles ! Plongez au cœur des mystères et des merveilles de l'univers, explorez l'infini du cosmos. Admirez les constellations scintillantes qui jalonnent le ciel nocturne, les étoiles brillantes et les galaxies lointaines. Explorez les phénomènes cosmiques fascinants tels que les supernovas, les trous noirs et les nébuleuses colorées. Découvrez la diversité des étoiles, des naines blanches aux étoiles géantes, et contemplez l'immensité de l'espace qui abrite ces astres flamboyants. Préparez-vous à être émerveillé par la beauté et l'étrangeté de l'univers, où chaque étoile brille comme un joyau céleste, illuminant notre quête de connaissances et d'émerveillement.",
  },
  {
    content: "Découvrez notre exposition dédiée à la planète Terre ! Plongez au cœur des mystères et des merveilles de notre monde, explorez la diversité de notre précieuse planète bleue. Admirez les paysages époustouflants qui s'étendent sous nos yeux, des sommets majestueux aux étendues océaniques infinies, en passant par des forêts luxuriantes et des déserts mystérieux. Découvrez la richesse de la faune et de la flore qui peuplent nos écosystèmes complexes. Préparez-vous à être émerveillé par la beauté et la complexité de la Terre, où chaque instant révèle une nouvelle facette de notre incroyable planète.",
  },
  {
    content: "Découvrez notre exposition dédiée à une galaxie extraordinaire ! Plongez au cœur des mystères cosmiques, découvrez des merveilles célestes et explorez l'immensité de l'espace. Admirez les étoiles, les nébuleuses et les secrets encore inexplorés. Préparez-vous à vivre une expérience unique où la beauté de l'univers se dévoile à chaque instant.",
  },
];

const openModal = (modalNumber) => {
  showModal.value = modalNumber;
};

const closeModal = () => {
  showModal.value = 0;
};

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll('.tilt-container'), {
    max: 5,
    speed: 1000,
    glare: true,
    'max-glare': 0.5,
  });
});
</script>

<style>
.tilt-container {
  transition: transform 0.3s ease;
}

.tilt-container:hover {
  transform: scale(1.05);
}

.fixed {
  z-index: 9999;
}

.bg-opacity-75 {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>

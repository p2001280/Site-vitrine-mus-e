<script setup>
import Header from '../components/Header.vue'
import HeaderMobile from '../components/HeaderMobile.vue'
import Footer from '../components/Footer.vue'
import image1 from '@/assets/img_card_1.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import image2 from '@/assets/img_card_2.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import image3 from '@/assets/img_card_3.png'; // Remplacez "mon-image.png" par le nom réel de votre image
</script>

<template>
  <Header />
  <div class="bg-[#353535] h-96">
    <p class="text-white text-6xl font-bold tracking-normal underline pt-16 ml-16 pb-4">M S L</p>
    <p class="font-bold text-xl text-white ml-16 mb-10">MUSÉE SPATIAL LYONNAIS</p>
    <p class="text-normal text-white ml-16 w-86">Découvrez les mystères de l'univers et plongez au coeur de la voie lactée
      avec le nouveau musée spatial basé à Lyon</p>
    <button class="ml-16 mt-10 bg-[#7160FA] text-white font-bold py-2 px-4 rounded-full">
      Découvrir
    </button>
    <div class="flex items-center px-10 justify-end">
      <span class="inline-block bg-green-500 h-3 w-3 rounded-full"></span>
      <p class="ml-2 text-white font-bold">musée ouvert</p>
    </div>
  </div>
  <div class="bg-black h-screen flex items-center justify-center pb-10">
    <div class="pt-8 px-6">
      <div class="h-fit bg-[#D9D9D9] w-80 text-center">
        <h1 class="text-[#6655E0] text-xl font-bold pt-10">Planètes en mouvement</h1>
        <p class = "font-bold px-10 mt-4 text-left ml-2">
          Plongez dans l'univers fascinant
          des planètes avec notre exposition
          interactive “Planètes en mouvement” !
          Venez découvrir comment les planètes
          se déplacent dans l'espace et
          comment les astronomes les étudient.
          Avec des animations et des
          démonstrations, cette expo vous
          apprendra tout ce qu'il faut savoir
          sur les mouvements planétaires.
          Venez vous amuser en famille ou
          entre amis, et apprenez
          en vous amusant !
        </p>
        <img :src="image1" class= "mt-10 pb-10 ml-12" alt="" />
      </div>
    </div>
    <div class="pt-8 px-6">
      <div class="h-fit bg-[#D9D9D9] w-80 text-center">
        <h1 class="text-[#6655E0] text-xl font-bold pt-10 mr-14">Explorer l'inconnu</h1>
        <p class="font-bold px-10 mt-4 text-left ml-2">
          Envie de découvrir les merveilles de
          l'espace ? Notre expo immersive
          “Explorer l'inconnu” est faite pour vous !
          Venez explorer les différentes planètes du
          système solaire et découvrez les dernières
          découvertes de la NASA. Cette expérience
          unique vous plongera dans l'univers de
          l'exploration spatiale, grâce à des
          simulations et des présentations
          interactives. Préparez-vous à un voyage
          inoubliable dans les étoiles ! Alors, prêt
          à embarquer pour une aventure
          intergalactique ?
        </p>
        <img :src="image2" class= "mt-10 pb-10 ml-12" alt="" />
      </div>
    </div>
    <div class="pt-8 px-6">
      <div class="h-fit bg-[#D9D9D9] w-80 text-center">
        <h1 class="text-[#6655E0] text-xl font-bold pt-10">Des mondes extraordinaires</h1>
        <p class="font-bold px-10 mt-4 text-left ml-2">
          Envie de découvrir les merveilles de
    l'espace ? Cette expo immersive est faite
          pour vous ! Venez explorer les différentes
          planètes du système solaire et découvrez
          les dernières découvertes de la NASA.
          Cette expérience unique vous plongera
          dans l'univers de l'exploration spatiale,
          grâce à des simulations et des
          présentations interactives.
          Préparez-vous à un voyage inoubliable
          dans les étoiles !
        </p>
        <img :src="image3" class= "mt-10 pb-10 ml-12" alt="" />
      </div>
    </div>
  </div>
  <HeaderMobile />
  <Footer />
</template>

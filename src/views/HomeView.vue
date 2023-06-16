<script setup>
import Header from '../components/Header.vue'
import HeaderMobile from '../components/HeaderMobile.vue'
import UnityGame from '../components/UnityGame.vue'
import Footer from '../components/Footer.vue'
import image1 from '@/assets/img_card_1.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import image2 from '@/assets/img_card_2.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import image3 from '@/assets/img_card_3.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import image4 from '@/assets/sol_mars.jpg'; // Remplacez "mon-image.png" par le nom réel de votre image
import image_vr from '@/assets/img_vr.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import space from '@/assets/reverse_space.png'; // Remplacez "mon-image.png" par le nom réel de votre image
</script>

<template>
  <Header />
  <UnityGame/>
  <div class="bg-[#353535] h-96 w-full">
    <p class="text-white text-6xl font-bold tracking-normal underline pt-16 ml-16 pb-4">M S L</p>
    <p class="font-bold text-xl text-white ml-16 mb-10">MUSÉE SPATIAL LYONNAIS</p>
    <p class="text-xl text-white ml-16 w-5/12">Découvrez les mystères de l'univers et plongez au coeur de la voie lactée
      avec le nouveau musée spatial basé à Lyon</p>
    <div class="mt-6">
      <router-link to="/expos" class="ml-16 mt-10 bg-[#7160FA] text-white font-bold py-2 px-4 rounded-full ">
        Découvrir
      </router-link>
    </div>

    <div class="flex items-center px-10 justify-end">
      <span class="inline-block bg-green-500 h-3 w-3 rounded-full"></span>
      <p class="ml-2 text-white font-bold pr-8">musée ouvert</p>
    </div>
  </div>
  <div class="bg-black h-fit">
    <div>
      <p class="text-3xl text-white ml-10 font-bold py-10 ml-16">NOS EXPOS</p>
    </div>
    <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-x-96 ml-6">
      <div class="col-span-1 cursor-pointer bg-black tilt-container w-96">
        <h1 class="text-[#6655E0] text-xl font-bold pt-10 text-center mr-20">Planètes en mouvement</h1>
        <p class="font-bold px-10 mt-4 text-left text-xl text-justify tracking-tighter w-full">
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
        <img :src="image1" class="mt-10 pb-10 ml-20 rounded-full" alt="" />
      </div>
      <div class="col-span-1 cursor-pointer bg-black tilt-container w-96">
        <h1 class="text-[#6655E0] text-xl font-bold pt-10 text-center mr-28">Explorer l'inconnu</h1>
        <p class="font-bold px-10 mt-4 text-left ml-2 text-xl text-justify tracking-tighter w-full">
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
        <img :src="image2" class="mt-10 pb-10 ml-20 rounded-full" alt="" />
      </div>
      <div class="col-span-1 cursor-pointer bg-black tilt-container w-96 ">
        <h1 class="text-[#6655E0] text-xl font-bold pt-10 text-center mr-6">Des mondes extraordinaires</h1>
        <p class="font-bold px-10 mt-4 text-left text-xl ml-2 text-justify tracking-tighter w-full">
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
        <img :src="image3" class="mt-10 pb-10 ml-20 rounded-full" alt="" />
      </div>
    </div>
    <div class="flex items-center justify-content">
      <img :src="image_vr" class=" pb-20 ml-12 mt-20 flex items-center justify-start" alt="" />
      <div class="flex justify-end items-center">
        <div class="text-white font-bold text-2xl block items-center ml-56 justify-end">
          <p class="font-bold">
            Découvrez une expérience
            immersive et plongez vous
            dans le musée comme si vous y étiez - le tout à l’aide de votre smartphone
          </p>
          <button class=" mt-10 bg-[#7160FA] text-white text-normal font-bold py-2 px-4 rounded-full">
            EXPERIENCE AR
          </button>
        </div>
      </div>
      <img :src="space" class=" flex items-center justify-end" alt="" />
    </div>
    <div class="ml-32 pb-20">
      <h1 class="text-white font-bold text-4xl pb-8">Où nous trouver ?</h1>
      <iframe class=" w-5/6"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.0689500437666!2d4.796588976758267!3d45.76980841299544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb772a2b3a93%3A0xb7494ec124efbd8f!2s24%20Ave.%20Joann%C3%A8s%20Masset%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1686052924376!5m2!1sfr!2sfr"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div>
  </div>
  <HeaderMobile />
  <Footer />
</template>

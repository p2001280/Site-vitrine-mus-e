<template>
    <div>
        <div class="flex items-center w-full h-40 bg-personnalized-purple md:justify-between">
            <div class="mr-4 cols-4 justify-between">
                <div class="md:ml-20">
                    <button class="md:text-2xl font-bold text-white px-4 py-2 ml-8 mb-4">Nous
                        suivre</button>
                    <div class="flex items-center">
                        <img :src="icone_facebook" class="ml-4" alt="Ma super image" />
                        <img :src="icone_instagram" class="ml-4" alt="Ma super image" />
                        <img :src="icone_linkedin" class="ml-4" alt="Ma super image" />
                        <img :src="icone_twitter" class="ml-4" alt="Ma super image" />
                    </div>
                </div>
            </div>
            <div class = "md:text-2xl font-bold text-white px-4">
                <p class = "md:text-2xl font-bold text-white ml-16 mb-4">Contact</p>
                <div class = "flex items-center">
                    <p class = "md:text-2xl">msl-lyon@gmail.com</p>
                </div>
            </div>
            <div class = "hidden md:block font-bold text-white px-4 mr-6">
                <p class = "md:text-2xl font-bold text-white ml-24 mb-4">A propos</p>
                <div class = "flex items-center">
                    <p class = "mr-10 w-72 text-center">24 avenue Joannès masset 69009 LYON</p>
                </div>
            </div>
        </div>
        <div class = "md:hidden md:text-2xl text-center justify-center font-bold text-white px-4">
                <p class = "md:text-2xl font-bold text-white mb-4">A propos</p>
                <div class = "flex items-center justify-center">
                    <p class = "w-72 text-center">24 avenue Joannès masset 69009 LYON</p>
                </div>
            </div>
    </div>
</template>
  

<script setup>
import icone_facebook from '@/assets/icone_facebook.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import icone_instagram from '@/assets/icone_instagram.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import icone_linkedin from '@/assets/icone_linkedin.png'; // Remplacez "mon-image.png" par le nom réel de votre image
import icone_twitter from '@/assets/icone_twitter.png'; // Remplacez "mon-image.png" par le nom réel de votre image
</script>
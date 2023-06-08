<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import video from '@/assets/video.mp4'; 
</script>

<template>
    <Header />
    <div class="bg-black h-fit py-20">
        <h1 class="text-white font-bold text-2xl text-center pb-20">EN CE MOMENT</h1>
        <div class="py-20 bg-[#FFECD6]">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-2xl text-black font-bold ml-16 mb-10">MARS, LA PLANÈTE LACUNAIRE</h1>
                </div>
                <div>
                    <h1 class="text-xl text-black font-bold ml-16">CE MOIS CI :</h1>
                    <h1 class="text-gray-500 text-3xl font-bold self-end">ZOOM SUR MARS</h1>
                </div>
            </div>

            <video class="ml-16" autoplay controls>
                <source :src="video" type="video/mp4">
                Votre navigateur ne supporte pas le format ".mp4"
            </video>
        </div>
    </div>
    <Footer />
</template>


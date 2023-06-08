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
                <div class="flex flex-col mr-4">
                    <h1 class="text-xl text-black font-bold ml-16 self-end">CE MOIS CI</h1>
                    <h1 class="text-gray-500 text-3xl font-bold self-end">ZOOM SUR MARS</h1>
                </div>
            </div>

            <div class = "w-11/12">
                <video class="ml-16" autoplay controls>
                <source :src="video" type="video/mp4">
                Votre navigateur ne supporte pas le format ".mp4"
            </video>
            <div class = "ml-16 mt-10">
                <p class = "text-2xl w-8/12">
                Découvrez les secrets de la planète Mars grâce à notre vidéo exclusive. 
                Plongez dans les données collectées par les rovers de la NASA et explorez
                les cratères et les montagnes de cette planète rouge grâce à des images à
                couper le souffle. Préparez-vous à une expérience captivante qui vous
                transportera à des millions de kilomètres de la Terre !
            </p>
            </div>
            </div>


        </div>
    </div>
    <Footer />
</template>


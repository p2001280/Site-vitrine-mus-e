<template>
    <Header />
    <div class="bg-black h-fit pt-20 pb-56">
        <h1 class="text-white font-bold text-2xl text-center">EN CE MOMENT</h1>
        <div style="position: relative;">
            <img class="mt-20" :src="space" alt="">
            <div style="position: absolute; top: 0; left: 0; z-index: 1;">
                <div class="pt-10 bg-[#FFECD6]">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-2xl text-black font-bold ml-16 mb-10">MARS, LA PLANÈTE LACUNAIRE</h1>
                        </div>
                        <div class="flex flex-col mr-4">
                            <h1 class="text-xl text-black font-bold ml-16 self-end">CE MOIS CI</h1>
                            <h1 class="text-gray-500 text-3xl font-bold self-end">ZOOM SUR MARS</h1>
                        </div>
                    </div>
                    <div class="w-full">
                        <video class="ml-16 w-4/12" controls>
                            <source :src="video" type="video/mp4">
                            Votre navigateur ne supporte pas le format ".mp4"
                        </video>

                        <div class="flex justify-between ml-16 mt-10">
                            <div>
                                <p class="text-xl w-7/12 text-justify">
                                    Découvrez les secrets de la planète Mars grâce à notre vidéo exclusive.
                                    Plongez dans les données collectées par les rovers de la NASA et explorez
                                    les cratères et les montagnes de cette planète rouge grâce à des images à
                                    couper le souffle. Préparez-vous à une expérience captivante qui vous
                                    transportera à des millions de kilomètres de la Terre !
                                </p>
                            </div>
                            <div class="self-end w-full">
                                <img :src="img_mars" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-20 pb-0 flex ">
                    <div class="justify-start">
                        <img class="ml-20 justify-start" :src="plantete_mars" alt="">
                    </div>
                    <div class="self-end text-2xl w-88 font-bold ml-80 mb-36">
                        <div class="font-bold flex">
                            <span class="text-[#9F5600] font-bold">Superficie : </span>
                            <span class="text-[#DC6A00] font-bold">144,8 millions km²</span>
                        </div>
                        <div class="font-bold flex">
                            <span class="text-[#9F5600] font-bold">Densité : </span>
                            <span class="text-[#DC6A00] font-bold">3,721 m/s²</span>
                        </div>
                        <div class="font-bold flex">
                            <span class="text-[#9F5600] font-bold">Gravité : </span>
                            <span class="text-[#DC6A00] font-bold">1j 0h 37m</span>
                        </div>

                        <div class="font-bold flex">
                            <span class="text-[#9F5600] font-bold">Durée du jour :</span>
                            <span class="text-[#DC6A00] font-bold">1j 0h 37m</span>
                        </div>

                        <div class="font-bold flex">
                            <span class="text-[#9F5600] font-bold">Distance du soleil :</span>
                            <span class="text-[#DC6A00] font-bold">227,9 millions km</span>
                        </div>

                        <div class="font-bold flex">
                            <span class="text-[#9F5600] font-bold">Météo :</span>
                            <span class="text-[#DC6A00] font-bold"> 20°C / -143°C</span>
                        </div>
                    </div>
                </div>
                <div class="mt-20 ml-20">
                    <h1 class="text-white text-3xl font-bold">Rendez-vous au musée pour la suite !</h1>
                    <div class = "mt-8">
                        <router-link to="/billetterie"
                        class="bg-[#7160FA] text-xl text-white font-bold py-2 px-4 rounded-full mb-10">
                        Billeterie
                    </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import video from '@/assets/video.mp4';
import img_mars from '@/assets/mars.png';
import plantete_mars from '@/assets/planete_mars.png';
import space from '@/assets/space.png';

</script>

<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import reverse_space from "@/assets/reverse_space.png"
import space from "@/assets/space.png"
import icone_instagram from '@/assets/icone_instagram.png'
import icone_linkedin from '@/assets/icone_linkedin.png'
import icone_facebook from '@/assets/icone_facebook.png'
import icone_twitter from '@/assets/icone_twitter.png'
</script>

<template>
    <Header />
    <div class="bg-black h-fit pb-32">
        <img class="absolute w-1/5 pb-10 right-0 mt-[-170px] ml-32" :src="reverse_space" alt="">
        <div>
            <div>
                <h1 class="text-4xl text-white font-bold text-center pt-10 pb-16">Différents moyens de nous retrouver</h1>
                <div class="flex justify-between w-3/5 bg-[#686296] mb-16 py-4 mx-auto px-4 cursor-pointer hover:scale-110 hover:bg-purple-800 transition-all">
                    <img :src="icone_instagram">
                    <span class="text-white text-2xl my-auto pr-4 mx-auto font-bold">Instagram</span>
                </div>
                <div class="flex justify-between w-3/5 bg-[#686296] mb-16 py-4 mx-auto px-4 cursor-pointer hover:scale-110 hover:bg-purple-800 transition-all">
                    <img :src="icone_linkedin">
                    <span class="text-white text-2xl my-auto pr-4 mx-auto font-bold">LinkedIn</span>
                </div>
                <div class="flex justify-between w-3/5 bg-[#686296] mb-16 py-4 mx-auto px-4 cursor-pointer hover:scale-110 hover:bg-purple-800 transition-all">
                    <img :src="icone_facebook">
                    <span class="text-white text-2xl my-auto pr-4 mx-auto font-bold">Facebook</span>
                </div>
                <div class="flex justify-between w-3/5 bg-[#686296] py-4 mx-auto px-4 cursor-pointer hover:scale-110 hover:bg-purple-800 transition-all">
                    <img :src="icone_twitter">
                    <span class="text-white text-2xl my-auto pr-4 mx-auto font-bold">Twitter</span>
                </div>
            </div>
        </div>
        <img class="absolute w-1/3 pr-56 pb-10 top-0 mt-72 ml-[-100px] mt-24" :src="space" alt="">
    </div>
    <Footer />
</template>

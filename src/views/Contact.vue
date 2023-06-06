<script setup>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
    <Header />
    <div class="bg-black h-fit items-center justify justify-center">
        <h1 class="flex items-center justify-center text-white font-bold text-3xl p-4">Contact</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 mx-auto max-w-2xl">
            <div>
                <input class="w-full h-10 rounded-2xl pl-2" placeholder="adresse@mail.com">
            </div>

            <div>
                <input class="w-full h-10 rounded-2xl pl-2" placeholder="Sujet de ta demande">
            </div>

            <div class="col-span-1">
                <textarea class="w-full h-72 rounded-2xl pl-2 pt-2" placeholder="Détaille ton message ici"></textarea>
            </div>

            <div class="col-span-1 flex justify-end">
                <button class="bg-[#7160FA] text-xl text-white font-bold py-2 px-4 rounded-full mb-10">
                    Envoyer
                </button>
            </div>
        </div>
    </div>
    <Footer />
</template>

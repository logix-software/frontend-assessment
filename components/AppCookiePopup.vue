<script setup>


defineEmits(['hidePopup'])

</script>
<template>
    <div class="fixed bottom-12 right-12 z-10 flex flex-wrap justify-between bg-white p-7">
        <div class="flex items-center gap-4">
            <icon-cookie />
            <p class="max-w-[]">
                Utilizziamo i cookie per personalizzare <br>
                la tua esperienza e analizzare il traffico del sito.
            </p>
        </div>
        <div class="flex items-center flex-wrap">
            <nuxt-link class=" py-4 px-11 inline-flex text-base font-medium items-center justify-center text-app-bg"
                to="/">
                Rifiuta
            </nuxt-link>
            <button class="btn-primary--medium" @click="$emit('hidePopup')">
                Accetta
            </button>
        </div>
    </div>
</template>

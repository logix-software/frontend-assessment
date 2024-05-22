<template>
    <div
        class="fixed bottom-12 right-4 md:right-12 z-10 flex flex-wrap gap-4 justify-between bg-white p-7 max-w-[250px] md:max-w-[600px] lg:max-w-[816px]">
        <div class="flex items-start md:items-center gap-4">
            <!-- <icon-cookie class="h-[48px] w-[48px]" /> -->

            <!-- we can also use fallback attribute -->
            <icon-cookie height="48" width="48" class="shrink-0" />
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

<script setup>

// emits
defineEmits(['hidePopup'])

</script>

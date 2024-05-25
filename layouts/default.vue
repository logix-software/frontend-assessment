<template>
    <app-header />
    <main>
        <slot />
    </main>
    <app-cookie-popup @hide-popup="showPopUp = false" v-if="showPopUp" />
    <app-footer />
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

// state
const showPopUp = ref(false);

// lifcylce
onMounted(() => {
    AOS.init();

    setTimeout(() => {
        showPopUp.value = true
    }, 3000)
})
</script>
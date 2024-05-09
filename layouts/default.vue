<template>
    <app-header />
    <main>
        <slot />
    </main>
    <app-cookie-popup @hide-popup="showPopUp = false" v-if="showPopUp" />
    <app-footer />
</template>

<script setup>
const showPopUp = ref(false);

onMounted(() => {
    setTimeout(() => {
        showPopUp.value = true
    }, 3000)
})
</script>
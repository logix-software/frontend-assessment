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

// lifcylce
onMounted(() => {
    setTimeout(() => {
        showPopUp.value = true
    }, 3000)
})
</script>
<script setup>
    defineProps({
        products: {
            type: Array,
            required: true,
        }
    });
</script>

<template>
    <div v-if="!products.length">
        Sorry, no products found
    </div>

    <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <product-item v-for="product in products" :product="product" :key="product.id"></product-item>
    </section>
</template>

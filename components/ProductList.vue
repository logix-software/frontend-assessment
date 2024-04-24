<script setup>
defineProps({
      products: Array
})
</script>
<template>
      <div v-if="!products?.length">
          No products found
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <product :product="product" v-for="product in products" :key="product.id"/>
        </div>
</template>
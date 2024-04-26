<script setup>
    defineProps({
        product: {
            type: Object,
            required: true,
        }
    });
</script>

<template>
    <div class="product-item bg-lightGray-900 cursor-pointer group relative">
        <section class="h-72 relative">
            <div v-if="product.discountPercentage && !product.new" class="product-item__badge bg-red-900">
                <span class="mx-auto">{{ '-' + Math.ceil(product.discountPercentage) + '%' }}</span>
            </div>
            <div v-if="product.new" class="product-item__badge bg-green-900">
                <span class="mx-auto">New</span>
            </div>
            <picture>
                <img class="h-full w-full object-cover" :src="product.thumbnail">
            </picture>
        </section>

        <section class="p-4">
            <h2>{{ product.title }}</h2>
            <p class="product-item__details text-gray-900 font-medium line-clamp-1">{{ product.brand }}</p>

            <h3 class="flex flex-row justify-between">
                <span class="product-item__current-price">
                    {{ `Rp ${product.discountPercentage ? Math.ceil(product.price - product.discountPercentage).toLocaleString(): product.price.toLocaleString()}` }}
                </span>
                <span v-if="product?.discountPercentage" class="product-item__prev-price line-through text-gray-900 font-light">
                    {{ `Rp ${product.price.toLocaleString()}` }}
                </span>
            </h3>
        </section>

        <div class="product-item__hover-actions">
            <button class="button-main min-w-48 mx-auto">Add to cart</button>
            <div class="actions text-white font-semibold flex flex-row justify-between mt-6">
                <button class="inline-flex items-center">
                    <img src="../assets/icons/share_icon.svg" alt="Share product" class="icon">
                    Share
                </button>
                <button class="inline-flex items-center">
                    <img src="../assets/icons/compare_icon.svg" alt="Compare products" class="icon">
                    Compare
                </button>
                <button class="inline-flex items-center">
                    <img src="../assets/icons/heart_icon.svg" alt="Like product" class="icon">
                    Like
                </button>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .product-item__badge {
        @apply rounded-full h-12 w-12 text-white font-medium flex items-center;
        @apply absolute top-4 right-4;
    }

    .product-item__hover-actions {
        @apply opacity-0 z-0 group-hover:opacity-100 group-hover:z-10;
        @apply transition duration-[50] ease-out group-hover:ease-in;
        @apply absolute top-0 bg-black-900/50 w-full h-full p-4;
        @apply flex flex-col justify-center text-center;
    }
</style>

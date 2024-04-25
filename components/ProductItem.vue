<template>
    <div class="product-item bg-lightGray-900 cursor-pointer group relative ">
        <section class="h-72 relative">
            <picture>
                <!-- <source media="(min-width: 900px)" srcset="img-large.jpg">
                <source media="(min-width: 600px)" srcset="img-medium.jpg"> -->
                <img class="h-full w-full object-cover" src="https://cdn.dummyjson.com/product-images/5/1.jpg">
            </picture>
            <div class="product-item__discount">
                <span class="mx-auto">-30%</span>
            </div>
        </section>

        <section class="p-4">
            <span class="discount"></span>
            <h2>Product 1</h2>
            <p class="product-item__description text-gray-900 font-medium">Description blah-blah</p>

            <h3 class="flex flex-row justify-between">
                <span class="product-item__current-price">Price 123$</span>
                <span class="product-item__prev-price line-through text-gray-900 font-light">23.000</span>
            </h3>
        </section>

        <div class="product-item__hover-actions">
            <button class="bg-white text-gold-900 font-semibold px-14 py-3 w-fit mx-auto">Add to cart</button>
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
    .product-item__discount {
        @apply rounded-full h-12 w-12 bg-red-900 text-white font-medium flex items-center;
        @apply absolute top-4 right-4;
    }

    .product-item__hover-actions {
        @apply opacity-0 z-0 group-hover:opacity-100 group-hover:z-10;
        @apply transition duration-[50] ease-out group-hover:ease-in;
        @apply absolute top-0 bg-black-900/50 w-full h-full p-4;
        @apply flex flex-col justify-center text-center;
    }
</style>

<script setup>

</script>

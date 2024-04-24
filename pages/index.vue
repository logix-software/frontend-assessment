<script setup>
const skip = ref(0);
const products = ref([])
const { data, pending, error } = await useFetch(() => `https://dummyjson.com/products?limit=8&skip=${skip.value}`,{
    transform: data => data.products.map((p,index)=> ({...p, isNew: index % 2 === 0 ? true : false}))
});

products.value = data.value;

 watch(data,(d)=>{
    products.value.push(...d)   
 })

</script>
<template>
    <section class="py-10">
        <div class="container space-y-8">
            <h2 class="text-center text-[#3A3A3A] font-bold text-[40px]">Our Products</h2>
            <div v-if="!products.length && pending">
              loading products..
            </div>
            <div v-if="products.length">
                <product-list  :products="products"/>
                <div class="flex items-center justify-center mt-8">
                    <button :disabled="pending" @click="skip=skip+8" v-text="'Show More'" class=" font-semibold text-[#B88E2F] transition duration-200 ease-linear hover:bg-[#B88E2F] hover:text-white inline-flex items-center justify-center text-base border border-[#B88E2F] py-3 px-4 min-w-[245px]"/>
                </div>
            </div>
            
        </div>
    </section>
</template>
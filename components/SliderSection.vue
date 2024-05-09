<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

</script>

<template>
    <section class="mt-20 lg:mt-[141px]">
        <div class="container">
            <div class="flex items-end justify-between gap-4 flex-wrap">
                <div>
                    <h4 class=" text-7xl text-white">DOVE SIAMO <span class=" italic font-medium">PRESENTI</span></h4>
                    <p class="text-white text-3xl">
                        Già <b>9 padel club</b> hanno scelto di entrare <br> nella community PadelDAO.
                    </p>
                </div>
                <div class="flex items-center gap-3">
                    <button
                        class="size-16 inline-flex items-center justify-center text-white hover:bg-primary transition duration-200 ease-linear bg-[#001214]">
                        <icon-arrow-left />
                    </button>
                    <button
                        class="size-16 inline-flex items-center justify-center text-white hover:bg-primary transition duration-200 ease-linear bg-[#001214]">
                        <icon-arrow-right />
                    </button>
                </div>
            </div>
            <div class="mt-[71px]">
                <swiper :slidesPerView="4" :spaceBetween="18" class="mySwiper">
                    <swiper-slide v-for="n in 10" :key="n">
                        <img src="/slider-img.png" alt="slider img" class="w-full" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
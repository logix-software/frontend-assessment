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
                <div class="flex items-center gap-3 ml-auto">
                    <button ref="prevBtnRef" @click="prev"
                        class="size-16 inline-flex items-center justify-center text-white hover:bg-primary transition duration-200 ease-linear bg-[#001214]">
                        <icon-arrow-left />
                    </button>
                    <button ref="nextBtnRef" @click="next"
                        class="size-16 inline-flex items-center justify-center text-white hover:bg-primary transition duration-200 ease-linear bg-[#001214]">
                        <icon-arrow-right />
                    </button>
                </div>
            </div>
            <div class="mt-[71px]">
                <swiper :loop="true" :breakpoints="breakPoints" :slidesPerView="4" :modules="modules" :spaceBetween="18"
                    class="mySwiper" ref="swiperRef" @swiper="initiateSwiperInstance">
                    <swiper-slide v-for="n in 10" :key="n">
                        <img src="/slider-img.png" alt="slider img" class="w-full" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// state
const swiperRef = ref(null)
const prevBtnRef = ref(null)
const nextBtnRef = ref(null)
const modules = [Navigation]
const breakPoints = {
    '300': {
        slidesPerView: 1
    },
    '550': {
        slidesPerView: 2
    },
    '750': {
        slidesPerView: 3,
    },
    '950': {
        slidesPerView: 4,
    }
}

// methods
function prev() {
    swiperRef?.value?.slidePrev()
}

function next() {
    swiperRef.value.slideNext()
}

function initiateSwiperInstance(swiperInstance) {
    swiperRef.value = swiperInstance
}

</script>
<template>
    <!-- hero section -->
    <section class="mt-10 lg:mt-[174px]">
        <div class="">
            <div class="container">
                <h1 class=" text-3xl md:text-5xl lg:text-[86px] text-white text-center  lg:!leading-[96px]">
                    PORTA IL TUO
                    <span class="italic font-medium relative">
                        PADEL CLUB
                        <span
                            class=" bg-secondary text-app-bg text-2xl px-4 py-2.5 -top-8 -right-12 hidden md:inline absolute transform rotate-[13.9deg]  my-2 lg:my-0">A
                            COSTO
                            ZERO</span>
                    </span> <br>
                    AL
                    <span class=" italic font-medium">
                        LIVELLO SUCCESSIVO
                    </span>
                </h1>
                <p class="text-white text-center text-lg md:text-xl lg:text-3xl mt-6">
                    Aumenta gli accessi, ospita gli eventi esclusivi e i nostri viaggi <br> allenamento. Ci occuperemo
                    di
                    supportarti nell’intera organizzazione.
                </p>
                <div class="mt-11 flex items-center justify-center">
                    <button class="btn-primary--large">
                        Candidati subito
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-center flex-wrap mt-12 px-4 lg:px-0">
                <img src="/hero-img-1.png" alt=" hero img-1" class="lg:-mr-24 lg:mt-20 lg:z-30">

                <img src="/hero-img-2.png" alt=" hero img-1" class="lg:-mr-10 lg:z-20">

                <img src="/hero-img-3.png" alt=" hero img-1" class="lg:-mr-16 lg:mt-10 lg:z-10">

                <img src="/hero-img-4.png" alt=" hero img-1" class="">
            </div>
        </div>
    </section>
    <!-- project section -->
    <section class="mt-20 lg:mt-[188px]">
        <div class="container relative">
            <p class="text-white text-3xl md:text-6xl">
                Il Padel World Club DAO <br>
                mira a
                <span class="inline-flex items-center gap-1 bg-secondary text-app-bg px-2 my-1">
                    rivoluzionare
                    <icon-rotate />
                </span> <br>

                l'esperienza del
                <span class="inline-flex items-center gap-1 bg-secondary text-app-bg px-2 my-1">
                    padel
                    <icon-livello />
                </span>
                creando <br>
                un circuito elitario di club <br>
                diffusi <span class="inline-flex items-center gap-1 bg-secondary text-app-bg  px-2 my-1">
                    globalmente
                    <icon-globe />
                </span> attraverso <br>
                la tecnologia web3.
            </p>
            <span
                class=" text-app-bg bg-[#D3E2E8] px-2 md:px-4 py-2 text-xl md:text-3xl absolute  -top-20 left-6 md:-left-2 rotate-[-5.45deg]">IL
                PROGETTO</span>
        </div>
    </section>
    <!-- slider section -->
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
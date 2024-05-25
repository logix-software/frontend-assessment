<template>
    <!-- hero section -->
    <section class="mt-10 lg:mt-[174px]">
        <div class="">
            <div class="container" data-aos="zoom-in">
                <h1 class=" text-4xl md:text-5xl lg:text-[86px] text-white text-center  lg:!leading-[96px]">
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
            <div class="flex items-center justify-center flex-wrap  mt-12 px-4 lg:px-0">
                <img src="/hero-img-1.png" alt=" hero img-1" class="lg:-mr-24 lg:mt-20 lg:z-30" data-aos="zoom-in"
                    data-aos-delay="200">

                <img src="/hero-img-2.png" alt=" hero img-1" class="lg:-mr-10 lg:z-20" data-aos="zoom-in"
                    data-aos-delay="200*2">

                <img src="/hero-img-3.png" alt=" hero img-1" class="lg:-mr-16 lg:mt-10 lg:z-10" data-aos="zoom-in"
                    data-aos-delay="200*3">

                <img src="/hero-img-4.png" alt=" hero img-1" class="" data-aos="zoom-in" data-aos-delay="200*4">
            </div>
        </div>
    </section>

    <!-- project section -->
    <section class="mt-40 lg:mt-[188px]">
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

    <!-- marque section -->
    <section class="mt-40 lg:mt-[131px] pt-11 pb-16 border border-white border-l-0 border-r-0 border-opacity-25">
        <vue3-marquee :clone="true" :duration="20" :direction="'reverse'" :pause-on-hover="true"
            @onOverflowCleared="alert()" class=" overflow-y-hidden">
            <div class="text-white font-medium text-4xl md:text-6xl lg:text-[86px] flex items-center gap-5 italic hover:text-[#4D696D] hover:not-italic mr-10 transition duration-200 ease-linear"
                v-for="text in marqueText" :key="text">
                {{ text }}
                <icon-arrow-right-large class="w-12 h-12 md:w-24 md:h-24 lg:w-[91px] lg:h-[84px]" />
            </div>
        </vue3-marquee>
    </section>

    <!-- partner section -->
    <section class="mt-[156px]">
        <div class="container ">
            <div class="bg-[#1A3E43] relative max-w-[1254px] mx-auto py-8">
                <div
                    class="text-4xl lg:text-3xl  xl:text-5xl lg:!leading-[56px] pt-[92px] pb-[61px] pl-4 md:pl-[53px] text-[#99A9AB] relative">
                    <span
                        class=" rotate-[-3.82deg] bg-secondary absolute -top-5 text-app-bg text-2xl lg:text-3xl px-4 py-2">PERCHÈ
                        DIVENTARE
                        PARTNER</span>
                    Per entrare <b><em class="text-white">a far parte</em></b> <br />
                    di un <b><em class="text-white">network</em></b> selezionato <br />
                    di aziende legate al <b><em class="text-white">mondo</em></b> <br />
                    <b><em class="text-white">del padel</em> e connettersi</b> <br />
                    con una <b><em class="text-white">community globale</em></b> <br />
                    di <b><em class="text-white">appassionati, sportivi</em></b>, <br />
                    <b><em class=" text-white">aziende del settore</em></b> e investitori <br />
                    <b><em class="text-white">interessati alle innovazioni</em></b> <br>
                    web3. 
                </div>
                <img src="/partner.png" alt=""
                    class="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:inline " />
            </div>

        </div>
    </section>

    <!-- new era section -->
    <section class="mt-24 md:mt-[203px]">
        <div class="container">
            <div class="text-white">
                <h4 class="text-4xl md:text-5xl lg:text-6xl">PadelDAO: <br>
                    una nuova Era per il tuo Padel Club
                </h4>
            </div>
            <div class="border-[0.5px] border-white/50 mt-20 divide-y divide-white/50">
                <!-- top -->
                <div class="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/50">
                    <div class=" basis-7/12 bg-[url('/galaxy.png')] bg-no-repeat bg-right bg-cover sm:bg-contain">
                        <div class="px-8 pb-4 lg:pb-0 space-y-2.5 mt-10">
                            <p class="text-4xl lg:text-5xl text-white font-medium">
                                Aumento visibilità <br>
                                & accessi
                            </p>
                            <p class=" text-base text-[#99A9AB]">
                                Offre visibilità all’interno dei canali social,<br>
                                del sito web e più in generale all'interno <br>
                                della nostra community.
                            </p>
                        </div>
                    </div>
                    <div class=" basis-6/12 divide-y divide-white/50">
                        <div
                            class=" py-4 px-5 space-y-2.5 bg-[linear-gradient(88deg,#00282E_47%,rgba(0,40,46,0)_100%),url('/study-play.png')] bg-no-repeat bg-right bg-cover md:bg-contain">
                            <p class=" text-2xl text-white font-semibold">Study & Play</p>
                            <p class=" text-[#99A9AB] text-base">Offre un'esperienza all-inclusive, comprendente <br>
                                avanzamento sportivo, soggiorni di alta
                                qualità, <br> gastronomia e intrattenimento, sottolineando i <br> vantaggi esclusivi per
                                i
                                nostri
                                partner.</p>
                        </div>
                        <div
                            class=" py-4 px-5 space-y-2.5  bg-[linear-gradient(88deg,#00282E_47%,rgba(0,40,46,0)_100%),url('/clinic-journey.png')] bg-no-repeat bg-right bg-cover md:bg-contain">
                            <p class=" text-2xl text-white font-semibold">Clinic Journey</p>
                            <p class=" text-[#99A9AB] text-base">
                                Offre un'esperienza completa, comprendente <br>
                                avanzamento sportivo, soggiorni di alta qualità, <br>
                                gastronomia e intrattenimento, evidenziando <br>
                                il valore aggiunto per i nostri partner.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- bottom -->
                <div class=" flex flex-col lg:flex-row divide-white/50 lg:divide-x lg:divide-y-0 divide-y">
                    <div class=" basis-4/12">
                        <div class="px-10 pt-8">
                            <p class="text-white font-semibold text-2xl">
                                Selezioniamo solo <br>
                                i migliori club
                            </p>
                            <p class="text-base text-[#99A9AB] mt-2.5">
                                Il nostro obiettivo è selezionare esclusivamente i migliori club al mondo.
                            </p>
                            <img src="/group.png" alt=" group" class="mt-7">
                        </div>
                    </div>
                    <div class=" basis-9/12">
                        <p class="py-2 text-center text-white font-bold text-[20px] border-b-[0.5px] border-b-white/50">
                            Iscriversi è completamente
                            <span
                                class="bg-[#D3E2E8] text-2xl py-2.5 px-4 text-app-bg transform rotate-[-11.94deg] inline-block">GRATUITO</span>
                            &nbsp;,nessun tipo di investimento.
                        </p>
                        <div class="flex flex-col sm:flex-row sm:divide-x divide-y sm:divide-y-0 divide-white/50">
                            <div class="basis-6/12 p-7 pb-5 md:pb-0 text-center">
                                <p class="text-white font-semibold text-2xl">
                                    Organizzazione eventi
                                </p>
                                <p class="text-base text-[#99A9AB] mt-2.5">
                                    Il team PadelDAO offre un supporto completo
                                    per la gestione e l'organizzazione degli eventi
                                    ospitati all’interno dei Club
                                    Partner.
                                </p>
                                <img src="/group-18.png" alt="" class=" mt-8 md:mt-16 mx-auto">
                            </div>
                            <div class="basis-6/12">
                                <div class="text-center p-7">
                                    <p class="text-white font-semibold text-2xl">
                                        Personaggi chiave <br>
                                        del mondo Padel
                                    </p>
                                    <p class="text-base text-[#99A9AB] mt-2.5">
                                        Un gruppo in costante espansione, composto
                                        da diversi personaggi di spicco del mondo
                                        del padel, che spazia dagli allenatori agli atleti.

                                    </p>
                                </div>

                                <img src="/group-19.png" alt="" class="w-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- COSA CHIEDIAMO section -->
    <section class="mt-[167px]">
        <div class="container space-y-[60px]">
            <div>
                <h4 class=" text-4xl md:text-5xl lg:text-7xl text-white text-center">
                    COSA <span class=" italic font-medium">CHIEDIAMO</span> <br>
                    AI NOSTRI PARTNER
                </h4>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                <div>
                    <img src="/gratuito.png" alt="gratuito" class="mx-auto">
                    <div class="text-center space-y-5 text-white -mt-10">
                        <p class=" font-medium text-4xl lg:text-5xl">Gratuito</p>
                        <p class=" md:text-lg">Nessun tipo di investimento <br>
                            economico.</p>
                    </div>
                </div>
                <div>
                    <img src="/benefit.png" alt="benefit" class="mx-auto">
                    <div class="text-center space-y-5 text-white -mt-10">
                        <p class=" font-medium text-4xl lg:text-5xl">Benefit</p>
                        <p class=" text-lg">
                            Offire vantaggi esclusivi per i possessori <br>
                            delle nostre Membership Card.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/standard.png" alt="standard" class="mx-auto">
                    <div class="text-center space-y-5 text-white -mt-10">
                        <p class=" font-medium text-4xl lg:text-5xl">Standard</p>
                        <p class=" text-lg">
                            Il rispetto di alti standard <br>
                            qualitativi.
                        </p>
                    </div>
                </div>
            </div>
            <div class=" mt-20 flex items-center justify-center">
                <button type="button" class="btn-primary">Candidati subito</button>
            </div>
        </div>
    </section>

    <!-- slider section -->
    <section class="mt-32 lg:mt-[141px]">
        <div class="container">
            <div class="flex items-end justify-between gap-4 flex-wrap">
                <div>
                    <h4 class="text-4xl lg:text-7xl text-white">DOVE SIAMO <span
                            class=" italic font-medium">PRESENTI</span></h4>
                    <p class="text-white text-xl lg:text-3xl mt-3 lg:mt-0">
                        Già <b>9 padel club</b> hanno scelto di entrare <br> nella community PadelDAO.
                    </p>
                </div>
                <div class="flex items-center gap-3 ml-auto">
                    <button @click="swiperEl.slidePrev()"
                        class="size-16 inline-flex items-center justify-center text-white hover:bg-primary transition duration-200 ease-linear bg-[#001214]">
                        <icon-arrow-left class="h-[25px] w-[25px]" />
                    </button>
                    <button @click="swiperEl.slideNext()"
                        class="size-16 inline-flex items-center justify-center text-white hover:bg-primary transition duration-200 ease-linear bg-[#001214]">
                        <icon-arrow-right class="h-[25px] w-[25px]" />
                    </button>
                </div>
            </div>
            <div class="mt-[71px]">
                <swiper :breakpoints="breakPoints" :spaceBetween="18" :loop="true" :navigation="true" :modules="modules"
                    class="mySwiper" @swiper="initializeSwiper">
                    <swiper-slide v-for="({ badgeTitle, location }, idx) in sliderContents" :key="idx">
                        <div
                            class="py-5 px-6 bg-[#001E23] space-y-2.5 bg-[url('/slider-map.svg')] bg-no-repeat h-[345px] bg-right-bottom w-full">
                            <span
                                class="inline-block bg-secondary text-app-bg rotate-[-3.27deg] text-2xl lg:text-3xl py-1 px-2"
                                v-text="badgeTitle" />
                            <div class=" text-white">
                                <span class=" text-lg block" v-text="location.title" />
                                <small class=" text-sm" v-text="location.subTitle" />
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>

    <!-- faq section -->
    <section class=" mt-[246px]">
        <div class="container">
            <div class="py-12 px-9 bg-[#E5E5E5] flex items-start flex-col lg:flex-row">
                <div>
                    <h4 class=" font-medium text-4xl md:text-5xl lg:text-6xl text-app-bg">
                        Hai delle <br> domande?
                    </h4>
                </div>
                <div class=" divide-y divide-[#B2BEC0] flex-1 lg:ml-16">
                    <details class="py-8 appearance-none group">
                        <summary
                            class=" gap-4 font-medium text-2xl md:text-3xl text-app-bg flex justify-between items-center list-none cursor-pointer">
                            Come diventare partner PadelDAO? Ha un costo?
                            <span
                                class=" size-11 inline-flex items-center justify-center bg-[#FBFFF0] text-[#00282E] shrink-0">
                                <icon-plus class="size-6 group-open:hidden" />
                                <icon-minus class="size-6 hidden group-open:inline" />
                            </span>
                        </summary>
                        <p class=" text-xl font-medium p-4 text-app-bg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                        </p>
                    </details>
                    <details class="py-8 appearance-none group">
                        <summary
                            class=" gap-4 font-medium text-2xl md:text-3xl text-app-bg flex justify-between items-center list-none cursor-pointer">
                            Che cos'è e che vantaggi ha una Membership Card?
                            <span
                                class=" size-11 inline-flex items-center justify-center bg-[#FBFFF0] text-[#00282E] shrink-0">
                                <icon-plus class="size-6 group-open:hidden" />
                                <icon-minus class="size-6 hidden group-open:inline" />
                            </span>
                        </summary>
                        <p class=" text-xl font-medium p-4 text-app-bg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                        </p>
                    </details>
                    <details class="py-8 appearance-none group">
                        <summary
                            class=" gap-4 font-medium text-2xl md:text-3xl text-app-bg flex justify-between items-center list-none cursor-pointer">
                            Quali servizi offre PadelDAO per i club partner?
                            <span
                                class=" size-11 inline-flex items-center justify-center bg-[#FBFFF0] text-[#00282E] shrink-0">
                                <icon-plus class="size-6 group-open:hidden" />
                                <icon-minus class="size-6 hidden group-open:inline" />
                            </span>
                        </summary>
                        <p class=" text-xl font-medium p-4 text-app-bg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                        </p>
                    </details>
                    <details class="py-8 appearance-none group">
                        <summary
                            class=" gap-4 font-medium text-2xl md:text-3xl text-app-bg flex justify-between items-center list-none cursor-pointer">
                            Cos’è il Clinic Journey?
                            <span
                                class=" size-11 inline-flex items-center justify-center bg-[#FBFFF0] text-[#00282E] shrink-0">
                                <icon-plus class="size-6 group-open:hidden" />
                                <icon-minus class="size-6 hidden group-open:inline" />
                            </span>
                        </summary>
                        <p class=" text-xl font-medium p-4 text-app-bg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                        </p>
                    </details>
                    <details class="py-8 appearance-none group">
                        <summary
                            class=" gap-4 font-medium text-2xl md:text-3xl text-app-bg flex justify-between items-center list-none cursor-pointer">
                            Cos’è lo Study & Play?
                            <span
                                class=" size-11 inline-flex items-center justify-center bg-[#FBFFF0] text-[#00282E] shrink-0">
                                <icon-plus class="size-6 group-open:hidden" />
                                <icon-minus class="size-6 hidden group-open:inline" />
                            </span>
                        </summary>
                        <p class=" text-xl font-medium p-4 text-app-bg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                        </p>
                    </details>
                    <details class="py-8 appearance-none group">
                        <summary
                            class=" gap-4 font-medium text-2xl md:text-3xl text-app-bg flex justify-between items-center list-none cursor-pointer">
                            Altre domande?
                            <span
                                class=" size-11 inline-flex items-center justify-center bg-[#FBFFF0] text-[#00282E] shrink-0">
                                <icon-plus class="size-6 group-open:hidden" />
                                <icon-minus class="size-6 hidden group-open:inline" />
                            </span>
                        </summary>
                        <p class=" text-xl font-medium p-4 text-app-bg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </section>

    <!-- cta section -->
    <section class=" mt-10">
        <div class="container">
            <div class=" bg-secondary pt-20 pb-16 px-10 text-center">
                <h5 class=" text-4xl lg:text-5xl text-[#001214]">
                    SEI PRONTO PER IL <span class=" italic font-medium">PROSSIMO LIVELLO?</span> <br>
                    IL TUO CLUB MERITA DI <span class=" italic font-medium">DISTINGUERSI</span> <br> A LIVELLO GLOBALE.
                </h5>
                <p class=" text-xl lg:text-3xl text-[#335358] mt-8">
                    Organizziamo un incontro per parlare dei dettagli della nostra partnership
                    ed esplorare insieme le possibilità di collaborazione.
                </p>
                <button class=" btn-tertiary mt-10">Candidati subito</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


// state
const swiperEl = ref(null);
const modules = [Navigation]
const breakPoints = {
    '300': {
        slidesPerView: 1
    },
    '550': {
        slidesPerView: 2
    },
    '950': {
        slidesPerView: 3,
    },
    '1150': {
        slidesPerView: 4,
    }
}
const marqueText = ['REVOLUTIONARY', 'INNOVATIVE']
const sliderContents = [
    {
        badgeTitle: 'Yep Club',
        location: {
            title: 'Bergamo, Italia',
            subTitle: 'Albano S. Alessandro'
        },
    },
    {
        badgeTitle: 'PalaPadel',
        location: {
            title: 'Bergamo, Italia',
            subTitle: 'Seriate'
        },
    },
    {
        badgeTitle: 'Met Padel',
        location: {
            title: 'Brescia',
            subTitle: 'Italia'
        },
    },
    {
        badgeTitle: 'Let’s Padel',
        location: {
            title: 'Monza, Italia',
            subTitle: 'Vimercate'
        },
    },
    {
        badgeTitle: 'Citiesse Club',
        location: {
            title: 'Brescia, Italia',
            subTitle: 'San Felice del Benaco'
        },
    },
    {
        badgeTitle: 'Yep Club',
        location: {
            title: 'Bergamo, Italia',
            subTitle: 'Albano S. Alessandro'
        },
    },
    {
        badgeTitle: 'PalaPadel',
        location: {
            title: 'Bergamo, Italia',
            subTitle: 'Seriate'
        },
    },
    {
        badgeTitle: 'Met Padel',
        location: {
            title: 'Brescia',
            subTitle: 'Italia'
        },
    },
    {
        badgeTitle: 'Let’s Padel',
        location: {
            title: 'Monza, Italia',
            subTitle: 'Vimercate'
        },
    },
]

// methods
function initializeSwiper(swiperInstance) {
    swiperEl.value = swiperInstance
}

</script>
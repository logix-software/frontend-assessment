<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="$emit('closeModal')" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-5xl transform overflow-hidden  bg-white text-left align-top shadow-xl transition-all">
                            <DialogTitle as="div"
                                class="text-3xl md:text-4xl lg:text-6xl font-medium text-app-bg flex items-center justify-between border-b border-b-cool-gray py-6 px-10">
                                <span class="relative">
                                    Roadmap
                                    <span
                                        class="absolute -bottom-10 -right-5 md:-right-40 rotate-[-7.86deg] bg-secondary text-base md:text-2xl lg:py-2.5 py-1 lg:px-4 px-1">
                                        STEP BY STEP
                                    </span>
                                </span>
                                <button @click="$emit('closeModal')"
                                    class="size-8 md:size-12 bg-light-gray inline-flex items-center justify-center hover:bg-light-gray/90 text-app-bg">
                                    <icon-x height="24" width="24" />
                                </button>

                            </DialogTitle>
                            <div class="pt-28 px-7 md:px-10 ">

                                <div class=" min-h-40 md:min-h-72 md:border-l border-l-app-bg md:pl-6 " :style="{
        'transform': `translateX(${translateFromLeft}px)`
    }">
                                    <div class="space-y-5">
                                        <span class="text-black text-2xl relative">
                                            MEMBERSHIP NFT {{ tabNo }}
                                            <span
                                                class=" absolute right-0 sm:-right-16 -top-10 xl:-right-32 xl:-top-8 sm:-top-12 rotate-[15deg] bg-pale-blue py-1 md:py-2 px-1 md:px-3 text-base sm:text-xl md:text-2xl text-app-bg">
                                                UPCOMING
                                            </span>
                                        </span>
                                        <p class="text-slate-teal text-base max-w-96 ">Il primo step prevede
                                            la
                                            creazione
                                            degli NFT
                                            Gen1
                                            e successivamente la vendita tramite piattaforma
                                            OpenSea.</p>
                                    </div>
                                </div>

                                <div
                                    class="mt-8 after:h-[1px] after:hidden after:w-full after:bg-app-bg lg:after:block after:top-1/2 transform -translate-y-1/2 after:absolute after:-z-10">
                                    <div class="flex items-center  md:pl-11 gap-6 md:gap-9" ref="tabContainer">
                                        <button :ref="(el) => setTabRefs(el, index)" v-for="(tab, index) in tabs"
                                            :key="tab.id" @click="($el) => setTab($el, tab.id)"
                                            class="size-6 rounded-full border border-app-bg bg-white inline-flex items-center justify-center shrink-0">
                                            <span class="size-3 rounded-full bg-secondary block"
                                                v-if="tabNo === tab.id" />
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div class="text-xs text-black px-12 py-9">
                                *GLI OBIETTIVI DELINEATI NELLA RODAMAP VERRANNO PERSEGUITI UTILIZZANDO <br>
                                GRAN PARTE DEL RICAVATO DERIVANTE DALLA VENDITA DELLE MEMBERSHIP CARD (NFT MINT).
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

// props
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

// state
const tabRefs = ref([]);
const tabNo = ref(1)
const tabs = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    key: `tab${5 * index + 1}`
}));

// emits
defineEmits(['closeModal'])

// computed
const translateFromLeft = ref(0)


// methods
function setTabRefs(el, index) {
    tabRefs.value[index] = el;
    console.log({ tabRefs })
};

function setTab($el, tabId) {
    tabNo.value = tabId;
    const tabIndex = tabId - 1
    setTranslateFromLeft(tabIndex);


}

function setTranslateFromLeft(tabIndex) {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tabOffsetLeft = Number(tabRefs.value[tabIndex]?.offsetLeft);
        const tabCenter = Number(tabRefs.value[tabIndex]?.offsetWidth) / 2;
        const translateX = tabOffsetLeft + tabCenter;
        translateFromLeft.value = translateX;
    } else {
        translateFromLeft.value = 0
    }
}

// watchers
watch(() => props.isOpen, (val) => {
    nextTick(() => {
        setTranslateFromLeft(tabNo.value - 1)
    })
})

// lifecycles
onMounted(() => {
    window.addEventListener('resize', function () {
        translateFromLeft.value = 0
    })
})


</script>
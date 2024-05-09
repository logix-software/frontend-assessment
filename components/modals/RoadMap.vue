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
                                class="text-6xl font-medium text-app-bg flex items-center justify-between border-b border-b-[#B2BEC0] py-6 px-10">
                                <span class="relative">
                                    Roadmap
                                    <span
                                        class="absolute -bottom-10 -right-40 rotate-[-7.86deg] bg-secondary text-2xl py-2.5 px-4">
                                        STEP BY STEP
                                    </span>
                                </span>
                                <button @click="$emit('closeModal')"
                                    class="size-12 bg-[#E5E5E5] inline-flex items-center justify-center hover:bg-[#E5E5E5]/90 text-[#00282E]">
                                    <icon-x />
                                </button>

                            </DialogTitle>
                            <div class="pt-9 px-10 overflow-x-auto md:overflow-x-hidden">

                                <div class="min-h-[288px] border-l border-l-app-bg pl-6 py-14 translate-x-0"
                                    :style="translateFromLeft">
                                    <div class="space-y-5">
                                        <span class="text-black text-2xl relative">
                                            MEMBERSHIP NFT
                                            <span
                                                class=" absolute -right-10 -top-10 rotate-[15deg] bg-[#D3E2E8] py-3 px-4 text-2xl text-app-bg">
                                                UPCOMING
                                            </span>
                                        </span>
                                        <p class="text-[#4D696D] text-base max-w-[371px]">Il primo step prevede la
                                            creazione
                                            degli NFT
                                            Gen1
                                            e successivamente la vendita tramite piattaforma
                                            OpenSea.</p>
                                    </div>
                                </div>

                                <div
                                    class="mt-8 after:h-[1px] after:hidden after:w-full after:bg-app-bg lg:after:block after:top-1/2 transform -translate-y-1/2 after:absolute after:-z-10">
                                    <div class="flex items-center  pl-11 gap-9">
                                        <button v-for="tab in tabs" :key="tab.id" @click="tabNo = tab.id"
                                            class="size-6 rounded-full border border-[#00282E] bg-white inline-flex items-center justify-center">
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

defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const tabNo = ref(1)

defineEmits(['closeModal'])

const tabs = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    key: `tab${5 * index + 1}`
}));

const translateFromLeft = computed(() => ({
    transform: `translateX(${56 * tabNo.value}px)`
}))
</script>
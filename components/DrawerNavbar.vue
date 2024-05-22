<template>
    <TransitionRoot appear :show="showDrawer" as="template">
        <Dialog as="div" @close="$emit('closeDrawer')" class="relative z-10 lg:hidden">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/50 z-[100]" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto z-[101]">
                <div class="h-full w-full flex items-start gap-4 justify-end">

                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 translate-x-full"
                        enter-to="opacity-100 translate-x-0" leave="duration-200 ease-in"
                        leave-from="opacity-100 translate-x-0" leave-to="opacity-0 translate-x-full">
                        <DialogPanel
                            class="max-w-md transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all h-full w-[300px] ml-auto relative">

                            <button type="button" @click="$emit('closeDrawer')"
                                class="size-7 inline-flex items-center justify-center bg-gray-100 rounded transition-transform absolute top-2 left-2">
                                <icon-x />
                            </button>
                            <ul class="flex flex-col items-center justify-center gap-7 mt-10">
                                <li>
                                    <nuxt-link
                                        class="text-app-bg text-[18px] font-semibold hover:text-primary transition duration-200 ease-linear"
                                        to="/">
                                        Il progetto
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="text-app-bg text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                                        to="/">
                                        Perchè
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="text-app-bg text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                                        to="/">
                                        Vantaggi
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="text-app-bg text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                                        to="/">
                                        Cosa chiediamo
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="text-app-bg text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                                        to="/">
                                        FAQs
                                    </nuxt-link>
                                </li>
                                <li>
                                    <button @click="isOpen = true"
                                        class="text-app-bg text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                                        to="/">
                                        Roadmap
                                    </button>
                                </li>
                            </ul>
                            <div class="mt-10 flex items-center justify-center">
                                <nuxt-link to="/contact" class="btn-primary">
                                    Contattaci
                                </nuxt-link>
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
} from '@headlessui/vue'

// emits
defineEmits(['closeDrawer'])

//props
defineProps({
    showDrawer: {
        type: Boolean,
    }
})
</script>

<template>
    <header class="py-3">
        <div class="container  flex items-center justify-between">
            <nuxt-link to="/">
                <img src="/app-logo.svg" alt="app-logo">
            </nuxt-link>
            <div class="py-4 hidden lg:inline">
                <ul class="flex items-center justify-center gap-7">
                    <li>
                        <nuxt-link
                            class="text-white text-[18px] font-semibold hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            Il progetto
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            class="text-white text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            Perchè
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            class="text-white text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            Vantaggi
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            class="text-white text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            Cosa chiediamo
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            class="text-white text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            FAQs
                        </nuxt-link>
                    </li>
                    <li>
                        <button @click="isOpen = true"
                            class="text-white text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            Roadmap
                        </button>
                    </li>
                </ul>
            </div>
            <div class="hidden lg:inline">
                <nuxt-link to="/contact" class="btn-primary">
                    Contattaci
                </nuxt-link>
            </div>
            <div class="lg:hidden" @click="showDrawer = true">
                <button class=" size-12 rounded inline-flex items-center justify-center bg-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <modal-road-map :isOpen="isOpen" @close-modal="isOpen = false" />
    <drawer-navbar :show-drawer="showDrawer" @close-drawer="showDrawer = false" />
</template>

<script setup>

// state
const isOpen = ref(false);
const showDrawer = ref(false);

</script>
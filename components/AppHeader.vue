<template>
    <header class="py-3">
        <div class="container  flex items-center justify-between">
            <div>
                <img src="/app-logo.svg" alt="app-logo">
            </div>
            <div class="py-4">
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
                        <nuxt-link
                            class="text-white text-[18px] font-medium hover:text-primary transition duration-200 ease-linear"
                            to="/">
                            Roadmap
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <nuxt-link to="/contact" class="btn-primary">
                    Contattaci
                </nuxt-link>
            </div>
        </div>

    </header>
</template>

<script setup>


</script>
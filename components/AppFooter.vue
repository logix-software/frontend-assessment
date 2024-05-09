<template>
    <footer class="mt-auto py-8">
        <div class="container flex items-end justify-between flex-wrap gap-6">
            <div class="space-y-4">
                <nuxt-link to="/">
                    <img src="/app-logo.svg" alt="app logo footer">
                </nuxt-link>
                <div>
                    <ul class="flex items-center gap-3">
                        <li>
                            <nuxt-link to="/"
                                class="text-xs font-bold text-white hover:text-primary transition duration-200 ease-linear">
                                Contact
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-xs font-bold text-white hover:text-primary transition duration-200 ease-linear">
                                Privacy policy
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/"
                                class="text-xs font-bold text-white hover:text-primary transition duration-200 ease-linear">
                                Terms
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <small class="text-xs text-white">Copyright © 2024 PadelDao. All rights reserved</small>
            </div>
        </div>
    </footer>
</template>
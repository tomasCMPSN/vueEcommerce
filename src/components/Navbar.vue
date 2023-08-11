<script setup>
import { ref } from "vue";

const visible = ref(false)

const toggleMenu = ref(false)

</script>

<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b-2 border-[#14B8A6]">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button @click="toggleMenu = !toggleMenu" type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#14B8A6] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <RouterLink to="/">
                        <i class="pi pi-cloud" style="font-size: 2.5rem; color: #14B8A6;"></i>
                    </RouterLink>
                </div>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <RouterLink to="/categories"
                            class="hover:bg-[#14B8A6] hover:text-white rounded-md px-3 py-2 text-xl font-medium">
                            Categories</RouterLink>
                    </div>
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Button class="pi pi-shopping-cart" @click="visible = true"></Button>
            </div>
        </div>
    </div>

    <div v-show="toggleMenu === true" class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
            <RouterLink to="/categories"
                class="block rounded-md px-3 py-2 text-xl font-medium">
                Categories</RouterLink>
        </div>
    </div>

    <Sidebar v-model:visible="visible" position="right">
        <h2>SIDEBAR</h2>
    </Sidebar>
</template>

<style scoped>
a.router-link-exact-active {
    text-decoration: underline;
}
</style>

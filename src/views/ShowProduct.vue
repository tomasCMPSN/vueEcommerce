<script setup>
import ShopCard from '../components/ShopCard.vue';
import HomeCarousel from '../components/HomeCarousel.vue'
import { useRoute } from 'vue-router'
import { useDbStore } from '../stores/dbStore.js'
const db = useDbStore()

const route = useRoute()
db.oneItem(route.params.id)
</script>

<template>
    <div v-if="db.product.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-2 my-12 gap-4">
            <div>
                <img :src="db.product[0].image" :alt="db.product[0].name" />
            </div>
            <div class="bg-gray-300 rounded grid grid-cols-1 gap-4 content-between">
                <p class="text-center p-8 text-2xl font-bold">{{ db.product[0].name }}</p>
                <p class="p-8 text-center text-lg">{{ db.product[0].description }}</p>
                <div class="flex justify-center gap-8 mb-8">
                    <Button label="ADD TO CART" severity="info" />
                    <Button label="BUY NOW" />
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
            <ShopCard title="Texture" :item="db.product[0].texture" />
            <ShopCard title="Weight" :item="db.product[0].weight" />
            <ShopCard title="Size" :item="db.product[0].size" />
        </div>

        <div class="my-16">
            <p class="text-2xl font-bold">Trending now</p>
            <HomeCarousel />
        </div>
    </div>
</template>
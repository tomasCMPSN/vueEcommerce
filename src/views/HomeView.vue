<script setup>
import HomeFeatured from '../components/HomeFeatured.vue';
import HomeCard from '../components/HomeCard.vue';
import HomeCarousel from '../components/HomeCarousel.vue';
import ShopItem from '../components/ShopItem.vue';
import { useDbStore } from '../stores/dbStore.js'

const db = useDbStore()
db.fill()
</script>

<template>
  <main>
    <HomeFeatured />

    <div class="my-16">
      <p class="text-2xl font-bold">Products we are proud of</p>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        <ShopItem v-for="item in db.proudData" :item="item" :key="item.id"
        />
      </div>
    </div>

    <HomeCard title="Creative harmonious living" :pt="{
      body: 'bg-gray-300 rounded mb-8 grid place-items-center'
    }" />

    <div class="my-16">
      <p class="text-2xl font-bold">Trending now</p>
      <HomeCarousel />
    </div>

  </main>
</template>

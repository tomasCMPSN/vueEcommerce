<script setup>
import ShopItem from '../components/ShopItem.vue';
import CategoriesTagsList from '../components/CategoriesTagsList.vue'
import { useDbStore } from '../stores/dbStore.js'

const db = useDbStore()
db.fill()
db.filterByTag(db.currentTag)
</script>

<template>
  <div class="my-16">
    <h1 class="text-center text-3xl font-bold">{{ db.currentTag }}</h1>
    <CategoriesTagsList />
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      <ShopItem v-for="item in db.filteredTags" :item="item" :key="item.id" />
    </div>
  </div>
</template>
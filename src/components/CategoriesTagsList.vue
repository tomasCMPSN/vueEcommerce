<script setup>
import { useDbStore } from '../stores/dbStore.js'

const db = useDbStore()
</script>

<template>
    <ul class="flex flex-wrap justify-center gap-4 mt-6">
        <li v-for="item in db.initialTags">
            <Button class="text-xs"  :label="item" @click="db.changeTag(item) & db.filterByTag(item)" />
        </li>
    </ul>
</template>
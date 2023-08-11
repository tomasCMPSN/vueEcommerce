<script setup>
defineProps({
    title: String,
    item: String
})
</script>

<template>
    <div class="flex flex-col bg-gray-300 rounded p-4">
        <p class="text-xl font-bold">{{ title }}:</p>
        <p>{{ item }}</p>
    </div>
</template>
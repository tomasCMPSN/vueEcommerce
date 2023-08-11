<script setup>
defineProps({
    item: Object
})
</script>

<template>
    <RouterLink :to="{ name: 'productId', params: { id: item.id }}">
        <Card>
            <template #header>
                <div class="h-72 flex justify-center">
                    <img :src="item.image" style="height: 100%; object-fit: cover;" />
                </div>
            </template>
            <template #title>
                <p class="text-sm truncate">
                    {{ item.name }}
                </p>
            </template>
            <template #content>
                <p class="font-bold text-lg -mb-8">
                    {{ item.price }}$
                </p>
            </template>
        </Card>
    </RouterLink>
    </template>
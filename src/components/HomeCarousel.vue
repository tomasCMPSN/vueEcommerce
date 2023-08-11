<script setup>
import { ref } from "vue";
import { useDbStore } from '../stores/dbStore.js'

const db = useDbStore()

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>

<template>
    <div class="card my-16">
        <Carousel :value="db.trendingData" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <RouterLink :to="{ name: 'productId', params: { id: slotProps.data.id } }">
                            <img :src="slotProps.data.image" :alt="slotProps.data.name" class="shadow-2" />
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink :to="{ name: 'productId', params: { id: slotProps.data.id } }">
                            <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        </RouterLink>
                        <h6 class="mt-0 mb-3 font-bold">{{ slotProps.data.price }}$</h6>
                        <div class="mt-5">
                            <RouterLink :to="{ name: 'productId', params: { id: slotProps.data.id } }">
                                <Button label="BUY" />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>
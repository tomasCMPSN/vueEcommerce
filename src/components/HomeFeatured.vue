<script setup>
import { ref } from 'vue';

const images = ref([
    {
        itemImageSrc: 'https://decoholic.org/wp-content/uploads/2022/01/The-Most-Pinned-Tan-Leather-Armchair-21-880x660.jpg',
        title: 'Live Confortably',
        alt: 'Live Confortably'
    },
    {
        itemImageSrc: 'https://academia.nubimetrics.com/hubfs/Produtos%20de%20cuidado%20e%20tratamento%20com%20a%20pele%20representando%20produtos%20de%20skincare%20para%20vender.jpg',
        title: 'Skincare',
        alt: 'Skincare'
    },
    {
        itemImageSrc: 'https://www.architectureartdesigns.com/wp-content/uploads/2017/02/16-7.jpg',
        title: 'Kitchen',
        alt: 'Kitchen'
    },
    {
        itemImageSrc: 'https://www.ul.com/sites/g/files/qbfpbp251/files/styles/hero_boxed_width/public/2023-06/G656297271-digital%20gadgets-ULcom-HEADER-2400x1600.jpg?itok=B7DuO6MZ',
        title: 'Electronics',
        alt: 'Electronics'
    },
]);
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<template>
    <div class="card md:flex md:justify-center my-12">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" containerStyle="max-width: 835px;"
            :circular="true" :autoPlay="true" :transitionInterval="2000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block; height: 450px; object-fit: cover;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="display: block; height: 120px;" />
            </template>
            <template #caption="slotProps">
                <RouterLink to="/categories" class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</RouterLink>
            </template>
        </Galleria>
    </div>
</template>
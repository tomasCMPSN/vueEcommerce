<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue';
import Newsletter from './components/Newsletter.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
      <nav>
        <Navbar />
      </nav>
  </header>

  <div class="mx-4 md:mx-16 lg:mx-32">
    <RouterView />
  </div>

  <Newsletter />
  
  <Footer />
</template>

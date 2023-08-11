import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import Sidebar from 'primevue/sidebar'
import Image from 'primevue/image'
import Galleria from 'primevue/galleria'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'

import "primevue/resources/themes/lara-light-teal/theme.css"
import 'primeicons/primeicons.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Menubar', Menubar)
app.component('Sidebar', Sidebar)
app.component('Image', Image)
app.component('Galleria', Galleria)
app.component('Card', Card)
app.component('Carousel', Carousel)

app.mount('#app')

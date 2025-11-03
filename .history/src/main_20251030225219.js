import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'

// CSS do PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css' // tema
import 'primevue/resources/primevue.min.css'           // CSS base
import 'primeicons/primeicons.css'                     // ícones

const app = createApp(App)

app.use(PrimeVue)

app.mount('#app')

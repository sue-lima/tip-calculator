import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.mount('#app')

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  }
});

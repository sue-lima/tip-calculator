import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app');


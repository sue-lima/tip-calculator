import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
});
app.mount('#app');


import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount('#app');
app.component('Button', Button);


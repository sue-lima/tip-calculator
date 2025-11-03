<script>
import Button from 'primevue/button';
import { ref } from 'vue';

const text = ref('');

export default {
  components: {
    Button
  }
}
</script>

<template>
  <Button label="Click" />
  <div class="bg-red-100">
    <h1>osjdhsjhad</h1>
  </div>
  {{ text }}
</template>




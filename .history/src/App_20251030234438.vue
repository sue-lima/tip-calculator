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
  <div><h1>osjdhsjhad</h1></div>
  {{ text }}
</template>




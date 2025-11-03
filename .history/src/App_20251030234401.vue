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
  {{ text }}
</template>




<script>
import InputText  from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const text = ref('');
</script>

<template>
  <InputText v-model="text" />
  <Button label="Click" />
  {{ text }}
</template>




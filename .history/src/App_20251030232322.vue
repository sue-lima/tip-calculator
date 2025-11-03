<script>
import { InputText } from 'primevue';
import { ref } from 'vue';

const text = ref('');
</script>

<template>
  <InputText v-model="text" />
</template>




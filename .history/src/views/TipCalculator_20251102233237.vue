<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
    <h1>Le/Tip</h1>
    <TipForm />
    <TipResult />
  </main>
</template>

<script>
import TipForm from '../components/calculator/TipForm.vue';
import TipResult from '../components/calculator/TipResult.vue';

export default {
  name: "TipCalculator",
  components: {
    TipForm,
    TipResult,
  },
};
</script>
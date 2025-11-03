<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
    <header class="grow-0 flex justify-end p-5">
      <div @click="toggleDarkTheme" class="relative w-14 h-7 rounded-full cursor-pointer bg-gold-400 dark:bg-gold-600">
        <i id="toggle" class="absolute w-7 h-7 rounded-full bg-gold-200 dark:bg-gold-400 scale-75 dark:left-7"></i>
      </div>
    </header>
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
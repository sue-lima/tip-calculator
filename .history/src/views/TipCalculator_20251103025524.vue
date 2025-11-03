<template>
  <header class="grow-0 flex justify-end p-5">
    <div @click="toggleDarkTheme" class="relative w-14 h-7 rounded-full cursor-pointer bg-sky-600">
      <i id="toggle" class="absolute w-7 h-7 rounded-full bg-sky-950"></i>
    </div>
  </header>
  <main class="flex-1 flex flex-col items-center justify-center p-6 bg-red-700">
    <h1>Le/Tip</h1>
    <div class="w-full flex flex-col transition-all duration-500 md:flex-row md:gap-6">
      <TipForm />
      <TipResult />
    </div>
  </main>
  <footer class="grow-0">
    <div class="h-16 flex justify-center items-center">
      <p>Coded with ❤️ by <a href="https://github.com/sue-lima">Sue Lima</a></p>
    </div>
  </footer>
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
<template>
  <div class="min-h-screen flex flex-col bg-indigo-200">
    <header class="flex justify-end p-5">
      <div @click="toggleDarkTheme" class="relative w-14 h-7 rounded-full cursor-pointer bg-sky-600">
        <span class="absolute w-7 h-7 rounded-full bg-sky-950"></span>
      </div>
    </header>
    <main class="flex-1 flex flex-col items-center justify-center">
      <h1>Le/Tip</h1>
      <div class="w-full flex flex-col transition-all duration-500 md:flex-row md:gap-6">
        <TipForm class="w-full md:w-1/2 transition-transform duration-500"/>
        <TipResult />
      </div>
    </main>
    <footer class="h-16 flex justify-center items-center">
      <p>Coded with ❤️ by <a href="https://github.com/sue-lima" class="underline">Sue Lima</a></p>
    </footer>
  </div>
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
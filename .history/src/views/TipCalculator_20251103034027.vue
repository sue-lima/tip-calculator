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
        <div class="block md:w-1/2">
          <TipForm />
        </div>
        <div class="hidden md:block md:w-1/2">
          <TipResult />
        </div>
      </div>
      <div class="block md:hidden mt-4">
        <button class="w-12 h-12 rounded-full cursor-pointer bg-sky-950" @click="handlePanel">
          <i :class="icon"></i>
        </button>
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
  data() {
    return {
      isMobile: false,
      panel: false
    };
  },
  computed: {
    icon() {
      return this.panel ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
    }
  },
  methods: {
    handlePanel() {
      this.panel = !this.panel
    },
  },
};
</script>
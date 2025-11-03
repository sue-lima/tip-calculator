<template>
  <div class="min-h-screen flex flex-col bg-indigo-200">
    <header class="flex justify-end p-5">
      <BaseToggle @click="toggleDarkTheme"/>
      <div @click="toggleDarkTheme" class="relative w-14 h-7 rounded-full cursor-pointer bg-sky-600">
        <span class="absolute w-7 h-7 rounded-full bg-indigo-950"></span>
      </div>
    </header>
    <main class="flex-1 flex flex-col items-center justify-center">
      <h1>Le/Tip</h1>

      <!-- Container dos componentes -->
      <div class="w-full flex flex-col transition-all duration-500 md:flex-row md:gap-6">
        <!-- TipForm -->
        <div :class="['md:w-1/2', isMobile && betweenPanel ? 'hidden' : 'block']">
          <TipForm />
        </div>

        <!-- TipResult -->
        <div :class="['md:w-1/2 md:block', isMobile && !betweenPanel ? 'hidden' : 'block']">
          <TipResult />
        </div>
      </div>

      <!-- Botão no mobile -->
      <div class="block md:hidden mt-4">
        <button class="w-12 h-12 rounded-full cursor-pointer bg-sky-950" @click="handlePanel">
          <i :class="icon"></i>
        </button>
      </div>
    </main>
    <footer class="h-16 flex justify-center items-center">
      <p>Coded with 💙 by <a href="https://github.com/sue-lima" class="underline">Sue Lima</a></p>
    </footer>
  </div>
</template>

<script>
import BaseToggle from '../components/base/BaseToggle.vue';
import TipForm from '../components/calculator/TipForm.vue';
import TipResult from '../components/calculator/TipResult.vue';

export default {
  name: "TipCalculator",
  components: {
    BaseToggle,
    TipForm,
    TipResult,
  },
  data() {
    return {
      isMobile: window.innerWidth < 768,
      betweenPanel: false
    };
  },
  computed: {
    icon() {
      return this.betweenPanel ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
    }
  },
  methods: {
    handlePanel() {
      this.betweenPanel = !this.betweenPanel;
    },
    toggleDarkTheme() {
      document.documentElement.classList.toggle('dark');
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) this.betweenPanel = false;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
  }
};
</script>

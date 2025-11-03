<template>
  <div class="tip-calculator">
    <!-- Header -->
    <header class="tip-calculator__header">
      <BaseToggle v-model="checked" @click="toggleDarkTheme"/>
    </header>

    <!-- Main -->
    <main class="tip-calculator__main">
      <h1 class="tip-calculator__title">Le/Tip</h1>

      <!-- Container dos componentes -->
      <div class="tip-calculator__container">
        <div :class="['tip-calculator__form', isMobile && betweenPanel ? 'hidden' : 'block']">
          <TipForm />
        </div>

        <div :class="['tip-calculator__result', isMobile && !betweenPanel ? 'hidden' : 'block']">
          <TipResult />
        </div>
      </div>

      <!-- Botão mobile -->
      <div class="tip-calculator__button">
        <button class="tip-calculator__toggle-btn" @click="handlePanel">
          <i :class="icon"></i>
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="tip-calculator__footer">
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
      checked: false,
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
      this.checked = document.documentElement.classList.contains('dark');
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

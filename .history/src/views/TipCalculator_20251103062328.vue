<template>
  <div class="tip-calculator min-h-screen flex flex-col">
    <!-- Header -->
    <header class="tip-calculator__header flex justify-end p-5">
      <BaseToggle
        class="tip-calculator__toggle"
        v-model="checked"
        @click="toggleDarkTheme"
      />
    </header>

    <!-- Main -->
    <main class="tip-calculator__main flex-1 flex flex-col items-center justify-center">
      <h1 class="tip-calculator__title font-bold text-7xl">Le/Tip</h1>

      <!-- Container -->
      <div class="tip-calculator__content w-full flex flex-col transition-all pt-5 duration-500 md:flex-row md:justify-around md:items-baseline md:h-full md:w-1/2">
        <!-- TipForm -->
        <div :class="['tip-calculator__form md:w-1/2', isMobile && betweenPanel ? 'hidden' : 'block']">
          <TipForm />
        </div>

        <!-- TipResult -->
        <div :class="['tip-calculator__result md:w-1/2', isMobile && !betweenPanel ? 'hidden' : 'block']">
          <TipResult />
        </div>
      </div>

      <!-- Mobile button -->
      <div class="tip-calculator__mobile-button flex md:hidden mt-4 w-full justify-end p-5">
        <button class="tip-calculator__mobile-toggle w-12 h-12 rounded-full cursor-pointer bg-sky-950 flex items-center justify-center" @click="handlePanel">
          <ChevronLeftIcon v-if="betweenPanel" class="w-6 h-6" />
          <ChevronRightIcon v-else class="w-6 h-6 " />
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="tip-calculator__footer h-16 flex justify-center items-center">
      <p class="tip-calculator__footer-text">
        Coded with 💙 by <a href="https://github.com/sue-lima" class="tip-calculator__footer-link underline">Sue Lima</a>
      </p>
    </footer>
  </div>
</template>

<script>
import BaseToggle from '../components/base/BaseToggle.vue';
import TipForm from '../components/calculator/TipForm.vue';
import TipResult from '../components/calculator/TipResult.vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

export default {
  components: {
    BaseToggle,
    TipForm,
    TipResult,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  data() {
    return {
      checked: false,
      isMobile: window.innerWidth < 768,
      betweenPanel: false
    };
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

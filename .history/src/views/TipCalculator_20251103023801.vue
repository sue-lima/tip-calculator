<template>
  <header class="grow-0 flex justify-end p-5">
    <div @click="toggleDarkTheme" class="relative w-14 h-7 rounded-full cursor-pointer bg-sky-600">
      <i id="toggle" class="absolute w-7 h-7 rounded-full bg-sky-950"></i>
    </div>
  </header>

  <main class="min-h-screen flex flex-col items-center justify-center p-6 bg-red-700">
    <h1 class="mb-6 text-2xl font-bold">Le/Tip</h1>

    <!-- MOBILE CONTAINER -->
    <div class="w-full md:flex md:gap-6">
      <!-- Form Section -->
      <div 
        v-show="activeSection === 'form'" 
        class="transition-all duration-300 w-full md:w-1/2"
      >
        <TipForm />
      </div>

      <!-- Result Section -->
      <div 
        v-show="activeSection === 'result'" 
        class="transition-all duration-300 w-full md:w-1/2 md:block"
      >
        <TipResult />
      </div>
    </div>

    <!-- MOBILE TOGGLE BUTTON -->
    <button
      @click="toggleSection"
      class="md:hidden mt-4 px-4 py-2 bg-sky-600 text-white rounded-full shadow-md"
    >
      {{ activeSection === 'form' ? '>' : '<' }}
    </button>
  </main>

  <footer class="grow-0">
    <div class="text-center h-16 flex justify-center items-center">
      <p>Coded with ❤️ by <a href="https://github.com/sue-lima" class="underline">Sue Lima</a></p>
    </div>
  </footer>
</template>

<script>
import TipForm from '../components/calculator/TipForm.vue'
import TipResult from '../components/calculator/TipResult.vue'

export default {
  name: "TipCalculator",
  components: { TipForm, TipResult },
  data() {
    return {
      activeSection: 'form' // mobile first: mostrar apenas form
    }
  },
  methods: {
    toggleSection() {
      this.activeSection = this.activeSection === 'form' ? 'result' : 'form';
    },
    toggleDarkTheme() {
      document.documentElement.classList.toggle('dark');
    }
  }
}
</script>

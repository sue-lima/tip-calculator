<template>
  <div class="tipcalculator min-h-screen flex flex-col">

    <!-- HEADER -->
    <header class="tipcalculator__header flex justify-end p-5">
      <div @click="toggleDarkTheme" class="relative w-14 h-7 rounded-full cursor-pointer bg-sky-600">
        <span class="absolute w-7 h-7 rounded-full bg-sky-950"></span>
      </div>
    </header>

    <!-- MAIN -->
    <main class="tipcalculator__main flex-1 flex flex-col items-center justify-center p-6 bg-red-700">
      <h1 class="tipcalculator__title mb-6 text-2xl font-bold">Le/Tip</h1>

      <!-- CONTAINER PRINCIPAL -->
      <div
        class="tipcalculator__container w-full flex flex-col transition-all duration-500 md:flex-row md:gap-6"
      >
        <!-- FORM -->
        <div
          class="tipcalculator__form w-full md:w-1/2 transition-transform duration-500"
          :class="{
            'translate-x-0': isFormActive || isDesktop,
            '-translate-x-full': !isFormActive && !isDesktop
          }"
        >
          <TipForm />
        </div>

        <!-- RESULT -->
        <div
          class="tipcalculator__result w-full md:w-1/2 transition-transform duration-500"
          :class="{
            'translate-x-0': isResultActive || isDesktop,
            'translate-x-full': !isResultActive && !isDesktop
          }"
        >
          <TipResult />
        </div>
      </div>

      <!-- BOTÃO MOBILE -->
      <button
        v-if="!isDesktop"
        @click="toggleSection"
        class="tipcalculator__toggle mt-4 px-4 py-2 bg-sky-600 text-white rounded-full shadow-md"
      >
        {{ isFormActive ? '>' : '<' }}
      </button>
    </main>

    <!-- FOOTER -->
    <footer class="tipcalculator__footer h-16 flex justify-center items-center">
      <p>Coded with ❤️ by <a href="https://github.com/sue-lima" class="underline">Sue Lima</a></p>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import TipForm from '../components/calculator/TipForm.vue'
import TipResult from '../components/calculator/TipResult.vue'

export default {
  name: 'TipCalculator',
  components: { TipForm, TipResult },
  setup() {
    const activeSection = ref('form')
    const isDesktop = ref(window.innerWidth >= 768)

    const updateWindow = () => {
      isDesktop.value = window.innerWidth >= 768
      if (isDesktop.value) activeSection.value = 'form' // garante layout desktop
    }

    onMounted(() => {
      window.addEventListener('resize', updateWindow)
    })

    const toggleSection = () => {
      activeSection.value = activeSection.value === 'form' ? 'result' : 'form'
    }

    const isFormActive = computed(() => activeSection.value === 'form')
    const isResultActive = computed(() => activeSection.value === 'result')

    const toggleDarkTheme = () => {
      document.documentElement.classList.toggle('dark')
    }

    return {
      isDesktop,
      isFormActive,
      isResultActive,
      toggleSection,
      toggleDarkTheme
    }
  }
}
</script>

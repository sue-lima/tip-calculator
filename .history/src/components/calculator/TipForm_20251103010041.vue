<template>
  <div class="space-y-4 bg-white text-black p-4 rounded-xl w-full max-w-sm">
    <div class="flex items-center justify-center gap-3">
      <span>EUR</span>
      <BaseToggle v-model="checked" @click="toggleCurrency" />
      <span>USD</span>
    </div>

    <div>
      <span>Valor</span>
      <span class="ml-2">{{ store.currentSymbol }}</span>
      <BaseInput type="number" :min="0" step="0.01" v-model="store.billValue" />
    </div>

    <div>
      <span>Gorjeta</span>
      <span class="ml-2">{{ store.tipPercent }}%</span>
      <BaseSlider :min="10" :max="20" v-model="store.tipPercent" />
    </div>

    <div>
      <span>Pessoas</span>
      <span class="ml-2">{{ store.peopleCount }}</span>
      <BaseSlider :min="2" :max="16" v-model="store.peopleCount" />
    </div>
  </div>
</template>

<script>
import { useTipStore } from '../../store/useTipStore'
import BaseToggle from '../base/BaseToggle.vue'
import BaseInput from '../base/BaseInput.vue'
import BaseSlider from '../base/BaseSlider.vue'

export default {
  name: 'TipForm',
  components: { BaseToggle, BaseInput, BaseSlider },
  setup() {
    const store = useTipStore()
    const checked = computed(() => store.currency.base_currency === 'USD')

    const toggleCurrency = () => {
      store.toggleCurrency()
    }

    onMounted(() => {
      store.fetchExchangeRate()
    })

    return { store, checked, toggleCurrency }
  },
}
</script>
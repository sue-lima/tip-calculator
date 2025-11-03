<template>
  <div class="flex flex-col items-center gap-7">
    <div class="flex items-center gap-3">
      <span>EUR</span>
      <BaseToggle v-model="checked" />
      <span>USD</span>
    </div>

    <div class="flex flex-row justify-between items-center gap-3">
      <span>Valor</span>
      <span class="font-bold">{{ store.currentSymbol }}</span>
      <BaseInput type="number" :min="0" step="0.01" v-model="store.billValue" />
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-start gap-3">
        <span>Gorjeta</span>
        <span class="font-bold">{{ store.tipPercent }}%</span>
      </div>
      <div class="flex items-center gap-2">
        <label>10</label>
        <BaseSlider :min="10" :max="20" v-model="store.tipPercent" />
        <label>20</label>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-start gap-3">
        <span>Pessoas</span>
        <span class="font-bold">{{ store.peopleCount }}</span>
      </div>
      <div class="flex items-center gap-2">
        <label>2</label>
        <BaseSlider :min="2" :max="16" v-model="store.peopleCount" />
        <label>16</label>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useTipStore } from '../../store/useTipStore'
import BaseToggle from '../base/BaseToggle.vue'
import BaseInput from '../base/BaseInput.vue'
import BaseSlider from '../base/BaseSlider.vue'

export default {
  name: 'TipForm',
  components: { BaseToggle, BaseInput, BaseSlider },
  setup() {
    const store = useTipStore()

    const checked = computed({
      get: () => store.currency.base_currency === 'USD',
      set: () => store.toggleCurrency()
    })

    onMounted(() => {
      store.fetchCurrencyRates()
    })

    return { store, checked }
  },
}
</script>
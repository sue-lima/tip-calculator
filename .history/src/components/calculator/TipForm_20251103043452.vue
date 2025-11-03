<template>
  <div class="flex flex-col items-center gap-7">
    <div class="flex items-center gap-3">
      <span>EUR</span>
      <BaseToggle v-model="checked" />
      <span>USD</span>
    </div>

    <div class="flex flex-row justify-between items-center gap-3">
      <span>Valor</span>
      <span>{{ store.currentSymbol }}</span>
      <BaseInput type="number" :min="0" step="0.01" v-model="store.billValue" class="flex h-9 w-full rounded-md border px-3 py-1  border-indigo-600 bg-indigo-100 text-indigo-800 focus:ring-2 focus:ring-indigo-200" />
    </div>

    <div class="flex flex-col w-full gap-3">
      <div class="flex items-center justify-start gap-3">
        <span>Gorjeta</span>
        <span>{{ store.tipPercent }}%</span>
      </div>
      <div class="">
        <label>10</label>
        <BaseSlider :min="10" :max="20" v-model="store.tipPercent" />
        <label>20</label>
      </div>
    </div>

    <div class="flex flex-col w-full gap-3">
      <div class="flex items-center justify-start gap-3">
        <span>Pessoas</span>
        <span>{{ store.peopleCount }}</span>
      </div>
      <div class="">
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
<template>
  <div class="flex flex-col items-center gap-7">
    <div>
      <span>EUR</span>
      <BaseToggle v-model="checked" />
      <span>USD</span>
    </div>

    <div>
      <span>Valor</span>
      <span>{{ store.currentSymbol }}</span>
      <BaseInput type="number" :min="0" step="0.01" v-model="store.billValue" class="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-teal-100 bg-teal-50 text-teal-800 focus:ring-2 focus:ring-teal-200 lg:h-10 lg:text-lg" />
    </div>

    <div>
      <div>
        <span>Gorjeta</span>
        <span>{{ store.tipPercent }}%</span>
      </div>
      <div>
        <label>10</label>
        <BaseSlider :min="10" :max="20" v-model="store.tipPercent" />
        <label>20</label>
      </div>
    </div>

    <div>
      <div>
        <span>Pessoas</span>
        <span>{{ store.peopleCount }}</span>
      </div>
      <div>
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
<template>
  <div class="tip-form flex flex-col items-center gap-7">
    <!-- Currency Toggle -->
    <div class="tip-form__currency flex items-center gap-3">
      <span class="tip-form__currency-label">EUR</span>
      <BaseToggle class="tip-form__currency-toggle" v-model="checked" />
      <span class="tip-form__currency-label">USD</span>
    </div>

    <!-- Bill Value -->
    <div class="tip-form__bill flex flex-row justify-between items-center gap-3 w-full">
      <span class="tip-form__bill-label">Valor</span>
      <span class="tip-form__bill-symbol font-bold">{{ store.currentSymbol }}</span>
      <BaseInput
        class="tip-form__bill-input flex-1"
        type="number"
        :min="0"
        step="0.01"
        v-model="store.billValue"
      />
    </div>

    <!-- Tip Percentage -->
    <div class="tip-form__tip flex flex-col gap-3 w-full">
      <div class="tip-form__tip-header flex items-center justify-start gap-3">
        <span class="tip-form__tip-label">Gorjeta</span>
        <span class="tip-form__tip-value font-bold">{{ store.tipPercent }}%</span>
      </div>
      <div class="tip-form__tip-slider flex items-center gap-2 w-full">
        <label class="tip-form__tip-min">10</label>
        <BaseSlider class="tip-form__slider flex-1" :min="10" :max="20" v-model="store.tipPercent" />
        <label class="tip-form__tip-max">20</label>
      </div>
    </div>

    <!-- People Count -->
    <div class="tip-form__people flex flex-col gap-3 w-full">
      <div class="tip-form__people-header flex items-center justify-start gap-3">
        <span class="tip-form__people-label">Pessoas</span>
        <span class="tip-form__people-value font-bold">{{ store.peopleCount }}</span>
      </div>
      <div class="tip-form__people-slider flex items-center gap-2 w-full">
        <label class="tip-form__people-min">2</label>
        <BaseSlider class="tip-form__slider flex-1" :min="2" :max="16" v-model="store.peopleCount" />
        <label class="tip-form__people-max">16</label>
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
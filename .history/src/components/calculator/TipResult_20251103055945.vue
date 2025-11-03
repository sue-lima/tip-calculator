<template>
  <div class="tip-result flex flex-col text-center gap-7">
    <!-- Bill -->
    <div class="tip-result__item">
      <span class="tip-result__label">Conta</span>
      <div class="tip-result__value font-bold">{{ baseSymbol }}{{ billValue }}</div>
    </div>

    <!-- Tip -->
    <div class="tip-result__item">
      <span class="tip-result__label">Gorjeta</span>
      <div class="tip-result__value font-bold">{{ baseSymbol }}{{ tipAmount }}</div>
    </div>

    <!-- Total -->
    <div class="tip-result__item">
      <span class="tip-result__label">Total</span>
      <div class="tip-result__value font-bold">{{ baseSymbol }}{{ totalAmount }}</div>
    </div>

    <!-- Per Person -->
    <div class="tip-result__item">
      <span class="tip-result__label">Por pessoa</span>
      <div class="tip-result__value font-bold">{{ baseSymbol }}{{ perPerson }}</div>
    </div>

    <!-- Local Currency -->
    <div class="tip-result__item">
      <span class="tip-result__label">Em {{ localSymbol }}</span>
      <div class="tip-result__value font-bold">{{ localSymbol }}{{ totalInLocal }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useTipStore } from '../../store/useTipStore'

export default {
  name: 'TipResult',
  setup() {
    const store = useTipStore()
    const billValue = computed(() => store.billValue.toFixed(2))
    const tipAmount = computed(() => store.tipAmount.toFixed(2))
    const totalAmount = computed(() => store.totalAmount.toFixed(2))
    const perPerson = computed(() => store.perPerson.toFixed(2))
    const totalInLocal = computed(() => store.totalInLocal.toFixed(2))
    const baseSymbol = computed(() => store.currentSymbol)
    const localSymbol = computed(() => store.currencies[store.currency.local_currency].symbol)

    return { billValue, tipAmount, totalAmount, perPerson, totalInLocal, baseSymbol, localSymbol }
  },
}
</script>
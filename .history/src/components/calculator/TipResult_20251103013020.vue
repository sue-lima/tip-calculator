<template>
  <div>
    <div>
      <span>Conta</span>
      <div>{{ baseSymbol }}{{ billValue }}</div>
    </div>

    <div>
      <span>Gorjeta</span>
      <div>{{ baseSymbol }}{{ tipAmount }}</div>
    </div>

    <div>
      <span>Total</span>
      <div>{{ baseSymbol }}{{ totalAmount }}</div>
    </div>

    <div>
      <span>Por pessoa</span>
      <div>{{ baseSymbol }}{{ perPerson }}</div>
    </div>

    <div>
      <span>Em {{ localSymbol }}</span>
      <div>{{ localSymbol }}{{ totalInLocal }}</div>
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

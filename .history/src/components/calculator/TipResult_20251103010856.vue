<template>
  <div>
    <div>
      <span>Conta</span>
      <div>{{ store.currentSymbol }}{{ store.billValue.toFixed(2) }}</div>
    </div>

    <div>
      <span>Gorjeta</span>
      <div>{{ store.currentSymbol }}{{ store.tipAmount.toFixed(2) }}</div>
    </div>

    <div>
      <span>Total</span>
      <div>{{ store.currentSymbol }}{{ store.totalAmount.toFixed(2) }}</div>
    </div>

    <div>
      <span>Por pessoa</span>
      <div>{{ store.currentSymbol }}{{ store.perPerson.toFixed(2) }}</div>
    </div>

    <div>
      <span>Em {{ store.currencies[store.currency.local_currency].symbol }}</span>
      <div>{{ store.currencies[store.currency.local_currency].symbol}}{{ store.totalInLocal.toFixed(2) }}</div>
    </div>
  </div>
</template>

<script>
import { useTipStore } from '../../store/useTipStore'

export default {
  name: 'TipResult',
  setup() {
    const store = useTipStore()
    return { store }
  },
}
</script>

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
import { useTipStore } from '../../store/useTipStore'

export default {
  name: 'TipResult',
  setup() {
    const store = useTipStore()
    return { store }
  },
}
</script>

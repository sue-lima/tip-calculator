<template>
  <!-- 1️⃣ Estrutura visual -->
</template>

<script>
export default {
  name: "TipCalculator",
  data() {
    return {
      currency: {
        base_currency: 'USD',
        local_currency: 'BRL'
      },
      currencies: {
        USD: { symbol: '$' },
        EUR: { symbol: '€' },
        BRL: { symbol: 'R$' }
      }
    };
  },
};
</script>
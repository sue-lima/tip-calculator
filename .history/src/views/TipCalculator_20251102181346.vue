<template>
  <!-- 1️⃣ Estrutura visual -->
</template>

<script>
export default {
  name: 'TipCalculator',
  components: {
    BaseInputSlider,
    BaseInput,
    BaseInputSwitch
  },
  data() {
    return {
      value: 0,
      tip: 10,
      people: 2,
      checked: true,
      currency: {
        base_currency: 'USD',
        quote_currency: 'BRL'
      },
      currencies: {
        USD: { symbol: '$' },
        EUR: { symbol: '€' },
        BRL: { symbol: 'R$' }
      },
      rate: {},
      isMobile: false,
      panel: false
    };
  },
</script>
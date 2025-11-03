<template>
  <!-- 1️⃣ Estrutura visual -->
</template>

<script>
import CurrencyService from '@/api/currencyService.js';

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
  mounted() {
    this.getCurrencyRates()
  },
  methods: {
    async getCurrencyRates() {
      try {
        const response = await CurrencyService.get(this.currency);
        this.rate = response.data[`${this.currency.base_currency}${this.currency.local_currency}`];
      } catch (error) {
        console.error('Erro ao buscar taxas de câmbio:', error);
      }
    },
  },
};
</script>
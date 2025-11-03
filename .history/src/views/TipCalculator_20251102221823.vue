<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
    <h1>Le/Tip</h1>
  </main>
</template>

<script>
import CurrencyService from '../services/currencyService';

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
      /*try {
        const response = await CurrencyService.get(this.currency);
        this.rate = response.data[`${this.currency.base_currency}${this.currency.local_currency}`];
      } catch (error) {
        console.error('Erro ao buscar taxas de câmbio:', error);
      }*/
      try {
        const response = await CurrencyService.getCurrencyRates()
        this.currency = response
        console.log(response)
      } catch (err) {
        console.error('Erro ao buscar taxas de câmbio:', err)
        this.error = 'Não foi possível carregar as cotações.'
      }
    },
  },
};
</script>
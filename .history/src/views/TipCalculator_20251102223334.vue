<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
    <h1>Le/Tip</h1>
    <TipForm />
    <TipResult />
  </main>
</template>

<script>
import CurrencyService from '../services/currencyService';
import TipForm from '../components/calculator/TipForm.vue';
import TipResult from '../components/calculator/TipResult.vue';

export default {
  name: "TipCalculator",
  components: {
    TipForm,
    TipResult,
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
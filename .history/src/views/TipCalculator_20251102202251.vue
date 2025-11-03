<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
    <h1>Le/Tip</h1>
    <div class="flex gap-2 items-center">
      <label class="text-sm font-medium">Moeda:</label>
      <select class="border rounded p-1">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>

    <div>
      <input type="number" min="0" step="0.01" class="border-2 border-gray-300 rounded-md p-2 text-lg text-center" />
      <input type="range">
      <input type="range">
    </div>
    
    <div>
      <div>
        <span>Conta</span>
        <div>tert</div>
      </div>
      <div>
              <span>Gorjeta</span>
              <div>fhgg</div>
            </div>
      <div>
              <span>Total</span>
              <div>hgfh</div>
            </div>
            <div>
              <span>Por pessoa</span>
              <div>ghgh</div>
            </div>
            <div>
              <span>em R$</span>
              <div>fhgh</div>
            </div>
    </div>
  </main>
</template>

<script>
import CurrencyService from '../api/currencyService';

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
        const data = await CurrencyService.getCurrencyRates()
        this.currency = data
        console.log(data)
      } catch (err) {
        console.error('Erro ao buscar taxas de câmbio:', err)
        this.error = 'Não foi possível carregar as cotações.'
      }
    },
  },
};
</script>
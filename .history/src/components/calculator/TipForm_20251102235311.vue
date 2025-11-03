<template>
  <div>
    <span>EUR</span>
    <BaseToggle v-model="checked" />
    <span>USD</span>
  </div>
  <div>
    <span>Valor</span>
    <span>{{ currentCurrencySymbol }}</span>
    <BaseInput :type="'number'" :min="0" step="0.01" v-model="billValue" />
  </div>
  <div>
    <span>Gorjeta</span>
    <span>{{ tipValue }}</span>
    <div>
      <label for="">10</label>
      <BaseSlider :min="10" :max="20" v-model="tipPercent" />
      <span>20</span>
    </div>
  </div>
  <div>
    <span>Pessoas</span>
    <span>{{ peopleCount }}</span>
    <div>
      <label for="">2</label>
      <BaseSlider :min="2" :max="16" v-model="peopleCount" />
      <span>16</span>
    </div>
  </div>
</template>

<script>
import BaseToggle from '../base/BaseToggle.vue';
import BaseInput from '../base/BaseInput.vue';
import BaseSlider from '../base/BaseSlider.vue';

import CurrencyService from '../../services/currencyService';

export default {
  name: 'TipForm',
  components: {
    BaseToggle,
    BaseInput,
    BaseSlider,
  },
  data() {
    return {
      billValue: 0.00,
      tipPercent: 10,
      peopleCount: 2,
      checked: true,
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
  watch: {
    checked: function () {
      this.handleCurrencyChange()
    }
  },
  computed: {
    currentCurrencySymbol() {
      return this.baseCurrencySymbol;
    },
    baseCurrencySymbol() {
      console.log('base_currency:', this.currency.base_currency)
      return this.currencies[this.currency.base_currency]?.symbol || '';
    },
    tipValue() {
      return `${this.tipPercent}%`
    },
  },
  methods: {
    async getCurrencyRates() {
      try {
        const { base_currency, local_currency } = this.currency
        const response = await CurrencyService.getCurrencyRates(base_currency, local_currency)
        //this.rate = response[`${base_currency}${local_currency}`]?.bid || null
        console.log(response)
      } catch (err) {
        console.error('Erro ao buscar taxas de câmbio:', err)
        this.error = err.message || 'Não foi possível carregar as cotações.'
      }
    },
    handleCurrencyChange() {
      this.currency.base_currency = this.checked ? 'USD' : 'EUR';
      this.getCurrencyRates();
    }
  },
}
</script>
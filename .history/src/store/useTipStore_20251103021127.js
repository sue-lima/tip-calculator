import { defineStore } from 'pinia'
import CurrencyService from '../services/currencyService'

export const useTipStore = defineStore('tip', {
  state: () => ({
    billValue: 0,
    tipPercent: 10,
    peopleCount: 2,
    exchangeRate: null,
    currency: {
      base_currency: 'USD',
      local_currency: 'BRL',
    },
    currencies: {
      USD: { symbol: '$' },
      EUR: { symbol: '€' },
      BRL: { symbol: 'R$' },
    },
  }),

  getters: {
    currentSymbol: (state) =>
      state.currencies[state.currency.base_currency]?.symbol || '',

    tipAmount: (state) =>
      (state.billValue * state.tipPercent) / 100,

    totalAmount: (state) =>
      state.billValue + (state.billValue * state.tipPercent) / 100,

    perPerson: (state) =>
      state.peopleCount > 0 ? (state.billValue + (state.billValue * state.tipPercent) / 100) / state.peopleCount: 0,

    totalInLocal: (state) =>
      state.exchangeRate ? ((state.billValue + (state.billValue * state.tipPercent) / 100) / state.peopleCount) * state.exchangeRate : 0,
  },

  actions: {
    async fetchCurrencyRates() {
      try {
        const { base_currency, local_currency } = this.currency
        const response = await CurrencyService.getCurrencyRates(base_currency, local_currency)
        this.exchangeRate = response[`${base_currency}${local_currency}`]?.bid || null
        console.log('Cotação de câmbio atualizada:', this.exchangeRate)
      } catch (err) {
        console.error('Erro ao buscar cotação de câmbio:', err)
        this.error = err.message || 'Não foi possível carregar as cotações.'
      }
    },

    toggleCurrency() {
      this.currency.base_currency = this.currency.base_currency === 'USD' ? 'EUR' : 'USD'
      this.fetchCurrencyRates()
    },
  },
})
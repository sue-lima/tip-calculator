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
    currentSymbol: (state) => {
      const val = state.currencies[state.currency.base_currency]?.symbol || ''
      console.log('currentSymbol:', val)
      return val
    },

    tipAmount: (state) => {
      const val = (state.billValue * state.tipPercent) / 100
      console.log('tipAmount:', val)
      return val
    },

    totalAmount: (state) => {
      const val = state.billValue + (state.billValue * state.tipPercent) / 100
      console.log('totalAmount:', val)
      return val
    },

    perPerson: (state) => {
      const val =
        state.peopleCount > 0
          ? (state.billValue + (state.billValue * state.tipPercent) / 100) / state.peopleCount
          : 0
      console.log('perPerson:', val)
      return val
    },

    totalInLocal: (state) => {
      const val = state.exchangeRate
        ? (state.billValue + (state.billValue * state.tipPercent) / 100) * state.exchangeRate
        : 0
      console.log('totalInLocal:', val)
      return val
    },
  },

  actions: {
    async fetchCurrencyRates() {
      try {
        const { base_currency, local_currency } = this.currency
        const response = await CurrencyService.getCurrencyRates(base_currency, local_currency)
        this.exchangeRate = response[`${base_currency}${local_currency}`]?.bid || null
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
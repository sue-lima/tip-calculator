import api from '../api/axiosInstance'

const getCurrencyRates = async (baseCurrency, localCurrency) => {
  try {
    if (!baseCurrency || !localCurrency) {
      throw new Error('Parâmetros inválidos: é necessário informar baseCurrency e localCurrency.')
    }

    const response = await api.get(`${baseCurrency}-${localCurrency}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados da API de moedas:', error)
    throw error
  }
}

export default { getCurrencyRates }
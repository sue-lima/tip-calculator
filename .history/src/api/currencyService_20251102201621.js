import api from './axiosInstance'

const getCurrencyRates = async () => {
  try {
    const response = await api.get('/last/USD-BRL')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar dados da API de moedas:', error)
    throw error
  }
}

export default { getCurrencyRates }
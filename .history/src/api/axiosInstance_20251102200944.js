import axios from "axios";

const baseDomain = process.env.VITE_API_BASE_URL;
const baseURL = `${baseDomain}/json/last/`;

// Criação da instância configurada do Axios
const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

// Interceptador de requisição (útil para logs, auth, etc.)
apiClient.interceptors.request.use(
  (config) => {
    console.info(`[Request] ${config.method?.toUpperCase()} → ${config.url}`);
    return config;
  },
  (error) => {
    console.error("[Request Error]", error);
    return Promise.reject(error);
  }
);

// Interceptador de resposta (tratamento global de erros)
apiClient.interceptors.response.use(
  (response) => {
    console.log("[Response]", response); // <-- aqui
    return response; // não esquece de retornar
  },
  (error) => {
    const status = error.response?.status;
    const message =
      status === 404
        ? "Recurso não encontrado."
        : status === 500
          ? "Erro interno no servidor."
          : "Falha ao conectar à API.";

    console.error(`[Response Error] ${status || "Network"}: ${message}`);
    return Promise.reject({ status, message, details: error });
  }
);
export default apiClient;
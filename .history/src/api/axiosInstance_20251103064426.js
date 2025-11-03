import axios from "axios";

const baseDomain = import.meta.env.VITE_API_BASE_URL;
const baseURL = `${baseDomain}/json/last/`;

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

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

apiClient.interceptors.response.use(
  (response) => {
    return response;
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
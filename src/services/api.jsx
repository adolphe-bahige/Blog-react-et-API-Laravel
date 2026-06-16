// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "http://10.46.12.156:8000/api", // pourque l'api sois accessible sur mobile et faire  php artisan serve --host=0.0.0.0 --port=8000 sur back
  headers: {
    "Content-Type": "application/json",
  },
});

// ===== REQUEST INTERCEPTOR =====
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // inject token uniquement si présent
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ===== RESPONSE INTERCEPTOR =====
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    // Token expiré ou invalide
    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;

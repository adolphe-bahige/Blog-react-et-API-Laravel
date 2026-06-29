// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: "http://10.208.25.156:8000/api", // pourque l'api sois accessible sur mobile et faire  php artisan serve --host=0.0.0.0 --port=8000 sur back
  headers: {
    "Content-Type": "application/json",
  },
});

// ===== REQUEST INTERCEPTOR =====
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Inject token si présent
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ===== RESPONSE INTERCEPTOR =====
let isRedirecting = false; // 🔥 évite plusieurs redirections

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        // Token invalide / expiré
        localStorage.removeItem("token");

        if (!isRedirecting) {
          isRedirecting = true;
          window.location.href = "/login";
        }
        break;

      case 403:
        console.error("Accès interdit");
        break;

      case 500:
        console.error("Erreur serveur");
        break;

      default:
        console.error("Erreur inconnue");
    }

    return Promise.reject(error);
  },
);

export default api;

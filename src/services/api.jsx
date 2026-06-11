// src/services/api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "http://10.116.5.156:8000/api", // pourque l'api sois accessible sur mobile et faire  php artisan serve --host=0.0.0.0 --port=8000 sur back
  headers: {
    "Content-Type": "application/json",
  },
});

// INTERCEPTOR (TRÈS IMPORTANT) || pour le token d'authentification
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default api;

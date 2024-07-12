import axios from "axios";

export const apiSolsport = axios.create({
  baseURL: "https://sociedadcosmopolita.com.ar/irinagorlino/api/v1",
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
});

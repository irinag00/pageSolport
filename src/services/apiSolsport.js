import axios from "axios";

export const apiSolsport = axios.create({
  baseURL: "https://backend-solsport-v2.onrender.com/api/v1",
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
});

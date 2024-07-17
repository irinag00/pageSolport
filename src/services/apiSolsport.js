import axios from "axios";

export const apiSolsport = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
});

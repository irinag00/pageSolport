import axios from "axios";

export const apiSolsport = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
});

// export const getProducts = async () => {
//   try {
//     const response = await apiSolsport.get("/products");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products", error);
//     throw error;
//   }
// };

// export const login = async (username, password) => {
//   try {
//     const response = await apiSolsport.post("/auth/login", {
//       username,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data && error.response.data.message) {
//       throw new Error(error.response.data.message);
//     } else {
//       throw new Error("Error during login");
//     }
//   }
// };

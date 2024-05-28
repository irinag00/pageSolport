import { apiSolsport } from "./apiSolsport";

export const getProducts = async () => {
  try {
    const response = await apiSolsport.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const newProduct = async (product, token) => {
  try {
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("img", product.img);
    formData.append("category", product.category);

    const response = await apiSolsport.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product", error);
    throw error;
  }
};

export const updateProduct = async (id, product, token) => {
  try {
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    if (product.img) {
      formData.append("img", product.img);
    }
    formData.append("category", product.category);

    const response = await apiSolsport.patch(`/products/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product", error);
    throw error;
  }
};

export const deleteProduct = async (id, token) => {
  try {
    const response = await apiSolsport.delete(`/products/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting product", error);
    throw error;
  }
};

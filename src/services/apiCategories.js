import { apiSolsport } from "./apiSolsport";

export const getCategories = async () => {
  try {
    const response = await apiSolsport.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

export const newCategories = async (category, token) => {
  try {
    const formData = new FormData();
    formData.append("title", category.title);
    formData.append("img", category.img);

    const response = await apiSolsport.post("/categories", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating category", error);
    throw error;
  }
};

export const updateCategories = async (id, category, token) => {
  try {
    const formData = new FormData();
    formData.append("title", category.title);
    if (category.img) {
      formData.append("img", category.img);
    }

    const response = await apiSolsport.patch(`/categories/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating category", error);
    throw error;
  }
};

export const deleteCategory = async (id, token) => {
  try {
    const response = await apiSolsport.delete(`/categories/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting category", error);
    throw error;
  }
};

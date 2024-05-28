import { apiSolsport } from "./apiSolsport";

export const getMaterials = async () => {
  try {
    const response = await apiSolsport.get("/materials");
    return response.data;
  } catch (error) {
    console.error("Error fetching materials", error);
    throw error;
  }
};

export const newMaterial = async (material, token) => {
  try {
    const formData = new FormData();
    formData.append("title", material.title);
    formData.append("description", material.description);
    formData.append("img", material.img);

    const response = await apiSolsport.post("/materials", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating material", error);
    throw error;
  }
};

export const updateMaterial = async (id, material, token) => {
  try {
    const formData = new FormData();
    formData.append("title", material.title);
    formData.append("description", material.description);
    if (material.img) {
      formData.append("img", material.img);
    }

    const response = await apiSolsport.patch(`/materials/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating material", error);
    throw error;
  }
};

export const deleteMaterial = async (id) => {
  try {
    const response = await apiSolsport.delete(`/materials/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting material", error);
    throw error;
  }
};

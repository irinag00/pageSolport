import { apiSolsport } from "./apiSolsport";

export const getServices = async () => {
  try {
    const response = await apiSolsport.get("/services");
    return response.data;
  } catch (error) {
    console.error("Error fetching services", error);
    throw error;
  }
};

export const newService = async (service, token) => {
  try {
    const formData = new FormData();
    formData.append("title", service.title);
    formData.append("description", service.description);
    formData.append("img", service.img);

    const response = await apiSolsport.post("/services", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating service", error);
    throw error;
  }
};

export const updateService = async (id, service, token) => {
  try {
    const formData = new FormData();
    formData.append("title", service.title);
    formData.append("description", service.description);
    if (service.img) {
      formData.append("img", service.img);
    }

    const response = await apiSolsport.patch(`/services/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating service", error);
    throw error;
  }
};

export const deleteService = async (id) => {
  try {
    const response = await apiSolsport.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting service", error);
    throw error;
  }
};

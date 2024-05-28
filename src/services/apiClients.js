import { apiSolsport } from "./apiSolsport";

export const getClients = async () => {
  try {
    const response = await apiSolsport.get("/clients");
    return response.data;
  } catch (error) {
    console.error("Error fetching clients", error);
    throw error;
  }
};

export const newClient = async (client, token) => {
  try {
    const formData = new FormData();
    formData.append("title", client.title);
    formData.append("img", client.img);

    const response = await apiSolsport.post("/clients", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating clients", error);
    throw error;
  }
};

export const updateClient = async (id, client, token) => {
  try {
    const formData = new FormData();
    formData.append("title", client.title);
    if (client.img) {
      formData.append("img", client.img);
    }

    const response = await apiSolsport.patch(`/clients/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating clients", error);
    throw error;
  }
};

export const deleteClient = async (id, token) => {
  try {
    const response = await apiSolsport.delete(`/clients/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting client", error);
    throw error;
  }
};

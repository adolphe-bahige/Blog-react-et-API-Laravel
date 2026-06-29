import api from "./api";

export const getCategories = async () => {
  const response = await api.get("/categories");

  return {
    categories: response.data.categories ?? response.data,
    meta: response.data.meta ?? null,
  };
};

export const createCategory = async (data) => {
  return await api.post("/categories", data);
};

export const updateCategory = (id, data) => {
  return api.put(`/categories/${id}`, data);
};

export const getCategory = (id) => {
  return api.get(`/categories/${id}`);
};

export const deleteCategory = (id) => {
  return api.delete(`/categories/${id}`);
};

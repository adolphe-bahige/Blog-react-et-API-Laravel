import api from "./api";

export const getPosts = async () => {
  const response = await api.get("/articles");

  if (!response.data.success) {
    throw new Error("Erreur API");
  }

  return {
    posts: response.data.articles,
    meta: response.data.meta,
  };
};

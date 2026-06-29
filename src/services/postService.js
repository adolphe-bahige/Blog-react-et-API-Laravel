import { data } from "react-router-dom";
import api from "./api";

export const getPosts = async () => {
  const response = await api.get("/articles");

  return {
    posts: response.data.articles ?? response.data,
    meta: response.data.meta ?? null,
  };
};

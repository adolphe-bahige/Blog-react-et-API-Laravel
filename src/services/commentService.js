import axios from "axios";

export const getComments = async () => {
  const res = await axios.get("http://localhost:8000/api/comments");

  return res.data.comments;
};

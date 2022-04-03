import client from "./client";

export const getCategory = () => {
  return client.get("/api/Categories");
};

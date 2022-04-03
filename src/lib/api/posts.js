import client from "./client";

export const writePost = ({ title, body }) => {
  return client.post("/api/Questions", {
    memberId: 1,
    title,
    content: body,
    categoryId: 201,
  });
};

import client from "./client";

export const writePost = ({ title, body }) => {
  console.log({
    memberId: 1,
    title,
    content: body,
    categoryId: 201,
  });
  return client.post("/api/Question", {
    memberId: 1,
    title,
    content: body,
    categoryId: 201,
  });
};

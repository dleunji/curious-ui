import client from "./client";
import qs from "qs";
export const writePost = ({ title, body }) => {
  return client.post("/api/Questions", {
    memberId: 1,
    title,
    content: body,
    categoryId: 201,
  });
};

export const readPost = (id) => client.get(`/api/Questions/${id}`);

export const listPosts = ({ page, memberName }) => {
  const queryString = qs.stringify({
    page,
    memberName,
  });

  return client.get(`/api/Questions/${queryString}`);
};

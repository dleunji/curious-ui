import client from "./client";

export const writeComment = ({ memberId, content, questionId }) => {
  console.log({
    memberId,
    content,
    questionId,
  });
  return client.post("/api/Comments/comment", {
    memberId,
    content,
    questionId,
  });
};

export const listComments = (questionId) => {
  console.log(`/api/Comments/questions/${questionId}/comments`);
  return client.get(`/api/Comments/questions/${questionId}/comments`);
};

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

export const writeReply = ({
  memberId,
  content,
  questionId,
  parentCommentId,
}) => {
  console.log({
    memberId,
    content,
    questionId,
    parentCommentId,
  });
  return client.post("/api/Comments/reply", {
    memberId,
    content,
    questionId,
    parentCommentId,
  });
};

export const listComments = (questionId) => {
  console.log(`/api/Comments/questions/${questionId}/comments`);
  return client.get(`/api/Comments/questions/${questionId}/comments`);
};

export const listMembers = (questionId) => {
  console.log(`/api/Comments/questions/${questionId}/members`);
  return client.get(`/api/Comments/questions/${questionId}/members`);
};

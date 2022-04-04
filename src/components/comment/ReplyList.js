import styled from "styled-components";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentItem";
const ReplyListBlock = styled.div`
  margin-left: 30px;
  // margin-top: 30px;
`;
const ReplyList = ({ replies, members, onPostReply, user }) => {
  if (replies?.$values.length === 0) return null;
  return (
    <ReplyListBlock>
      {replies
        ? replies.$values.map((reply, idx) => (
            <CommentItem
              members={members}
              comment={reply}
              onPostReply={onPostReply}
              key={idx}
              user={user}
            />
          ))
        : null}
    </ReplyListBlock>
  );
};

export default ReplyList;

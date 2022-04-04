import styled from "styled-components";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentItem";
const ReplyListBlock = styled.div`
  margin-left: 30px;
  margin-top: 30px;
`;
const ReplyList = ({ replies }) => {
  if (replies?.$values.length === 0) return null;
  return (
    <ReplyListBlock>
      {/* <CommentItem depth={depth} /> */}
      {/* <CommentEditor /> */}
    </ReplyListBlock>
  );
};

export default ReplyList;

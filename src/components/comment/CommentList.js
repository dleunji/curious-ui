import styled from "styled-components";
import CommentEditor from "./CommentEditor";
import Responsive from "../common/Responsive";
import CommentItem from "./CommentItem";
const CommentListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const CommentList = ({
  onChangeField,
  commentBox,
  onPostComment,
  onPostReply,
  members,
  comments,
}) => {
  return (
    <CommentListBlock>
      <CommentEditor
        onChangeField={onChangeField}
        commentBox={commentBox}
        onPostComment={onPostComment}
      />
      {comments
        ? comments.$values.map((comment, idx) => (
            <CommentItem
              comment={comment}
              key={idx}
              onPostReply={onPostReply}
              members={members}
            />
          ))
        : null}
    </CommentListBlock>
  );
};

export default CommentList;

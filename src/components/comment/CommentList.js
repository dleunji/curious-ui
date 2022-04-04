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
  comments,
  commentDict,
  memberDict,
}) => {
  console.log(comments);
  return (
    <CommentListBlock>
      <div>댓글 {Object.keys(commentDict).length}개</div>
      <CommentEditor
        onChangeField={onChangeField}
        commentBox={commentBox}
        onPostComment={onPostComment}
      />
      {comments
        ? comments.$values.map((comment, idx) => (
            <CommentItem
              comment={comment}
              commentDict={commentDict}
              memberDict={memberDict}
              key={idx}
            />
          ))
        : null}
    </CommentListBlock>
  );
};

export default CommentList;

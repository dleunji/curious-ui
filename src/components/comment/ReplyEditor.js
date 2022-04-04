import Button from "../common/Button";
import styled from "styled-components";
import Responsive from "../common/Responsive";
const CommentEditorBlock = styled.div`
  form {
    padding-top: 10px;
    textarea {
      padding: 10px;
      width: 100%;
      height: 4rem;
      resize: vertical;
      // height: 5rem;
    }
  }
  .button {
    display: flex;
    justify-content: flex-end;
  }
`;

const ReplyEditor = ({
  onChangeField,
  commentBox,
  parentCommentId,
  onPostReply,
  onCancel,
}) => {
  return (
    <CommentEditorBlock>
      <form>
        <textarea
          placeholder="댓글을 입력하세요..."
          onChange={onChangeField}
          value={commentBox}
        />
        <div className="button">
          <Button
            backgroundColor="rgb(239, 239, 239)"
            height="2rem"
            onClick={(e) => onCancel()}
          >
            취소
          </Button>
          <Button
            color="white"
            backgroundColor="#F2CF66"
            height="2rem"
            onClick={(e) => onPostReply(e, parentCommentId, commentBox)}
          >
            작성
          </Button>
        </div>
      </form>
    </CommentEditorBlock>
  );
};

export default ReplyEditor;

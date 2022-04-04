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
      margin: 15px 0px;
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

import styled from "styled-components";
import Button from "../common/Button";

const WriteActionButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onPublish, onCancel }) => {
  return (
    <WriteActionButtonsBlock>
      <Button
        width="7rem"
        height="3rem"
        fontSize="1.5rem"
        color="white"
        backgroundColor="#F27983"
        onClick={onPublish}
      >
        등록
      </Button>
      <Button
        width="7rem"
        height="3rem"
        fontSize="1.5rem"
        color="white"
        backgroundColor="#F2CF66"
        onClick={onCancel}
      >
        취소
      </Button>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;

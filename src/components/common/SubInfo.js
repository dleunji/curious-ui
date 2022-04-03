import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: #c5c5c5;

  span + span:before {
    color: #c5c5c5;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
`;
const SubInfo = ({ memberName, publishedDate, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/questions/${memberName}`}>{memberName}</Link>
        </b>
      </span>
      <span>{new Date().toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;

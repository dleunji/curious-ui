import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  font-size: ${(props) => props.fontSize || "1rem"};
  width: ${(props) => props.width || "5.3rem"};
  height: ${(props) => props.height || "2rem"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "rgb(239, 239, 239)"};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;

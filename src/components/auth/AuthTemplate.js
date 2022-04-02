import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    padding-bottom: 1.4rem;
    text-align: center;
    img {
      width: 3.7rem;
    }
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-family: "Fredoka One", cursive;
    justify-content: center;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 6px;
`;

const logoURL = `${process.env.PUBLIC_URL}/images/FAQ_perspective_matte.png`;
// 회원가입 또는 로그인 폼
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <Link to="/">
          <div className="logo-area">
            <img alt="logo" src={logoURL} />
            Curious
          </div>
        </Link>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";

const HeaderBlock = styled.div`
  postion: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    img {
      width: 3.7rem;
    }
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-family: "Fredoka One", cursive;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const logoURL = `${process.env.PUBLIC_URL}/images/FAQ_perspective_matte.png`;
const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">
            <img alt="logo" src={logoURL} />
            Curious
          </div>
          <div className="right">
            <Link to="signin">
              <Button>로그인</Button>
            </Link>
            <Link to="register">
              <Button>회원가입</Button>
            </Link>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

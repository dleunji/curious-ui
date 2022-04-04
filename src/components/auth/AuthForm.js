import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";
const AuthFormBlock = styled.div`
  margin: 30px 5px;
  .error-info {
    display: flex;
    justify-content: center;
  }
  h3 {
    display: flex;
    justify-content: center;
    margin-bottom: 1.4rem;
  }
  .input-box {
    margin-bottom: 10px;
    span {
      font-family: "Fredoka One", cursive;
      font-size: 1.2rem;
    }
  }
  .login-button {
    margin-top: 30px;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  font-size: 1rem;
  margin: 5px 0;
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  padding: 3px 10px;
  &:focus {
    outline: 1px solid #f27983;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: #c5c5c5;
    text-decoration: underline;
  }
`;

const textMap = {
  signin: "로그인",
  register: "회원가입",
};
// 회원가입 또는 로그인 폼
const AuthForm = ({ type, form, onChange, onSubmit, authError }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      {/* TODO: 회원가입 시에는 이름등록도 */}
      <form onSubmit={onSubmit}>
        {type === "register" && (
          <div className="input-box">
            <span>Name</span>
            <StyledInput
              onChange={onChange}
              name="memberName"
              value={form.memberName}
            />
          </div>
        )}
        <div className="input-box">
          <span>Email</span>
          <StyledInput
            onChange={onChange}
            name="mailAddress"
            value={form.mailAddress}
          />
        </div>
        <div className="input-box">
          <span>Password</span>
          <StyledInput
            type="password"
            onChange={onChange}
            name="password"
            value={form.password}
          />
        </div>
        {authError ? (
          <div className="error-info">
            {type === "signin" ? "로그인 실패" : "회원가입 실패"}
          </div>
        ) : null}
        <Button
          className="login-button"
          backgroundColor="#f27983"
          color="white"
          width="100%"
          height="45px"
        >
          {text}
        </Button>
      </form>
      <Footer>
        {type === "signin" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/signin">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, signin } from "../../modules/auth";
import { check } from "../../modules/user";

const SigninForm = () => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signin,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "signin", key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { mailAddress, password } = form;
    console.log("로그인");
    dispatch(signin({ mailAddress, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("signin"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }

    if (auth) {
      console.log("로그인 성공");
      dispatch(check(auth));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="signin"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SigninForm;

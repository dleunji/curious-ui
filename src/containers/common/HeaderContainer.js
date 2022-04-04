import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import { initializeAuth, initializeForm } from "../../modules/auth";
import { signout } from "../../modules/user";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onSignOut = () => {
    localStorage.removeItem("user");
    dispatch(signout());
    dispatch(initializeAuth());
    dispatch(initializeForm());
  };

  const onClick = () => {
    navigate("/");
  };
  return <Header user={user} onSignOut={onSignOut} onClick={onClick} />;
};
export default HeaderContainer;

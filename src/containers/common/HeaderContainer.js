import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { signout } from "../../modules/user";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const onSignOut = () => {
    localStorage.removeItem("user");
    dispatch(signout());
  };
  return <Header user={user} onSignOut={onSignOut} />;
};
export default HeaderContainer;

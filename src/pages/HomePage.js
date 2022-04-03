import HeaderContainer from "../containers/common/HeaderContainer";
import CategoryContainer from "../containers/category/CategoryContainer";
import PostListContainer from "../containers/posts/PostListContainer";
const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <CategoryContainer />
      <PostListContainer />
    </>
  );
};

export default HomePage;

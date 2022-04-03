import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import qs from "qs";
import { listPosts } from "../../modules/posts";
import PostList from "../../components/posts/PostList";
const PostListContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { memberName } = useParams();

  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/LIST_POSTS"],
      user: user.user,
    })
  );

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    // const search = location.search;
    // const params = new URLSearchParams(search);
    // const keyword = params.get("keyword");
    dispatch(listPosts({ memberName, page }));
  }, [dispatch, location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;

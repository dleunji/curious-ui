import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PostViewer from "../../components/post/PostViewer";
import { readPost } from "../../modules/post";
import { unloadPost } from "../../modules/post";

const PostViewerContainer = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
  }));

  useEffect(() => {
    console.log(questionId);
    dispatch(readPost(questionId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, questionId]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;

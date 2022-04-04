import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PostViewer from "../../components/post/PostViewer";
import comment, {
  appendMember,
  listComments,
  listMembers,
} from "../../modules/comment";
import { readPost } from "../../modules/post";
import { unloadPost } from "../../modules/post";

const PostViewerContainer = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading, comments } = useSelector(
    ({ post, loading, comment }) => ({
      post: post.post,
      error: post.error,
      loading: loading["post/READ_POST"],
      comments: comment.comments,
    })
  );

  useEffect(() => {
    console.log(questionId);
    dispatch(readPost(questionId));
    dispatch(listComments(questionId));
    dispatch(listMembers(questionId));

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, questionId]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;

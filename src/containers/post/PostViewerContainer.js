import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PostViewer from "../../components/post/PostViewer";
import comment, { appendMember, listComments } from "../../modules/comment";
import { readPost } from "../../modules/post";
import { unloadPost } from "../../modules/post";
import { appendComment } from "../../modules/comment";
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

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, questionId]);

  useEffect(() => {
    if (comments) {
      comments.$values.forEach((comment) => {
        if (comment.$id) {
          console.log({ id: comment.$id, comment });
          // 멤버 추가
          if (comment.member.$id) {
            const { memberId, memberName, mailAddress } = comment.member;
            dispatch(
              appendMember({
                id: memberId,
                member: { memberId, memberName, mailAddress },
              })
            );
          }
          const { commentId, memberId, createdAt, depth, content } = comment;
          dispatch(
            appendComment({
              id: comment.$id,
              comment: { commentId, memberId, createdAt, depth, content },
            })
          );
          comment.member.comments.$values.forEach((nestedComment) => {
            if (nestedComment.$id) {
              console.log({ id: nestedComment.$id, comment: nestedComment });
              const { commentId, memberId, createdAt, depth, content } =
                nestedComment;
              dispatch(
                appendComment({
                  id: nestedComment.$id,
                  comment: { commentId, memberId, createdAt, depth, content },
                })
              );
            }
          });
        }
      });
    }
  }, [comments]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;

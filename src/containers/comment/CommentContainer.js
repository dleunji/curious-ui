import CommentList from "../../components/comment/CommentList";
import {
  appendComment,
  changeField,
  listComments,
  writeComment,
  writeReply,
} from "../../modules/comment";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router";

const CommentContainer = () => {
  const { commentBox, user, post, comments, members, comment, reply } =
    useSelector(({ comment, user, post }) => ({
      commentBox: comment.commentBox,
      user: user.user,
      post: post.post,
      comments: comment.comments,
      members: comment.member,
      comment: comment.comment,
      reply: comment.reply,
    }));

  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => {
      console.log(payload);
      dispatch(changeField({ key: "commentBox", value: payload.target.value }));
    },
    [dispatch]
  );

  // 댓글 등록
  const onPostComment = (e) => {
    e.preventDefault();
    if (user.memberId) {
      const { memberId } = user;
      dispatch(
        writeComment({
          content: commentBox,
          memberId,
          questionId: post.questionId,
        })
      );
    }
  };

  // 답글 등록
  const onPostReply = (e, parentCommentId, content) => {
    e.preventDefault();
    if (user.memberId) {
      const { memberId } = user;
      dispatch(
        writeReply({
          content,
          memberId,
          questionId: post.questionId,
          parentCommentId,
        })
      );
    }
  };

  useEffect(() => {
    if (comment || reply) {
      window.location.reload();
    }
  }, [comment, reply]);

  return (
    <CommentList
      onChangeField={onChangeField}
      commentBox={commentBox}
      onPostComment={onPostComment}
      comments={comments}
      onPostReply={onPostReply}
      members={members}
      user={user}
    />
  );
};

export default CommentContainer;

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

const CommentContainer = () => {
  const { commentBox, memberId, post, comments, members } = useSelector(
    ({ comment, user, post }) => ({
      commentBox: comment.commentBox,
      memberId: user.user.memberId,
      post: post.post,
      comments: comment.comments,
      members: comment.member,
    })
  );
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
    dispatch(
      writeComment({
        content: commentBox,
        memberId,
        questionId: post.questionId,
      })
    );
  };

  // 답글 등록
  const onPostReply = (e, parentCommentId, content) => {
    e.preventDefault();
    dispatch(
      writeReply({
        content,
        memberId,
        questionId: post.questionId,
        parentCommentId,
      })
    );
  };

  return (
    <CommentList
      onChangeField={onChangeField}
      commentBox={commentBox}
      onPostComment={onPostComment}
      comments={comments}
      onPostReply={onPostReply}
      members={members}
    />
  );
};

export default CommentContainer;

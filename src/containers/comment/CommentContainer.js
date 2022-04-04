import CommentList from "../../components/comment/CommentList";
import {
  appendComment,
  changeField,
  listComments,
  writeComment,
} from "../../modules/comment";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

const CommentContainer = () => {
  const { commentBox, memberId, post, comments, commentDict, memberDict } =
    useSelector(({ comment, user, post }) => ({
      commentBox: comment.commentBox,
      memberId: user.user.memberId,
      post: post.post,
      comments: comment.comments,
      commentDict: comment.commentDict,
      memberDict: comment.memberDict,
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
    dispatch(
      writeComment({
        content: commentBox,
        memberId,
        questionId: post.questionId,
      })
    );
  };

  useEffect(() => {
    console.log(commentDict);
    console.log(memberDict);
  }, [commentDict, memberDict]);

  return (
    <CommentList
      onChangeField={onChangeField}
      commentBox={commentBox}
      onPostComment={onPostComment}
      comments={comments}
      commentDict={commentDict}
      memberDict={memberDict}
    />
  );
};

export default CommentContainer;

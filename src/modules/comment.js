import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as commentAPI from "../lib/api/comment";
import { takeLatest } from "@redux-saga/core/effects";
const CHANGE_FIELD = "comment/CHANGE_FIELD";
const INITIALIZE = "comment/INITIALIZE";
const [WRITE_COMMENT, WRITE_COMMENT_SUCCESS, WRITE_COMMENT_FAILURE] =
  createRequestActionTypes("comment/WRITE_COMMENT");
const [WRITE_REPLY, WRITE_REPLY_SUCCESS, WRITE_REPLY_FAILURE] =
  createRequestActionTypes("comment/WRITE_REPLY");
const [LIST_COMMENTS, LIST_COMMENTS_SUCCESS, LIST_COMMENTS_FAILURE] =
  createRequestActionTypes("comment/LIST_COMMENTS");
const [LIST_MEMBERS, LIST_MEMBERS_SUCCESS, LIST_MEMBERS_FAILURE] =
  createRequestActionTypes("comment/LIST_MEMBERS");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeComment = createAction(
  WRITE_COMMENT,
  ({ memberId, questionId, content }) => ({
    memberId,
    questionId,
    content,
  })
);
export const writeReply = createAction(
  WRITE_REPLY,
  ({ memberId, questionId, content, parentCommentId }) => ({
    memberId,
    questionId,
    content,
    parentCommentId,
  })
);

export const listComments = createAction(
  LIST_COMMENTS,
  (questionId) => questionId
);
export const listMembers = createAction(
  LIST_MEMBERS,
  (questionId) => questionId
);
const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  commentAPI.writeComment
);

const writeReplySaga = createRequestSaga(WRITE_REPLY, commentAPI.writeReply);

const listCommentsSaga = createRequestSaga(
  LIST_COMMENTS,
  commentAPI.listComments
);
const listMembersSaga = createRequestSaga(LIST_MEMBERS, commentAPI.listMembers);

export function* commentSaga() {
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
  yield takeLatest(LIST_COMMENTS, listCommentsSaga);
  yield takeLatest(WRITE_REPLY, writeReplySaga);
  yield takeLatest(LIST_MEMBERS, listMembersSaga);
}

const intialState = {
  commentBox: "",
  comment: null,
  commentError: null,
  // 아이디별로 key-value형식으로 정리
  commentDict: {},
  memberDict: {},
  comments: null,
  reply: null,
  replyError: null,
  member: null,
  memberError: null,
};
const comment = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_COMMENT]: (state) => ({
      ...state,
      comment: null,
      commentError: null,
    }),
    [WRITE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    [WRITE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
    [LIST_COMMENTS]: (state) => ({
      ...state,
      comments: null,
      commentError: null,
    }),
    [LIST_COMMENTS_SUCCESS]: (state, { payload: comments }) => ({
      ...state,
      comments,
    }),
    [LIST_COMMENTS_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
    [WRITE_REPLY]: (state) => ({
      ...state,
      reply: null,
      replyError: null,
    }),
    [WRITE_REPLY_SUCCESS]: (state, { payload: reply }) => ({
      ...state,
      reply,
    }),
    [WRITE_REPLY_FAILURE]: (state, { payload: replyError }) => ({
      ...state,
      replyError,
    }),
    [LIST_MEMBERS]: (state) => ({
      ...state,
      member: null,
      memberError: null,
    }),
    [LIST_MEMBERS_SUCCESS]: (state, { payload: members }) => ({
      ...state,
      member: members.$values,
    }),
    [LIST_MEMBERS_FAILURE]: (state, { payload: memberError }) => ({
      ...state,
      memberError,
    }),
  },
  intialState
);

export default comment;

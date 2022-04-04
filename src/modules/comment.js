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
const [LIST_COMMENTS, LIST_COMMENTS_SUCCESS, LIST_COMMENTS_FAILURE] =
  createRequestActionTypes("comment/LIST_COMMENTS");
const APPEND_COMMENT = "comment/APPEND_COMMENT";
const APPEND_MEMBER = "comment/APPEND_MEMBER";

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
export const appendComment = createAction(APPEND_COMMENT, (comment) => comment);
export const appendMember = createAction(APPEND_MEMBER, (member) => member);
export const listComments = createAction(
  LIST_COMMENTS,
  (questionId) => questionId
);

const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  commentAPI.writeComment
);

const listCommentsSaga = createRequestSaga(
  LIST_COMMENTS,
  commentAPI.listComments
);

export function* commentSaga() {
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
  yield takeLatest(LIST_COMMENTS, listCommentsSaga);
}

const intialState = {
  commentBox: "",
  comment: null,
  commentError: null,
  // 아이디별로 key-value형식으로 정리
  commentDict: {},
  memberDict: {},
  comments: null,
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
    [APPEND_COMMENT]: (state, { payload: { id, comment } }) => ({
      ...state,
      commentDict: { ...state.commentDict, [id]: comment },
    }),
    [APPEND_MEMBER]: (state, { payload: { id, member } }) => ({
      ...state,
      memberDict: { ...state.memberDict, [id]: member },
    }),
  },
  intialState
);

export default comment;

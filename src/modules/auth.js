import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "@redux-saga/core/effects";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const INITIALIZE_AUTH = "auth/INITIALIZE_AUTH";
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");
const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] =
  createRequestActionTypes("auth/SIGNIN");
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const initializeAuth = createAction(INITIALIZE_AUTH);
export const register = createAction(
  REGISTER,
  ({ memberName, mailAddress, password }) => ({
    memberName,
    mailAddress,
    password,
  })
);

export const signin = createAction(SIGNIN, ({ mailAddress, password }) => ({
  mailAddress,
  password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const signinSaga = createRequestSaga(SIGNIN, authAPI.signin);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(SIGNIN, signinSaga);
}

const initialState = {
  register: {
    memberName: "",
    mailAddress: "",
    password: "",
    // passwordConfirm: "",
  },
  signin: {
    mailAddress: "",
    password: "",
  },
  auth: null,
  authError: null,
};

// produce(수정시키고 싶은 객체, 업데이트 함수)
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [INITIALIZE_AUTH]: (state) => ({
      ...state,
      auth: null,
      authError: null,
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;

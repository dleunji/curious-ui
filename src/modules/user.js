import { handleActions, createAction } from "redux-actions";

// 새로고침 이후 임시 로그인 처리
const TEMP_SET_USER = "user/TEMP_SET_USER";

// 회원 정보 확인
const CHECK = "user/CHECK";
const SIGNOUT = "user/SIGNOUT";

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const signout = createAction(SIGNOUT);

const initialState = {
  user: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [SIGNOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);

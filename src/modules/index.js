import { combineReducers } from "redux";
import write from "./write";
import loading from "./loading";
import auth from "./auth";
import { all } from "@redux-saga/core/effects";
import { writeSaga } from "./write";
import { authSaga } from "./auth";
const rootReducer = combineReducers({
  auth,
  write,
  loading,
});

export function* rootSaga() {
  yield all([authSaga(), writeSaga()]);
}

export default rootReducer;

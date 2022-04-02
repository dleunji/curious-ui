import { combineReducers } from "redux";
import write from "./write";
import loading from "./loading";
import { all } from "@redux-saga/core/effects";
import { writeSaga } from "./write";
const rootReducer = combineReducers({
  write,
  loading,
});

export function* rootSaga() {
  yield all([writeSaga()]);
}

export default rootReducer;

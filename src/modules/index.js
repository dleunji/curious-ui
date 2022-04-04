import { combineReducers } from 'redux';
import write from './write';
import loading from './loading';
import auth from './auth';
import user from './user';
import category, { getCategorySaga } from './category';
import comment, { commentSaga } from './comment';
import posts, { postsSaga } from './posts';
import post, { postSaga } from './post';
import { all } from '@redux-saga/core/effects';
import { writeSaga } from './write';
import { authSaga } from './auth';
const rootReducer = combineReducers({
  auth,
  write,
  loading,
  user,
  category,
  posts,
  post,
  comment,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    writeSaga(),
    getCategorySaga(),
    postsSaga(),
    postSaga(),
    commentSaga(),
  ]);
}

export default rootReducer;

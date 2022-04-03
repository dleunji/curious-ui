import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "@redux-saga/core/effects";
import * as categoryAPI from "../lib/api/category";

const [
  INITIALIZE_CATEGORY,
  INITIALIZE_CATEGORY_SUCCESS,
  INITIALIZE_CATEGORY_FAILURE,
] = createRequestActionTypes("category/INITIALIZE_CATEGORY");
const CHANGE_CATEGORY = "category/CHANGE_CATEGORY";

export const initializeCategory = createAction(
  INITIALIZE_CATEGORY,
  (categories) => categories
);
export const changeCategory = createAction(
  CHANGE_CATEGORY,
  ({ type, idx }) => ({
    type,
    idx,
  })
);

const initialState = {
  categories: null,
  categoriesError: null,
  selection: {
    large: null,
    middle: null,
    small: null,
  },
};

const categorySaga = createRequestSaga(
  INITIALIZE_CATEGORY,
  categoryAPI.getCategory
);

export function* getCategorySaga() {
  yield takeLatest(INITIALIZE_CATEGORY, categorySaga);
}

const category = handleActions(
  {
    [INITIALIZE_CATEGORY]: (state) => initialState,
    [INITIALIZE_CATEGORY_SUCCESS]: (state, { payload: categories }) => ({
      ...state,
      categories,
    }),
    [INITIALIZE_CATEGORY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      categoriesError: error,
    }),
    [CHANGE_CATEGORY]: (state, { payload: { type, idx } }) => ({
      ...state,
      selection: { ...state.selection, [type]: idx },
    }),
  },
  initialState
);

export default category;

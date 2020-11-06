import { all } from "redux-saga/effects";
import watchAsync from "./saga";

export default function* rootSaga() {
  yield all([watchAsync()]);
}
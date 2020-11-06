import { takeEvery, put } from "redux-saga/effects";

function* status() {
    let statusf = yield fetch("http://18.212.99.206:8000/");
    let status = yield statusf.json();
    yield put({type:"STATUS_FETCHED", payload:status})
}

export default function* watchAsync() {
    yield takeEvery("FETCH_STATUS", status);
}
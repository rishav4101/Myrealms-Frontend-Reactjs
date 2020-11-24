import { takeEvery, put } from "redux-saga/effects";

function* status() {
    let statusf = yield fetch(`http://54.226.73.115:8000/`);
    let status = yield statusf.json();
    yield put({ type: "STATUS_FETCHED", payload: status })
}

function* signup(action) {
    console.log("activated reducer");
    let response = yield fetch(`http://54.226.73.115:8000/user/`, {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: action.payload
    }).then((resp) => resp.json());
    let res = yield response;
    console.log(res);
    yield put({ type: "SIGNUP", payload: res })
}

export default function* watchAsync() {
    yield takeEvery("FETCH_STATUS", status);
    yield takeEvery("SIGNUP_USER", signup);
}
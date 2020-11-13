import { takeEvery, put } from "redux-saga/effects";

function* status() {
    let statusf = yield fetch("http://18.212.99.206:8000/");
    let status = yield statusf.json();
    yield put({ type: "STATUS_FETCHED", payload: status })
}


function* signup(action) {
    let statusf = yield fetch("http://18.212.99.206:8000/user/", {
        method: "POST",
        mode:"cors",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: action.payload
    }).then((resp) => resp.json());
    let status = yield statusf;
    yield put({ type: "SIGNUP", payload: status })
}



export default function* watchAsync() {
    yield takeEvery("FETCH_STATUS", status);
    yield takeEvery("SIGNUP_USER", signup);


}
import { takeLatest } from 'redux-saga/effects';
import actions from '../actionTypes';

import signupUser from './signupUser';


export default function* saga() {
    yield takeLatest(actions.SIGNUP_USER, signupUser);
}
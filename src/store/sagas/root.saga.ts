import {all} from 'redux-saga/effects'
import {authSaga} from "./auth.saga";
import {carSaga} from "./car.saga";
import {profileSaga} from "./profile.saga";

export function* rootSaga() {
    yield all([
        authSaga(),
        carSaga(),
        profileSaga()
    ])
}
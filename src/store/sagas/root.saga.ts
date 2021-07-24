import {all} from 'redux-saga/effects'
import {authSaga} from "./auth.saga";
import {carSaga} from "./car.saga";
import {userSaga} from "./user.saga";
import {subsSaga} from "./subs.saga";
import {searchSaga} from "./search.saga";

export function* rootSaga() {
    yield all([
        authSaga(),
        carSaga(),
        userSaga(),
        subsSaga(),
        searchSaga()
    ])
}
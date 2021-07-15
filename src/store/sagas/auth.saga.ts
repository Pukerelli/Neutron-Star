import {all, call, put, takeEvery} from "redux-saga/effects";
import {Auth} from "../../API/auth-api";
import * as types from '../saga.actionTypes'
import {AUTH_REG} from '../saga.actionTypes'
import {IResponse, IUser} from "../../common/interfaces/common-interfaces/index.interface";
import {
    authErrorAction,
    authFailedAction,
    authLoadingAction,
    authLoginAction,
    authRegAction,
    authSucceedAction
} from "../actions/auth.action";
import {setStorage} from "../../common/functions";
import {profileUserSucceedAction} from "../actions/profile.action";

///// AUTH ME
function* watchAuthMe() {
    yield takeEvery(types.AUTH_ME, authMe)
}

function* authMe() {
    try {
        const response: IResponse<IUser> = yield call(Auth.getAuth)
        if (!response.error) {
            if (response.token)
                setStorage('token', response.token)
            yield put(authSucceedAction(response.data.username))
            yield put(profileUserSucceedAction(response.data))
        } else {
            yield put(authFailedAction(response.error))
        }
    } catch (e) {
        yield put(authErrorAction(e))
    }
}

///// LOGIN
function* watchLogin() {
    yield takeEvery(types.AUTH_LOGIN, login)
}

function* login({payload}: ReturnType<typeof authLoginAction>) {
    try {
        yield put(authLoadingAction())
        const response: IResponse<string> = yield call(Auth.postLogin, payload)
        yield authHandler(response)
    } catch (e) {
        yield put(authErrorAction(e))
    }
}

///// REGISTRATION
function* watchReg() {
    yield takeEvery(AUTH_REG, registration)
}

function* registration({payload}: ReturnType<typeof authRegAction>) {
    try {
        yield put(authLoadingAction())
        const response: IResponse<string> = yield call(Auth.postRegistration, payload)
        yield authHandler(response)
    } catch (e) {
        yield put(authErrorAction(e))
    }
}

///// HANDLE FOR COMMON CASES
function* authHandler(response: IResponse<string>) {
    if (!response.error) {
        if (response.token)
            setStorage('token', response.token)
        yield put(authSucceedAction(response.data))
    } else {
        yield put(authErrorAction(response.error))
    }
}

///// EXPORT SAGA TO ROOT
export function* authSaga() {
    yield all([
        watchAuthMe(),
        watchLogin(),
        watchReg()
    ])
}
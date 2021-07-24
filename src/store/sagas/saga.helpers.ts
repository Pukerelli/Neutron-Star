import {IAction, IResponse} from "../../common/interfaces/index.interface";
import {call, put} from "redux-saga/effects";
import {listErrorAction, listFetchingAction} from "../actions/list.action";
import {setStorage} from "../../common/functions";
import {authErrorAction, authSucceedAction} from "../actions/auth.action";
import {carErrorAction, carFetchingAction} from "../actions/car.action";
import {userErrorAction, userFetchingAction} from "../actions/user.action";


///// R - request type, D - return data type

///// LIST HELPER

export function* listHelper<R, D>(api: (data: R) => Promise<IResponse<D>>, request: R, action: IAction<D>, fetch = false) {
    if (fetch)
        yield put(listFetchingAction())
    const response: IResponse<D> = yield call(api, request)
    if (!response.error) {
        if (action)
            yield put(action(response.data))
    } else {
        yield put(listErrorAction(response.error))
    }

}

///// AUTH HELPER

export function* authHelper(response: IResponse<string>) {
    if (!response.error) {
        if (response.token)
            setStorage('token', response.token)
        yield put(authSucceedAction(response.data))
    } else {
        yield put(authErrorAction(response.error))
    }
}

/////  CAR HELPER

export function* carHelper<R, D>(api: (data: R) => Promise<IResponse<D>>,
                                 request: R, action?: IAction<D>, additionalAction?: IAction<D>, fetch = true) {
    if (fetch)
        yield put(carFetchingAction())
    const response: IResponse<D> = yield call(api, request)
    if (!response.error) {
        if (action)
            yield put(action(response.data))
    } else {
        yield put(carErrorAction(response.error))
    }
    if (additionalAction) {
        yield put(additionalAction(response.data))
    }
}

///// USER HELPER

export function* userHelper<R, D>(api: (data: R) => Promise<IResponse<D>>, request: R, action: IAction<D>, fetch = true) {
    if (fetch)
        yield put(userFetchingAction())
    const response: IResponse<D> = yield call(api, request)
    if (!response.error) {
        yield put(action(response.data))
    } else {
        yield put(userErrorAction(response.error))
    }
}
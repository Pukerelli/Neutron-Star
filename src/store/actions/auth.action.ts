import {AUTH_LOGIN, AUTH_ME, AUTH_REG} from "../saga.actionTypes";
import {createAction} from "@reduxjs/toolkit";
import {IError, ILogin, IReg} from "../../common/interfaces/index.interface";
import {
    AUTH_CLEAR_ERRORS,
    AUTH_ERROR,
    AUTH_LOADING,
    AUTH_LOGOUT,
    AUTH_ME_FAILED,
    AUTH_ME_SUCCEED
} from "../reducers/auth/auth.reducerActionTypes";

///// SAGA
export const authMeAction = createAction<undefined>(AUTH_ME)
export const authLoginAction = createAction<ILogin>(AUTH_LOGIN)
export const authRegAction = createAction<IReg>(AUTH_REG)

///// REDUCER

export const authLogoutAction = createAction<undefined>(AUTH_LOGOUT)
export const authLoadingAction = createAction<undefined>(AUTH_LOADING)
export const authSucceedAction = createAction<string>(AUTH_ME_SUCCEED)
export const authFailedAction = createAction<undefined>(AUTH_ME_FAILED)
export const authErrorAction = createAction<IError>(AUTH_ERROR)
export const authClearErrorsAction = createAction<undefined>(AUTH_CLEAR_ERRORS)







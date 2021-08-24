import {createAction} from "@reduxjs/toolkit";
import {USER_PROFILE, USER_UPDATE, USER_UPDATE_PHOTO} from "../saga.actionTypes";
import {IUpdateAvatar, IUpdateUser} from "../../API/user.api";
import {
    USER_ERROR,
    USER_FETCHING,
    USER_PROFILE_SUCCEED,
    USER_UPDATE_PHOTO_SUCCEED
} from "../reducers/user/user.reducerActionTypes";
import {IError, IUser} from "../../common/interfaces/index.interface";

///// SAGA
export const userProfileAction = createAction<string>(USER_PROFILE)
export const userUpdateAction = createAction<IUpdateUser>(USER_UPDATE)
export const userUpdatePhotoAction = createAction<IUpdateAvatar>(USER_UPDATE_PHOTO)

///// REDUCER
export const userProfileSucceedAction = createAction<IUser>(USER_PROFILE_SUCCEED)
export const userUpdatePhotoSucceedAction = createAction<IUpdateAvatar>(USER_UPDATE_PHOTO_SUCCEED)
export const userFetchingAction = createAction<undefined>(USER_FETCHING)
export const userErrorAction = createAction<IError>(USER_ERROR)









import {createAction} from "@reduxjs/toolkit";
import {PROFILE_PHOTO, PROFILE_UPDATE, PROFILE_USER} from "../saga.actionTypes";
import {IUpdateData} from "../../API/profile.api";
import {
    PROFILE_ERROR,
    PROFILE_FETCHING,
    PROFILE_PHOTO_SUCCEED,
    PROFILE_USER_SUCCEED
} from "../reducers/profile/profile.reducerActionTypes";
import {IError, IUser} from "../../common/interfaces/common-interfaces/index.interface";

///// SAGA
export const profileUserAction = createAction<string>(PROFILE_USER)
export const profileUpdateAction = createAction<IUpdateData>(PROFILE_UPDATE)
export const profilePhotoAction = createAction<{ data: string }>(PROFILE_PHOTO)


///// REDUCER
export const profileUserSucceedAction = createAction<IUser>(PROFILE_USER_SUCCEED)
export const profilePhotoSucceedAction = createAction<string>(PROFILE_PHOTO_SUCCEED)
export const profileFetchingAction = createAction<undefined>(PROFILE_FETCHING)
export const profileErrorAction = createAction<IError>(PROFILE_ERROR)








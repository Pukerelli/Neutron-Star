import {createAction} from "@reduxjs/toolkit";
import {
    PROFILE_FOLLOW,
    PROFILE_PHOTO, PROFILE_SEARCH,
    PROFILE_UNFOLLOW,
    PROFILE_UPDATE,
    PROFILE_USER,
    PROFILE_FOLLOWED
} from "../saga.actionTypes";
import {IUpdateData} from "../../API/profile.api";
import {
    PROFILE_ERROR,
    PROFILE_FETCHING,
    PROFILE_FOLLOW_SUCCEED,
    PROFILE_PHOTO_SUCCEED,
    PROFILE_UNFOLLOW_SUCCEED,
    PROFILE_USER_SUCCEED,
    PROFILE_USERS_SUCCEED
} from "../reducers/profile/profile.reducerActionTypes";
import {IError, IUser} from "../../common/interfaces/common-interfaces/index.interface";

///// SAGA
export const profileUserAction = createAction<string>(PROFILE_USER)
export const profileUpdateAction = createAction<IUpdateData>(PROFILE_UPDATE)
export const profilePhotoAction = createAction<{ data: string }>(PROFILE_PHOTO)
export const profileFollowedUsersAction = createAction<undefined>(PROFILE_FOLLOWED)
export const profileSearchAction = createAction<string>(PROFILE_SEARCH)
export const profileFollowAction = createAction<{ payload: string }>(PROFILE_FOLLOW)
export const profileUnfollowAction = createAction<{ payload: string }>(PROFILE_UNFOLLOW)



///// REDUCER
export const profileUserSucceedAction = createAction<IUser>(PROFILE_USER_SUCCEED)
export const profilePhotoSucceedAction = createAction<string>(PROFILE_PHOTO_SUCCEED)
export const profileFetchingAction = createAction<undefined>(PROFILE_FETCHING)
export const profileErrorAction = createAction<IError>(PROFILE_ERROR)
export const profileUsersSucceedAction = createAction<Array<IUser>>(PROFILE_USERS_SUCCEED)
export const profileFollowSucceedAction = createAction<IUser>(PROFILE_FOLLOW_SUCCEED)
export const profileUnfollowSucceedAction = createAction<string>(PROFILE_UNFOLLOW_SUCCEED)








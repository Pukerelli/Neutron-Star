import {createAction} from "@reduxjs/toolkit";
import {
    LIST_CAR_FOLLOW,
    LIST_SEARCH_CARS,
    LIST_SUBS_CAR_UNFOLLOW,
    LIST_SUBS_CARS,
    LIST_USER_FOLLOW,
    LIST_SEARCH_USERS,
    LIST_SUBS_USER_UNFOLLOW,
    LIST_SUBS_USERS,
    LIST_USER_UNFOLLOW,
    LIST_CAR_UNFOLLOW
} from "../saga.actionTypes";
import {
    LIST_CARS_SUCCEED,
    LIST_ERROR,
    LIST_FETCHING,
    LIST_FILTER_SUCCEED,
    LIST_REPLACE_SUCCEED, LIST_UNMOUNT,
    LIST_USERS_SUCCEED
} from "../reducers/list/list.reducerActionTypes";
import {ICar, IError, IUser} from "../../common/interfaces/index.interface";

///// SAGA
export const searchCarAction = createAction<string>(LIST_SEARCH_CARS)
export const searchUserAction = createAction<string>(LIST_SEARCH_USERS)
export const subsUsersFollowedAction = createAction<string>(LIST_SUBS_USERS)
export const subsCarsFollowedAction = createAction<string>(LIST_SUBS_CARS)
export const listFollowUserAction = createAction<{ payload: string }>(LIST_USER_FOLLOW)
export const listFollowCarAction = createAction<{ payload: string }>(LIST_CAR_FOLLOW)
export const listUnfollowUserAction = createAction<{ payload: string }>(LIST_USER_UNFOLLOW)
export const listUnfollowCarAction = createAction<{ payload: string }>(LIST_CAR_UNFOLLOW)
export const subsUnfollowUserAction = createAction<{ payload: string }>(LIST_SUBS_USER_UNFOLLOW)
export const subsUnfollowCarAction = createAction<{ payload: string }>(LIST_SUBS_CAR_UNFOLLOW)

///// REDUCER
export const listFetchingAction = createAction<undefined>(LIST_FETCHING)
export const listUsersSucceedAction = createAction<Array<IUser>>(LIST_USERS_SUCCEED)
export const listCarsSucceedAction = createAction<Array<ICar>>(LIST_CARS_SUCCEED)
export const listFilterSucceedAction = createAction<ICar | IUser>(LIST_FILTER_SUCCEED)
export const listReplaceSucceedAction = createAction<ICar | IUser>(LIST_REPLACE_SUCCEED)
export const listUnmountAction = createAction<undefined>(LIST_UNMOUNT)
export const listErrorAction = createAction<IError>(LIST_ERROR)








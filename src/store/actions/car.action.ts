import {createAction} from "@reduxjs/toolkit";
import {
    CAR_ADD,
    CAR_CURRENT,
    CAR_DELETE,
    CAR_FOLLOW,
    CAR_FOLLOWED,
    CAR_GARAGE,
    CAR_PHOTO,
    CAR_SEARCH,
    CAR_UNFOLLOW,
    CAR_UPDATE
} from "../saga.actionTypes";
import {INewCar, IUpdateCar, IUploadPhoto} from "../../API/car.api";
import {
    CAR_CARS_SUCCEED,
    CAR_CURRENT_SUCCEED,
    CAR_ERROR,
    CAR_FETCHING,
    CAR_FILTER_SUCCEED,
    CAR_NOTE_PULL_SUCCEED,
    CAR_NOTE_PUSH_SUCCEED,
    CAR_PUSH_SUCCEED,
    CAR_REPLACE_SUCCEED
} from "../reducers/cars/car.reducerActionTypes";
import {ICar, IError, INote} from "../../common/interfaces/common-interfaces/index.interface";

///// SAGA
export const carGarageAction = createAction<string>(CAR_GARAGE)
export const carSearchAction = createAction<string>(CAR_SEARCH)
export const carDeleteAction = createAction<string>(CAR_DELETE)
export const carAddAction = createAction<INewCar>(CAR_ADD)
export const carFollowAction = createAction<{carname: string}>(CAR_FOLLOW)
export const carUnfollowAction = createAction<string>(CAR_UNFOLLOW)
export const carFollowedAction = createAction<string>(CAR_FOLLOWED)
export const carCurrentAction = createAction<string>(CAR_CURRENT)
export const carUpdateAction = createAction<IUpdateCar>(CAR_UPDATE)
export const carPhotoAction = createAction<IUploadPhoto>(CAR_PHOTO)


/////REDUCER
export const carFetchingAction = createAction<undefined>(CAR_FETCHING)
export const carCarsSucceedAction = createAction<Array<ICar>>(CAR_CARS_SUCCEED)
export const carCurrentSucceedAction = createAction<ICar>(CAR_CURRENT_SUCCEED)
export const carPushSucceedAction = createAction<ICar>(CAR_PUSH_SUCCEED)
export const carFilterSucceedAction = createAction<ICar>(CAR_FILTER_SUCCEED)
export const carReplaceSucceedAction = createAction<ICar>(CAR_REPLACE_SUCCEED)
export const carErrorAction = createAction<IError>(CAR_ERROR)
export const carNotesPushSucceed = createAction<INote>(CAR_NOTE_PUSH_SUCCEED)
export const carNotesPullSucceed = createAction<number>(CAR_NOTE_PULL_SUCCEED)





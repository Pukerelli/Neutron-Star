import {createAction} from "@reduxjs/toolkit";
import {
    CAR_ADD,
    CAR_CURRENT,
    CAR_CURRENT_NOTE,
    CAR_DELETE,
    CAR_GARAGE,
    CAR_NOTE_PULL,
    CAR_NOTE_PUSH,
    CAR_NOTE_REPLACE,
    CAR_PHOTO,
    CAR_UPDATE
} from "../saga.actionTypes";
import {INewCar, INewNote, IUpdateCar, IUpdateNote, IUploadPhoto} from "../../API/car.api";
import {
    CAR_CARS_SUCCEED,
    CAR_CURRENT_NOTE_SUCCEED,
    CAR_CURRENT_SUCCEED,
    CAR_ERROR,
    CAR_FETCHING,
    CAR_FILTER_SUCCEED,
    CAR_NOTE_PULL_SUCCEED,
    CAR_PUSH_SUCCEED,
    CAR_REPLACE_SUCCEED
} from "../reducers/cars/car.reducerActionTypes";
import {ICar, ICurrentNote, IError} from "../../common/interfaces/index.interface";

///// SAGA
export const carGarageAction = createAction<string>(CAR_GARAGE)
export const carDeleteAction = createAction<string>(CAR_DELETE)
export const carAddAction = createAction<INewCar>(CAR_ADD)
export const carCurrentAction = createAction<string>(CAR_CURRENT)
export const carUpdateAction = createAction<IUpdateCar>(CAR_UPDATE)
export const carPhotoAction = createAction<IUploadPhoto>(CAR_PHOTO)
export const carNotePushAction = createAction<INewNote>(CAR_NOTE_PUSH)
export const carCurrentNoteAction = createAction<string>(CAR_CURRENT_NOTE)
export const carNoteReplaceAction = createAction<IUpdateNote>(CAR_NOTE_REPLACE)
export const carNotePullAction = createAction<{_id: string, car: string }>(CAR_NOTE_PULL)


/////REDUCER
export const carFetchingAction = createAction<undefined>(CAR_FETCHING)
export const carCarsSucceedAction = createAction<Array<ICar>>(CAR_CARS_SUCCEED)
export const carCurrentSucceedAction = createAction<ICar>(CAR_CURRENT_SUCCEED)
export const carPushSucceedAction = createAction<ICar>(CAR_PUSH_SUCCEED)
export const carFilterSucceedAction = createAction<ICar>(CAR_FILTER_SUCCEED)
export const carReplaceSucceedAction = createAction<ICar>(CAR_REPLACE_SUCCEED)
export const carCurrentNoteSucceedAction = createAction<ICurrentNote>(CAR_CURRENT_NOTE_SUCCEED)
export const carNotesPullSucceedAction = createAction<string>(CAR_NOTE_PULL_SUCCEED)
export const carErrorAction = createAction<IError>(CAR_ERROR)





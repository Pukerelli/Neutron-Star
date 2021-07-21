import {all, call, put, takeEvery} from "redux-saga/effects";
import {
    carAddAction,
    carCarsSucceedAction,
    carCurrentAction,
    carCurrentSucceedAction,
    carDeleteAction,
    carErrorAction,
    carFetchingAction,
    carFilterSucceedAction,
    carFollowAction,
    carFollowedAction,
    carGarageAction,
    carNotePullAction,
    carNotePushAction, carNoteReplaceAction,
    carNotesPullSucceedAction, carNotesReplaceSucceedAction,
    carPhotoAction,
    carPushSucceedAction,
    carReplaceSucceedAction,
    carSearchAction,
    carUnfollowAction,
    carUpdateAction
} from "../actions/car.action";
import {IAction, ICar, INote, IResponse} from "../../common/interfaces/common-interfaces/index.interface";
import {Car, INewCar, INewNote, IUpdateCar, IUpdateNote, IUploadPhoto} from "../../API/car.api";
import * as type from '../saga.actionTypes'

///// CAR GARAGE
function* watchCarGarage() {
    yield takeEvery(type.CAR_GARAGE, carGarage)
}

function* carGarage({payload}: ReturnType<typeof carGarageAction>) {
    yield carSuperHandler<string, Array<ICar>>(Car.getCars, payload, carCarsSucceedAction)
}

///// CURRENT CAR
function* watchCarCurrent() {
    yield takeEvery(type.CAR_CURRENT, carCurrent)
}

function* carCurrent({payload}: ReturnType<typeof carCurrentAction>) {
    yield carSuperHandler<string, ICar>(Car.getCurrent, payload, carCurrentSucceedAction)
}

///// CAR ADD
function* watchCarAdd() {
    yield takeEvery(type.CAR_ADD, carAdd)
}

function* carAdd({payload}: ReturnType<typeof carAddAction>) {
    yield carSuperHandler<INewCar, ICar>(Car.postAddCar, payload, carCurrentSucceedAction, carPushSucceedAction)
}

///// CAR UPDATE
function* watchCarUpdate() {
    yield takeEvery(type.CAR_UPDATE, carUpdate)
}

function* carUpdate({payload}: ReturnType<typeof carUpdateAction>) {
    yield carSuperHandler<IUpdateCar, ICar>(Car.putUpdateCar, payload, carCurrentSucceedAction, undefined, false)
}

///// CAR DELETE
function* watchCarDelete() {
    yield takeEvery(type.CAR_DELETE, carDelete)
}

function* carDelete({payload}: ReturnType<typeof carDeleteAction>) {
    yield carSuperHandler<string, ICar>(Car.deleteCar, payload, carFilterSucceedAction, undefined, false)
}

///// CAR PHOTO
function* watchCarPhoto() {
    yield takeEvery(type.CAR_PHOTO, carPhoto)
}

function* carPhoto({payload}: ReturnType<typeof carPhotoAction>) {
    yield carSuperHandler<IUploadPhoto, ICar>(Car.putUpdatePhoto, payload, carCurrentSucceedAction, carReplaceSucceedAction)
}

///// CAR SEARCH
function* watchCarSearch() {
    yield takeEvery(type.CAR_SEARCH, carSearch)
}

function* carSearch({payload}: ReturnType<typeof carSearchAction>) {
    yield carSuperHandler<string, Array<ICar>>(Car.getCarSearch, payload, carCarsSucceedAction)
}

///// CAR FOLLOWED
function* watchCarFollowed() {
    yield takeEvery(type.CAR_FOLLOWED, carFollowed)
}

function* carFollowed({payload}: ReturnType<typeof carFollowedAction>) {
    yield carSuperHandler<string, Array<ICar>>(Car.getFollowedCars, payload, carCarsSucceedAction)
}

///// CAR FOLLOW
function* watchCarFollow() {
    yield takeEvery(type.CAR_FOLLOW, carFollow)
}

function* carFollow({payload}: ReturnType<typeof carFollowAction>) {
    yield carSuperHandler<{ payload: string }, ICar>(Car.postFollowCar, payload, carReplaceSucceedAction, undefined, false)
}

///// CAR UNFOLLOW
function* watchCarUnfollow() {
    yield takeEvery(type.CAR_UNFOLLOW, carUnfollow)
}

function* carUnfollow({payload}: ReturnType<typeof carUnfollowAction>) {
    yield carSuperHandler<{ payload: string }, ICar>(Car.deleteFollowCar, payload, carFilterSucceedAction, undefined, false)
}

///// CAR NOTE PUSH
function* watchCarNotePush() {
    yield takeEvery(type.CAR_NOTE_PUSH, carNotePush)
}

function* carNotePush({payload}: ReturnType<typeof carNotePushAction>) {
    yield carSuperHandler<INewNote, INote>(Car.postNoteCar, payload, undefined, undefined, false)
}

///// CAR NOTE REPLACE
function* watchCarNoteReplace() {
    yield takeEvery(type.CAR_NOTE_REPLACE, carNoteReplace)
}

function* carNoteReplace({payload}: ReturnType<typeof carNoteReplaceAction>) {
    yield carSuperHandler<IUpdateNote, INote>(Car.putUpdateNote, payload, carNotesReplaceSucceedAction)
}

///// CAR NOTE PULL
function* watchCarNotePull() {
    yield takeEvery(type.CAR_NOTE_PULL, carNotePull)
}

function* carNotePull({payload}: ReturnType<typeof carNotePullAction>) {
    yield carSuperHandler<{ _id: string, car: string }, string>(Car.putDeleteNote, payload, carNotesPullSucceedAction, undefined, false)
}

export function* carSaga() {
    yield all([
        watchCarGarage(),
        watchCarCurrent(),
        watchCarAdd(),
        watchCarUpdate(),
        watchCarDelete(),
        watchCarPhoto(),
        watchCarSearch(),
        watchCarFollowed(),
        watchCarFollow(),
        watchCarUnfollow(),
        watchCarNotePush(),
        watchCarNotePull(),
        watchCarNoteReplace()
    ])
}


///// HANDLER FOR COMMON CASES
function* carHandler<T>(response: IResponse<T>, action?: IAction<T>) {
    if (!response.error) {
        if (action)
            yield put(action(response.data))
    } else {
        yield put(carErrorAction(response.error))
    }
}

///// HANDLER FOR MOST CASES
///// R - request type, D - return data type

function* carSuperHandler<R, D>(api: (data: R) => Promise<IResponse<D>>,
                                request: R, action?: IAction<D>, additionalAction?: IAction<D>, fetch = true) {
    if (fetch)
        yield put(carFetchingAction())
    const response: IResponse<D> = yield call(api, request)
    yield carHandler<D>(response, action)

    if (additionalAction) {
        yield put(additionalAction(response.data))
    }
}



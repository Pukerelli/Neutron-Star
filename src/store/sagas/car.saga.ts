import {all, takeEvery} from "redux-saga/effects";
import {
    carAddAction,
    carAddingAction,
    carCarsSucceedAction,
    carCurrentAction,
    carCurrentNoteAction,
    carCurrentNoteSucceedAction,
    carCurrentSucceedAction,
    carDeleteAction,
    carFilterSucceedAction,
    carGarageAction,
    carNotePullAction,
    carNotePushAction,
    carNoteReplaceAction,
    carNotesPullSucceedAction,
    carPhotoAction,
    carReplaceSucceedAction,
    carUpdateAction
} from "../actions/car.action";
import {ICar, ICurrentNote} from "../../common/interfaces/index.interface";
import {Car, INewNote, IUpdateCar, IUpdateNote, IUploadPhoto} from "../../API/car.api";
import * as type from '../saga.actionTypes'
import {carHelper} from "./saga.helpers";

///// GET USER CARS
function* watchCarGarage() {
    yield takeEvery(type.CAR_GARAGE, carGarage)
}

function* carGarage({payload}: ReturnType<typeof carGarageAction>) {
    yield carHelper<string, Array<ICar>>(Car.getCars, payload, carCarsSucceedAction)
}

///// GET CURRENT CAR
function* watchCarCurrent() {
    yield takeEvery(type.CAR_CURRENT, carCurrent)
}

function* carCurrent({payload}: ReturnType<typeof carCurrentAction>) {
    yield carHelper<string, ICar>(Car.getCurrentCar, payload, carCurrentSucceedAction)
}

///// ADD CAR
function* watchCarAdd() {
    yield takeEvery(type.CAR_ADD, carAdd)
}

function* carAdd({payload}: ReturnType<typeof carAddAction>) {
    yield carHelper<IUpdateCar, boolean>(Car.postAddCar, payload, carAddingAction)
}

///// UPDATE CAR INFO
function* watchCarUpdate() {
    yield takeEvery(type.CAR_UPDATE, carUpdate)
}

function* carUpdate({payload}: ReturnType<typeof carUpdateAction>) {
    yield carHelper<IUpdateCar, ICar>(Car.putUpdateCar, payload, carCurrentSucceedAction, undefined, false)
}

///// DELETE CAR
function* watchCarDelete() {
    yield takeEvery(type.CAR_DELETE, carDelete)
}

function* carDelete({payload}: ReturnType<typeof carDeleteAction>) {
    yield carHelper<string, ICar>(Car.deleteCar, payload, carFilterSucceedAction, undefined, false)
}

///// UPDATE CAR PHOTO
function* watchCarPhoto() {
    yield takeEvery(type.CAR_PHOTO, carPhoto)
}

function* carPhoto({payload}: ReturnType<typeof carPhotoAction>) {
    yield carHelper<IUploadPhoto, ICar>(Car.putUpdateCarPhoto, payload, carCurrentSucceedAction, carReplaceSucceedAction)
}

///// GET CURRENT NOTE
function* watchCarCurrentNote() {
    yield takeEvery(type.CAR_CURRENT_NOTE, carCurrentNote)
}

function* carCurrentNote({payload}: ReturnType<typeof carCurrentNoteAction>) {
    yield carHelper<string, ICurrentNote>(Car.getNote, payload, carCurrentNoteSucceedAction)
}


///// ADD CAR NOTE
function* watchCarNotePush() {
    yield takeEvery(type.CAR_NOTE_PUSH, carNotePush)
}

function* carNotePush({payload}: ReturnType<typeof carNotePushAction>) {
    yield carHelper<INewNote, boolean>(Car.postNoteCar, payload, carAddingAction, undefined, false)
}

///// UPDATE CAR NOTE
function* watchCarNoteReplace() {
    yield takeEvery(type.CAR_NOTE_REPLACE, carNoteReplace)
}

function* carNoteReplace({payload}: ReturnType<typeof carNoteReplaceAction>) {
    yield carHelper<IUpdateNote, ICurrentNote>(Car.putUpdateNote, payload, carCurrentNoteSucceedAction)
}

///// DELETE CAR NOTE
function* watchCarNotePull() {
    yield takeEvery(type.CAR_NOTE_PULL, carNotePull)
}

function* carNotePull({payload}: ReturnType<typeof carNotePullAction>) {
    yield carHelper<{ _id: string, car: string }, string>(Car.putDeleteNote, payload, carNotesPullSucceedAction, undefined, false)
}

export function* carSaga() {
    yield all([
        watchCarGarage(),
        watchCarCurrent(),
        watchCarAdd(),
        watchCarUpdate(),
        watchCarDelete(),
        watchCarPhoto(),
        watchCarNotePush(),
        watchCarCurrentNote(),
        watchCarNotePull(),
        watchCarNoteReplace()
    ])
}



import {all, takeEvery} from "redux-saga/effects";
import * as type from '../saga.actionTypes'
import {
    userUpdatePhotoAction,
    userUpdatePhotoSucceedAction,
    userUpdateAction,
    userProfileAction,
    userProfileSucceedAction
} from "../actions/user.action";
import {IUpdateData, User} from "../../API/user.api";
import {IUser} from "../../common/interfaces/index.interface";
import {userHelper} from "./saga.helpers";


///// GET USER PROFILE
function* watchUserProfile() {
    yield takeEvery(type.USER_PROFILE, userProfile)
}

function* userProfile({payload}: ReturnType<typeof userProfileAction>) {
    yield userHelper<string, IUser>(User.getUser, payload, userProfileSucceedAction)
}

///// UPDATE USER PROFILE
function* watchUserUpdate() {
    yield takeEvery(type.USER_UPDATE, userUpdate)
}

function* userUpdate({payload}: ReturnType<typeof userUpdateAction>) {
    yield userHelper<IUpdateData, IUser>(User.putUpdateUser, payload, userProfileSucceedAction)
}

///// UPDATE USER PHOTO
function* watchUserUpdatePhoto() {
    yield takeEvery(type.USER_UPDATE_PHOTO, userUpdatePhoto)
}

function* userUpdatePhoto({payload}: ReturnType<typeof userUpdatePhotoAction>) {
    yield userHelper<{ data: string }, string>(User.postUpdateUserPhoto, payload, userUpdatePhotoSucceedAction)
}


export function* userSaga() {
    yield all([
        watchUserProfile(),
        watchUserUpdatePhoto(),
        watchUserUpdate(),
    ])
}

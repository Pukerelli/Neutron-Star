import {all, call, put, takeEvery} from "redux-saga/effects";
import * as type from '../saga.actionTypes'
import {
    profileErrorAction,
    profileFetchingAction, profilePhotoAction, profilePhotoSucceedAction, profileUpdateAction,
    profileUserAction,
    profileUserSucceedAction
} from "../actions/profile.action";
import {IUpdateData, Profile} from "../../API/profile.api";
import {IAction, IResponse, IUser} from "../../common/interfaces/common-interfaces/index.interface";


///// GET USERS
function* watchProfileUser() {
    yield takeEvery(type.PROFILE_USER, fetchUser)
}

function* fetchUser({payload}: ReturnType<typeof profileUserAction>) {
    yield profileHandler<string, IUser>(Profile.getUser, payload, profileUserSucceedAction)
}

///// UPDATE USER DATA
function* watchProfileUpdate() {
    yield takeEvery(type.PROFILE_UPDATE, profileUpdate)
}

function* profileUpdate({payload}: ReturnType<typeof profileUpdateAction>) {
    yield profileHandler<IUpdateData, IUser>(Profile.postUpdateUser, payload, profileUserSucceedAction)
}

///// UPDATE USER PHOTO
function* watchProfilePhoto() {
    yield takeEvery(type.PROFILE_PHOTO, profilePhoto)
}

function* profilePhoto({payload}: ReturnType<typeof profilePhotoAction>) {
    yield profileHandler<{ data: string }, string>(Profile.postUpdatePhoto, payload, profilePhotoSucceedAction)
}

///// EXPORT TO ROOT
export function* profileSaga() {
    yield all([
        watchProfileUser(),
        watchProfilePhoto(),
        watchProfileUpdate()

    ])
}

///// HANDLER FOR COMMON CASES
///// R - request type, D - return data type
function* profileHandler<R, D>(api: (data: R) => Promise<IResponse<D>>, request: R, action: IAction<D>) {
    try {
        yield put(profileFetchingAction())
        const response: IResponse<D> = yield call(api, request)
        if (!response.error) {
            yield put(action(response.data))
        } else {
            yield put(profileErrorAction(response.error))
        }
    } catch (e) {
        yield put(profileErrorAction(e))
    }
}
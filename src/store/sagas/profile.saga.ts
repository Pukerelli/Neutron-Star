import {all, call, put, takeEvery} from "redux-saga/effects";
import * as type from '../saga.actionTypes'
import {
    profileErrorAction,
    profileFetchingAction,
    profileFollowAction,
    profileFollowSucceedAction,
    profilePhotoAction,
    profilePhotoSucceedAction, profileSearchAction,
    profileUnfollowAction,
    profileUnfollowSucceedAction,
    profileUpdateAction,
    profileUserAction, profileUsersSucceedAction,
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
    yield profileHandler<IUpdateData, IUser>(Profile.putUpdateUser, payload, profileUserSucceedAction)
}

///// UPDATE USER PHOTO
function* watchProfilePhoto() {
    yield takeEvery(type.PROFILE_PHOTO, profilePhoto)
}

function* profilePhoto({payload}: ReturnType<typeof profilePhotoAction>) {
    yield profileHandler<{ data: string }, string>(Profile.postUpdatePhoto, payload, profilePhotoSucceedAction)
}

///// FOLLOWING
function* watchProfileUsers() {
    yield takeEvery(type.PROFILE_FOLLOWED, profileUsers)
}

function* profileUsers() {
    yield profileHandler<undefined, Array<IUser>>(Profile.getFollowing, undefined, profileUsersSucceedAction)
}

///// FOLLOW USER
function* watchProfileFollowUser() {
    yield takeEvery(type.PROFILE_FOLLOW, profileFollowUser)
}

function* profileFollowUser({payload}: ReturnType<typeof profileFollowAction>) {
    yield profileHandler<{ payload: string }, IUser>(Profile.postFollowUser, payload, profileFollowSucceedAction, false)
}

///// UNFOLLOW USER
function* watchProfileUnfollowUser() {
    yield takeEvery(type.PROFILE_UNFOLLOW, profileUnfollowUser)
}

function* profileUnfollowUser({payload}: ReturnType<typeof profileUnfollowAction>) {
    yield profileHandler<{ payload: string }, string>(Profile.putUnfollowUser, payload, profileUnfollowSucceedAction, false)
}

///// SEARCH
function* watchSearchUsers() {
    yield takeEvery(type.PROFILE_SEARCH, profileSearch)
}

function* profileSearch({payload}: ReturnType<typeof profileSearchAction>) {
    yield profileHandler<string, Array<IUser>>(Profile.getSearch, payload, profileUsersSucceedAction)
}

///// EXPORT TO ROOT
export function* profileSaga() {
    yield all([
        watchProfileUser(),
        watchProfilePhoto(),
        watchProfileUpdate(),
        watchProfileUsers(),
        watchProfileFollowUser(),
        watchProfileUnfollowUser(),
        watchSearchUsers()
    ])
}

///// HANDLER FOR COMMON CASES
///// R - request type, D - return data type
function* profileHandler<R, D>(api: (data: R) => Promise<IResponse<D>>, request: R, action: IAction<D>, fetch = true) {
    if (fetch)
        yield put(profileFetchingAction())
    const response: IResponse<D> = yield call(api, request)
    if (!response.error) {
        yield put(action(response.data))
    } else {
        yield put(profileErrorAction(response.error))
    }

}
import {all, takeEvery} from "redux-saga/effects";
import * as type from "../saga.actionTypes";
import {LIST_USER_FOLLOW} from "../saga.actionTypes";
import {ICar, IUser} from "../../common/interfaces/index.interface";
import {Car} from "../../API/car.api";
import {
    listCarsSucceedAction,
    listFilterSucceedAction,
    listFollowCarAction,
    subsCarsFollowedAction,
    subsUsersFollowedAction,
    listFollowUserAction,
    listReplaceSucceedAction,
    subsUnfollowCarAction,
    subsUnfollowUserAction,
    listUsersSucceedAction
} from "../actions/list.action";
import {User} from "../../API/user.api";
import {listHelper} from "./saga.helpers";


///// GET FOLLOWED USERS
function* watchSubsUsersFollowed() {
    yield takeEvery(type.LIST_SUBS_USERS, subsUsersFollowed)
}

function* subsUsersFollowed({payload}: ReturnType<typeof subsUsersFollowedAction>) {
    yield listHelper<string, Array<IUser>>(User.getFollowedUsers, payload, listUsersSucceedAction, true)
}

///// GET FOLLOWED CARS
function* watchSubsCarsFollowed() {
    yield takeEvery(type.LIST_SUBS_CARS, subsCarsFollowed)
}

function* subsCarsFollowed({payload}: ReturnType<typeof subsCarsFollowedAction>) {
    yield listHelper<string, Array<ICar>>(Car.getFollowedCars, payload, listCarsSucceedAction, true)
}

///// FOLLOW
function* watchSubsUserFollow() {
    yield takeEvery(type.LIST_USER_FOLLOW, subsFollow)
}

function* watchSubsCarFollow() {
    yield takeEvery(type.LIST_CAR_FOLLOW, subsFollow)
}

function* subsFollow(action: ReturnType<typeof listFollowUserAction | typeof listFollowCarAction>) {
    if (action.type === LIST_USER_FOLLOW)
        yield listHelper<{ payload: string }, ICar | IUser>(User.postFollowUser, action.payload, listReplaceSucceedAction)
    else
        yield listHelper<{ payload: string }, ICar | IUser>(Car.postFollowCar, action.payload, listReplaceSucceedAction)
}

///// UNFOLLOW WITH FILTER
function* watchSubsUserUnfollow() {
    yield takeEvery(type.LIST_SUBS_USER_UNFOLLOW, subsUnfollow)
}

function* watchSubsCarUnfollow() {
    yield takeEvery(type.LIST_SUBS_CAR_UNFOLLOW, subsUnfollow)
}

function* subsUnfollow(action: ReturnType<typeof subsUnfollowCarAction | typeof subsUnfollowUserAction>) {
    if (action.type === type.LIST_SUBS_USER_UNFOLLOW)
        yield listHelper<{ payload: string }, ICar | IUser>(User.putUnfollowUser, action.payload, listFilterSucceedAction)
    else
        yield listHelper<{ payload: string }, ICar | IUser>(Car.deleteFollowCar, action.payload, listFilterSucceedAction)
}

export function* subsSaga() {
    yield all([
            watchSubsUsersFollowed(),
            watchSubsCarsFollowed(),
            watchSubsUserFollow(),
            watchSubsCarFollow(),
            watchSubsUserUnfollow(),
            watchSubsCarUnfollow()

        ]
    )
}




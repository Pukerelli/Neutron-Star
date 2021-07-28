import {all, takeEvery} from "redux-saga/effects";
import * as type from "../saga.actionTypes";
import {ICar, IUser} from "../../common/interfaces/index.interface";
import {User} from "../../API/user.api";
import {listHelper} from "./saga.helpers";
import {
    listCarsSucceedAction,
    listReplaceSucceedAction,
    listUsersSucceedAction,
    searchCarAction,
    listUnfollowCarAction,
    listUnfollowUserAction,
    searchUserAction
} from "../actions/list.action";
import {Car} from "../../API/car.api";

///// SEARCH USERS
function* watchSearchUsers() {
    yield takeEvery(type.LIST_SEARCH_USERS, userSearch)
}
function* userSearch({payload}: ReturnType<typeof searchUserAction>) {
    yield listHelper<string, Array<IUser>>(User.getSearchUsers, payload, listUsersSucceedAction)
}

///// SEARCH CARS
function* watchSearchCars() {
    yield takeEvery(type.LIST_SEARCH_CARS, carSearch)
}
function* carSearch({payload}: ReturnType<typeof searchCarAction>) {
    yield listHelper<string, Array<ICar>>(Car.getSearchCar, payload, listCarsSucceedAction)
}

///// UNFOLLOW WITH REPLACE
function* watchSearchUserUnfollow() {
    yield takeEvery(type.LIST_USER_UNFOLLOW, searchUnfollow)
}
function* watchSearchCarUnfollow() {
    yield takeEvery(type.LIST_CAR_UNFOLLOW, searchUnfollow)
}
function* searchUnfollow(action: ReturnType<typeof listUnfollowCarAction | typeof listUnfollowUserAction>) {
    if (action.type === type.LIST_USER_UNFOLLOW)
        yield listHelper<{ payload: string }, ICar | IUser>(User.putUnfollowUser, action.payload, listReplaceSucceedAction)
    else
        yield listHelper<{ payload: string }, ICar | IUser>(Car.deleteFollowCar, action.payload, listReplaceSucceedAction)
}

export function* searchSaga() {
    yield all([
        watchSearchUsers(),
        watchSearchCars(),
        watchSearchUserUnfollow(),
        watchSearchCarUnfollow()
        ]
    )
}
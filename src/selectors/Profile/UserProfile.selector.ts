import {RootState} from "../../store";

export const selectUserProfile = (state: RootState) => {
    return state.user.user
}

export  const selectIsFetchingUserData = (state: RootState) => {
    return state.user.isFetching
}
export const selectUserFetchErrors = (state: RootState) => {
    return state.user.error
}
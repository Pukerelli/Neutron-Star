import {RootState} from "../../store";

export const selectUserProfile = (state: RootState) => {
    return state.user.user
}

export  const selectProfileIsFetching = (state: RootState) => {
    return state.user.isFetching
}
export const selectProfileFetchErrors = (state: RootState) => {
    return state.user.error
}
export const selectUsersProfiles = (state: RootState) => {
    return state.user.users
}


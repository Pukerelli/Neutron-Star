import {RootState} from "../../store";

export const selectUserProfile = (state: RootState) => {
    return state.user.user
}
export  const selectUserIsFetching = (state: RootState) => {
    return state.user.isFetching
}
export const selectUserErrors = (state: RootState) => {
    return state.user.error
}

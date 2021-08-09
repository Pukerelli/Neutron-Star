import {RootState} from "../../store";

export const selectUserProfile = (state: RootState) => state.user.user

export const selectUserIsFetching = (state: RootState) => state.user.isFetching

export const selectUserErrors = (state: RootState) => state.user.error

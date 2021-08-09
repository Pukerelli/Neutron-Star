import {RootState} from "../../store";

export const selectAuthUser = (state: RootState) => state.auth.isAuth

export const selectAuthLoading = (state: RootState) => state.auth.loading

export const selectAuthErrors = (state: RootState) => state.auth.error


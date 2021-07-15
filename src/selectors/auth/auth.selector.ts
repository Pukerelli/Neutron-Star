import {RootState} from "../../store";

export const selectAuthUser = (state: RootState) => {
    return state.auth.isAuth
}

export const selectAuthLoading = (state: RootState) => {
    return state.auth.loading
}


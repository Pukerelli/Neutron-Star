import {RootState} from "../../store";

export const selectAuthUser = (state: RootState) => {
    return state.auth.isAuth
}

export const selectLoading = (state: RootState) => {
    return state.auth.loading
}


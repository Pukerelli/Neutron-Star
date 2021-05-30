import {RootState} from "../../store";

export const selectAuthUser = (state: RootState) => {
    return state.auth.user
}
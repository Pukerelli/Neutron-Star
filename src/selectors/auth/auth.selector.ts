import {RootState} from "../../store";

export const AuthUserSelector = (state: RootState) => {
    return state.auth.user
}
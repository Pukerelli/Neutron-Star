import {createAsyncThunk, createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {Auth} from "../../../API/auth-api";
import {IError, ILogin, IReg, IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {AUTH_LOGIN, AUTH_ME, AUTH_REG} from "../../saga.actionTypes";
import {authMeAction} from "../../actions/auth.action";


interface IInitialState {
    loading: 'idle' | 'pending' | 'succeeded',
    error: string | SerializedError | undefined | null
    isAuth: string
}

const initialState: IInitialState = {
    loading: 'idle',
    error: null,
    isAuth: 'unauthorized'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = 'unauthorized'
            localStorage.clear()
        },
        loading: (state) => {
            state.loading = 'pending'
        },
        authSucceed: (state, action: PayloadAction<string>) => {
            state.isAuth = action.payload
            state.loading = 'succeeded'
            state.error = null
        },
        authFailed: (state, action: PayloadAction<IError>) => {
            state.isAuth = 'unauthorized'
            state.loading = 'succeeded'
            state.error = action.payload
        },
        error: (state, action: PayloadAction<IError>) => {
            state.error = action.payload
            state.loading = 'succeeded'
        }
    }
})


export const {} = authSlice.actions
export default authSlice.reducer
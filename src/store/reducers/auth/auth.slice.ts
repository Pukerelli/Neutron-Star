import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IError} from "../../../common/interfaces/index.interface";

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
            state.loading = 'succeeded'
        },
        loading: (state) => {
            state.loading = 'pending'
        },
        auth: (state, action: PayloadAction<string>) => {
            state.isAuth = action.payload
            state.loading = 'succeeded'
            state.error = null
        },
        unauthorized: (state) => {
            state.isAuth = 'unauthorized'
            state.loading = 'succeeded'
            state.error = null
        },
        clearErrors: (state) => {
            state.error = null
        },
        error: (state, action: PayloadAction<IError>) => {
            state.error = action.payload
            state.loading = 'succeeded'
        }
    }
})

export default authSlice.reducer


interface IInitialState {
    loading: 'idle' | 'pending' | 'succeeded',
    error: IError
    isAuth: string
}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {authMe} from "../../../fake-api/login-api";

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth',
    async ({username, password}: {username: string, password: string})  => {
        const response = await authMe(username, password)
        return response
    }
)

interface initialState {
    user: IUser | undefined,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    errors: string
}

const initialState = {
    user: {},
    loading: 'idle',
    errors: ''
} as initialState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = 'succeeded'
        })
        builder.addCase(fetchAuth.pending, (state, action) => {
            state.loading = 'pending'
        })
    }
})

export const {} = authSlice.actions
export default authSlice.reducer
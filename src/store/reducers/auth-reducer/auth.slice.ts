import {createAsyncThunk, createSlice, SerializedError} from "@reduxjs/toolkit";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {AuthAPI} from "../../../API/auth-api";

interface IReg {
    username: string
    password: string
    email: string
}

interface ILogin {
    username: string
    password: string
}


export const fetchLogin = createAsyncThunk<IUser,
    ILogin,
    {
        rejectValue: string
    }>('auth/login', async ({username, password}, thunkApi) => {
    const response = await AuthAPI.login(username, password)
    if (response.code !== 2) {

        return thunkApi.rejectWithValue(response.message)
    }

    return response.user
})
export const fetchRegistration = createAsyncThunk<void, IReg, {
    rejectValue: string
}>('auth/registration', async ({email, username, password}, thunkApi) => {
    const response = await AuthAPI.registration(email, username, password)
    if (response.code !== 2) {
        return thunkApi.rejectWithValue(response.message)
    }
    if (response.code === 2) {
        localStorage.setItem('token', response.token)
        console.log(response.token)
        thunkApi.dispatch(fetchAuth(null))
    }
})

export const fetchAuth = createAsyncThunk<IUser,
    null,
    {
        rejectValue: string
    }>('auth/auth', async (arg, thunkApi) => {
    const response = await AuthAPI.auth()
    if (!(response.code === 2)) {
        return thunkApi.rejectWithValue(response.message)
    }
    return response.user
})


interface IInitialState {
    user: IUser | undefined,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | SerializedError | null
    isAuth: null | string
}

const initialState = {
    user: {},
    loading: 'idle',
    error: null,
    isAuth: null
} as IInitialState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = initialState.user
            state.isAuth = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, {payload}) => {
            state.user = payload
            state.isAuth = payload.username
            state.loading = 'succeeded'
        })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.loading = 'failed'
                if (action.payload) {
                    state.error = action.payload
                } else {
                    state.error = action.error
                }
            })
            .addCase(fetchLogin.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(fetchAuth.fulfilled, (state, {payload}) => {
                state.user = payload
                state.isAuth = payload.username
                state.loading = 'succeeded'
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.loading = 'failed'
                if (action.payload) {
                    state.error = action.payload
                } else {
                    state.error = action.error
                }
            })
            .addCase(fetchAuth.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(fetchRegistration.rejected, (state, action) => {
                state.loading = 'failed'
                if (action.payload) {
                    state.error = action.payload
                } else {
                    state.error = action.error
                }
            })
            .addCase(fetchRegistration.pending, (state, action) => {
                state.loading = 'pending'
            })
    }
})

export const {} = authSlice.actions
export default authSlice.reducer
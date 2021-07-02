import {createAsyncThunk, createSlice, SerializedError} from "@reduxjs/toolkit";
import {Auth} from "../../../API/auth-api";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";

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
    }>('auth/login', async (data, thunkApi) => {
    const response = await Auth.postLogin(data)
    if (response.code === 2) {
        if (response.token)
            localStorage.setItem('token', response.token)
        thunkApi.dispatch({type: 'user/setUser', payload: response.data})

    } else {
        return thunkApi.rejectWithValue(response.message)
    }

    return response.data
})
export const fetchRegistration = createAsyncThunk<void, IReg, {
    rejectValue: string
}>('auth/registration', async (data, thunkApi) => {
    const response = await Auth.postRegistration(data)
    if (response.code !== 2) {
        return thunkApi.rejectWithValue(response.message)
    }
    if (response.code === 2) {
        if (response.token)
            localStorage.setItem('token', response.token)


        thunkApi.dispatch(fetchAuth(null))
    }


})

export const fetchAuth = createAsyncThunk<string,
    null,
    {
        rejectValue: string
    }>('auth/auth', async (arg, thunkApi) => {
    const response = await Auth.getAuth()
    if (response.token) {
        localStorage.setItem('token', response.token)
    }

    if (response.code !== 2)
        return thunkApi.rejectWithValue(response.message)

    thunkApi.dispatch({type: 'user/setUser', payload: response.data})

    return response.data.username
})


interface IInitialState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | SerializedError | null
    isAuth: string
}

const initialState = {
    loading: 'idle',
    error: null,
    isAuth: 'loading'
} as IInitialState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = 'unauthorized'
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, {payload}) => {
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
                state.isAuth = payload
                state.loading = 'succeeded'
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.loading = 'failed'
                state.isAuth = 'unauthorized'
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
            .addCase(fetchRegistration.pending, (state) => {
                state.loading = 'pending'
            })
    }
})


export const {} = authSlice.actions
export default authSlice.reducer
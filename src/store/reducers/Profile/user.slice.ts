import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {IUpdateData, UserAPI, IPayload} from "../../../API/user.api";


interface IInitialState {
    user: IUser
    error: string
    isFetching: boolean
}

const initialState = {
    user: {},
    error: '',
    isFetching: false
} as IInitialState

export const fetchUser = createAsyncThunk<void, string>('/fetchUser',
    async (username, thunkApi) => {
        try {
            thunkApi.dispatch({type: 'user/toggleIsFetching'})
            const response = await UserAPI.get(username)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'user/setUser', payload: response.data})
                thunkApi.dispatch({type: 'user/toggleIsFetching'})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'user/setError', payload: e.message})
        }
    }
)

export const UpdateUser = createAsyncThunk<void, IUpdateData>('/updateUser',
    async (data, thunkApi) => {
        try {
            const response = await UserAPI.update(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'user/setUser', payload: response.data})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'user/setError', payload: e.message})
        }
    })

export const UpdateUserPhoto = createAsyncThunk<void, IPayload<string>>('/updateUser',
    async(payload, thunkApi) => {
    try{
        const response = await UserAPI.updatePhoto(payload)
        if(response.code === 2){
            thunkApi.dispatch({type: 'user/setUser', payload: response.data})
        }
    }catch (e) {
        thunkApi.dispatch({type: 'user/setError', payload: e.message})
    }
    })


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ''
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        toggleIsFetching: (state) => {
            state.isFetching = !state.isFetching
        }
    }
})


export default userSlice.reducer




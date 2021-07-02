import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {IUpdateData, Profile} from "../../../API/user.api";


interface IInitialState {
    user: IUser
    users: Array<IUser>
    error: string
    isFetching: boolean
}



export const fetchUser = createAsyncThunk<void, string>('/fetchUser',
    async (username, thunkApi) => {
        try {
            thunkApi.dispatch({type: 'user/toggleIsFetching'})
            const response = await Profile.getUser(username)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'user/setUser', payload: response.data})
                thunkApi.dispatch({type: 'user/toggleIsFetching'})
                thunkApi.dispatch({type: 'user/clearErrors'})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'user/setError', payload: e.message})
        }
    }
)

export const UpdateUser = createAsyncThunk<void, IUpdateData>('/updateUser',
    async (data, thunkApi) => {
        try {
            const response = await Profile.postUpdateUser(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'user/setUser', payload: response.data})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'user/setError', payload: e.message})
        }
    })
export const UpdateUserPhoto = createAsyncThunk<void, {data: string}>('/updateUser',
    async(data, thunkApi) => {
    try{
        const response = await Profile.postUpdatePhoto(data)
        if(response.code === 2){
            thunkApi.dispatch({type: 'user/setUser', payload: response.data})
        }
    }catch (e) {
        thunkApi.dispatch({type: 'user/setError', payload: e.message})
    }
    })

const initialState = {
    users: [{}],
    user: {},
    error: '',
    isFetching: false
} as IInitialState

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
        },
        clearErrors: (state) => {
            state.error = ''
        },
        setUsers: (state, action: PayloadAction<Array<IUser>>) => {
            state.users = action.payload
        },
        pushUsers: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.username !== action.payload)
        },


    }
})


export default userSlice.reducer




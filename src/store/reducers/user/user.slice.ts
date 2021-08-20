import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IError, IUser} from "../../../common/interfaces/index.interface";
import {IUpdateAvatar} from "../../../API/user.api";

const initialState = {
    users: [{}],
    user: {},
    error: null,
    isFetching: true,
} as IInitialState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetching: (state) => {
            state.isFetching = true
        },
        profile: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isFetching = false
            state.error = null
        },
        updatePhoto: (state, action: PayloadAction<IUpdateAvatar>) => {
            state.user.photo = action.payload.photo
            state.user.backgroundPhoto = action.payload.backgroundPhoto
            state.isFetching = false
            state.error = null
        },
        clear: (state) => {
            state.user = initialState.user
            state.error = null
        },
        error: (state, action: PayloadAction<IError>) => {
            state.error = action.payload
            state.isFetching = false
        }
    }
})

export default userSlice.reducer


interface IInitialState {
    user: IUser
    users: Array<IUser>
    error: IError
    isFetching: boolean
}





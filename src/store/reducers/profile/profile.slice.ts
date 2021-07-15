import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IError, IUser} from "../../../common/interfaces/common-interfaces/index.interface";


interface IInitialState {
    user: IUser
    users: Array<IUser>
    error: IError
    isFetching: boolean
}

const initialState = {
    users: [{}],
    user: {},
    error: null,
    isFetching: true
} as IInitialState

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetching: (state) => {
            state.isFetching = true
        },
        userSucceed: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isFetching = false
            state.error = null
        },
        userPhoto: (state, action: PayloadAction<string>) => {
            state.user.photo = action.payload
            state.isFetching = false
            state.error = null
        },
        error: (state, action: PayloadAction<IError>) => {
            state.error = action.payload
            state.isFetching = false
        }
    }
})


export default profileSlice.reducer




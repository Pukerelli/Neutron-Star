import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {fetchUser} from "../../../fake-api/user.api";

interface initialState {
    user: IUser
    error: string | null
    isFetching: boolean
}
const initialState = {
    user: {},
    error: null,
    isFetching: true
} as initialState


export const getUserData = createAsyncThunk<
    // Return type of the payload creator
    IUser,
    // First argument to the payload creator
    number,
    // Types for ThunkAPI
    {
        rejectValue: string
    }
    >('users/update', async (id, thunkApi) => {
    const response = await fetchUser(id)
    if (response == 'error') {
        // Return the known error for future handling
        return thunkApi.rejectWithValue(response as string)
    }
    return response as IUser
})



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.fulfilled, (state, { payload }) => {
            state.user = payload
            state.isFetching = false
        })
        builder.addCase(getUserData.rejected, (state, action) => {
            if (action.payload) {
                // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
                state.error = action.payload
            } else{
                state.error = 'something went wrong'
            }
        })
        builder.addCase(getUserData.pending, (state) => {
            state.isFetching = true
        })
    },
})



export default userSlice.reducer
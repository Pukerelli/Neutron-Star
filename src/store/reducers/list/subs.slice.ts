import {ICar, IUser} from "../../../common/interfaces/common-interfaces/index.interface";
import {createSlice} from "@reduxjs/toolkit";


interface IInitialState {
    isFetching: boolean
    users: Array<IUser>
    cars: Array<ICar>
}
const initialState = {
    isFetching: false,
    users: [],
    cars: []
} as IInitialState

const subsSlice = createSlice({
    name: 'subs',
    initialState,
    reducers: {

    }
})

export default subsSlice.reducer
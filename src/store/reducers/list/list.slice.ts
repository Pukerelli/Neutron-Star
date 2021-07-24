import {ICar, IError, IUser} from "../../../common/interfaces/index.interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {isCar} from "../../../common/functions";

const initialState = {
    isFetching: false,
    users: [],
    cars: [],
    error: null
} as IInitialState

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        replace: (state, action: PayloadAction<ICar | IUser>) => {
            if (isCar(action.payload)) {
                state.cars[state.cars.findIndex(car => car._id === action.payload._id)] = action.payload
            } else {
                state.users[state.users.findIndex(user => user._id === action.payload._id)] = action.payload
            }
            state.isFetching = false
            state.error = null
        },
        unmount: state => {
            state.cars = []
            state.users = []
        },
        filter: (state, action: PayloadAction<ICar | IUser>) => {
            if (isCar(action.payload)) {
                state.cars = state.cars.filter(car => car._id !== action.payload._id)
            } else {
                state.users = state.users.filter(user => user._id !== action.payload._id)
            }
            state.isFetching = false
            state.error = null
        },
        users: (state, action: PayloadAction<Array<IUser>>) => {
            state.users = action.payload
            state.isFetching = false
            state.error = null
        },
        cars: (state, action: PayloadAction<Array<ICar>>) => {
            state.cars = action.payload
            state.isFetching = false
            state.error = null
        },
        error: (state, action: PayloadAction<IError>) => {
            state.error = action.payload
            state.isFetching = false
        }
    },
})

export default listSlice.reducer


interface IInitialState {
    isFetching: boolean
    users: Array<IUser>
    cars: Array<ICar>
    error: IError
}
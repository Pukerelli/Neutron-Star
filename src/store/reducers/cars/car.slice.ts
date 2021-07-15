import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar, IError, INote} from "../../../common/interfaces/common-interfaces/index.interface";


const initialState = {
    cars: [],
    currentCar: {
        _id: null,
        name: '',
        brand: '',
        model: '',
        owner: '',
        followedBy: [''],
        notes: []
    },
    isFetching: true,
    error: null
} as IInitialState


const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        fetching: (state) => {
            state.isFetching = true
        },
        cars: (state, action: PayloadAction<Array<ICar>>) => {
            state.cars = action.payload
            state.isFetching = false
            state.error = null
        },
        current: (state, action: PayloadAction<ICar>) => {
            state.currentCar = action.payload
            state.isFetching = false
            state.error = null
        },
        push: (state, action: PayloadAction<ICar>) => {
            state.cars.push(action.payload)
            state.isFetching = false
            state.error = null
        },
        pushNote: (state, action: PayloadAction<INote>) => {
            state.currentCar.notes.push(action.payload)
            state.isFetching = false
            state.error = null
        },
        pullNote: (state, action: PayloadAction<number>) => {
            state.currentCar.notes.filter(note => note!._id !== action.payload )
        },
        filter: (state, action: PayloadAction<ICar>) => {
            state.cars = state.cars.filter(car => car.name !== action.payload.name)
            state.isFetching = false
            state.error = null
        },
        replace: (state, action: PayloadAction<ICar>) => {
            state.cars[state.cars.findIndex((car) => car.name === action.payload.name)] = action.payload
            state.isFetching = false
            state.error = null
        },
        error: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isFetching = false
        }

    }
})


export default carSlice.reducer


interface IInitialState {
    cars: Array<ICar>
    error: IError
    currentCar: ICar
    isFetching: boolean

}
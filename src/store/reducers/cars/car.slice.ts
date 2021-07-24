import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar, IError, INote} from "../../../common/interfaces/index.interface";


const initialState = {
    cars: [],
    currentCar: {
        _id: '',
        id: 0,
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
        pushCar: (state, action: PayloadAction<ICar>) => {
            state.cars.push(action.payload)
            state.isFetching = false
            state.error = null
        },
        pullNote: (state, action: PayloadAction<string>) => {
            state.currentCar.notes = state.currentCar.notes.filter(note => note!._id !== action.payload)
        },
        replaceNote: (state, action: PayloadAction<INote>) => {
            state.currentCar.notes[
                state.currentCar.notes.findIndex(note => note!._id === action.payload._id)
                ] = action.payload
            state.error = null
            state.isFetching = false
        },
        filterCars: (state, action: PayloadAction<ICar>) => {
            state.cars = state.cars.filter(car => car.name !== action.payload.name)
            state.isFetching = false
            state.error = null
        },
        replaceCars: (state, action: PayloadAction<ICar>) => {
            state.cars[state.cars.findIndex(car => car.name === action.payload.name)] = action.payload
            state.isFetching = false
            state.error = null
        },
        error: (state, action: PayloadAction<IError>) => {
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
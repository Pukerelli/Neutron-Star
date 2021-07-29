import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar, ICurrentNote, IError, INote} from "../../../common/interfaces/index.interface";


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
    currentNote: {
        owner: '',
        _id: '',
        date: '',
        title: '',
        description: ''
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
        currentNote: (state, action: PayloadAction<ICurrentNote>) => {
            state.currentNote = action.payload
            state.isFetching = false
            state.error = null
        },
        pullNote: (state, action: PayloadAction<string>) => {
            state.currentCar.notes = state.currentCar.notes.filter(note => note!._id !== action.payload)

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
    currentNote: ICurrentNote
    isFetching: boolean

}
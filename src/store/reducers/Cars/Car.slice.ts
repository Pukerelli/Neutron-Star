import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../../common/interfaces/common-interfaces/index.interface";
import {CarAPI, INewCar, IUpdateCar, IUploadPhoto} from "../../../API/car.api";


export const addNewCar = createAsyncThunk<void, INewCar>('/add',
    async (data, thunkApi) => {
        try {
            const response = await CarAPI.add(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
        }
    })

export const getCars = createAsyncThunk<void, string>('/getCars',
    async (username, thunkApi) => {
        try {
        const response = await CarAPI.getCars(username)
            if (response.code === 2){
                thunkApi.dispatch({type: 'car/setCars', payload: response.data})

            }

        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
        }
    })

export const updateCar = createAsyncThunk<void, IUpdateCar>('/update',
    async (data, thunkApi) => {
        try {
            const response = await CarAPI.updateCar(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
        }
    })

export const uploadPhoto = createAsyncThunk<void, IUploadPhoto>('/uploadPhoto',
    async (data, thunkApi) => {
        try {
            const response = await CarAPI.uploadPhoto(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCar', payload: response.data})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
        }
    }
)


interface IInitialState {
    cars: Array<ICar>
    error: string
    currentCar: ICar
}

const initialState = {
    cars: [],
    currentCar: {
        name: '',
        brand: '',
        model: '',
        owner: ''
    },
    error: ''
} as IInitialState


const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCar: (state, action: PayloadAction<ICar>) => {
            state.cars.push(action.payload)
            state.error = ''
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setCurrentCar: (state, action: PayloadAction<ICar>) => {
            state.currentCar = action.payload
        },
        setCars: (state, action: PayloadAction<Array<ICar>>) => {
            state.cars = action.payload
        }

    }
})


export default carSlice.reducer
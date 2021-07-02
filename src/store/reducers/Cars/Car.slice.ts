import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../../common/interfaces/common-interfaces/index.interface";
import {Car, INewCar, IUpdateCar, IUploadPhoto} from "../../../API/car.api";


export const carList = createAsyncThunk<void, string>('/list',
    async (search, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            const response = await Car.getCarSearch(search)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCars', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    })
export const deleteCar = createAsyncThunk<void, string>('/delete',
    async (carname, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            const response = await Car.deleteCar(carname)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCars', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    })

export const addNewCar = createAsyncThunk<void, INewCar>('/add',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            const response = await Car.postAddCar(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    })

export const followCar = createAsyncThunk<void, {carname: string}>('/follow',
    async (carname, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try{
            const response = await Car.postFollowCar(carname)
            if(response.code === 2){
                thunkApi.dispatch({type: 'car/setFetching', payload: false})
                thunkApi.dispatch({type: 'car/setFollowCar', payload: response.data})
            }

        }catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    }
    )
export const unfollowCar = createAsyncThunk<void, string>('/follow',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try{
            const response = await Car.deleteFollowCar(data)
            if(response.code === 2){
                thunkApi.dispatch({type: 'car/setFollowCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})
            }

        }catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    }
)

export const getFollowedCars = createAsyncThunk<void, string>('/getFollowed',
 async (data, thunkApi) => {
    try{
        const response = await Car.getFollowedCars(data)
        if(response.code === 2){
            thunkApi.dispatch({type: 'car/setCars', payload: response.data})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }


    }catch (e) {
        thunkApi.dispatch({type: 'car/setError', payload: e.message})
        thunkApi.dispatch({type: 'car/setFetching', payload: false})
    }
})

export const getCurrentCar = createAsyncThunk<void, string>('/get/current',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
    try {
        const response = await Car.getCurrent(data)
        if(response.code === 2){
            thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    }catch (e) {
        thunkApi.dispatch({type: 'car/setError', payload: e.message})
        thunkApi.dispatch({type: 'car/setFetching', payload: false})
    }
    })

export const getCars = createAsyncThunk<void, string>('/getCars',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            const response = await Car.getCars(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCars', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})

            }

        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    })

export const updateCar = createAsyncThunk<void, IUpdateCar>('/update',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            debugger
            const response = await Car.putUpdateCar(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})
            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    })


export const uploadPhoto = createAsyncThunk<void, IUploadPhoto>('car/uploadPhoto',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            const response = await Car.putUpdatePhoto(data)
            if (response.code === 2) {
                thunkApi.dispatch({type: 'car/setCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})

            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    }
)

const initialState = {
    cars: [],
    currentCar: {
        name: '',
        brand: '',
        model: '',
        owner: '',
        followedBy: ['']
    },
    isFetching: false,
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
        },
        setFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        setFollowCar: (state, action: PayloadAction<ICar>) => {
           state.cars[state.cars.findIndex((car) => car.name === action.payload.name)] = action.payload
        }

    }
})



export default carSlice.reducer



interface IInitialState {
    cars: Array<ICar>
    error: string
    currentCar: ICar
    isFetching: boolean
}
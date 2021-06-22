import {createAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../../common/interfaces/common-interfaces/index.interface";
import {CarAPI, INewCar, IUpdateCar, IUploadPhoto} from "../../../API/car.api";
import {Car} from "../../../components/Cars/Car.component";


export const carList = createAsyncThunk<void, string>('/list',
    async (search, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try {
            const response = await CarAPI.getCarList(search)
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
            const response = await CarAPI.deleteCar(carname)
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
            const response = await CarAPI.add(data)
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

export const followCar = createAsyncThunk<void, string>('/follow',
    async (data, thunkApi) => {
        thunkApi.dispatch({type: 'car/setFetching', payload: true})
        try{
            const response = await CarAPI.postFollow(data)
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
            const response = await CarAPI.deleteFollow(data)
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
        const response = await CarAPI.getFollowedCars(data)
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
        const response = await CarAPI.getCurrent(data)
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
            const response = await CarAPI.getCars(data)
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
            const response = await CarAPI.updateCar(data)
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
            const response = await CarAPI.uploadPhoto(data)
            if (response.code === 2) {
                await thunkApi.dispatch({type: 'car/setCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setCurrentCar', payload: response.data})
                thunkApi.dispatch({type: 'car/setFetching', payload: false})

            }
        } catch (e) {
            thunkApi.dispatch({type: 'car/setError', payload: e.message})
            thunkApi.dispatch({type: 'car/setFetching', payload: false})
        }
    }
)


interface IInitialState {
    cars: Array<ICar>
    error: string
    currentCar: ICar
    isFetching: boolean
}

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

export const setCurrentCarAction = createAction<ICar>('car/setCurrentCar')


export default carSlice.reducer
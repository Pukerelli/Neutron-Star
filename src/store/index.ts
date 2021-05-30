import {configureStore} from '@reduxjs/toolkit'
import authSlice from './reducers/auth-reducer/auth.slice'
import userSlice from './reducers/Profile/user.slice'
import {useDispatch} from "react-redux";
import carSliderSlice from './reducers/Cars/Car.slice';


export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        carSlider: carSliderSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './reducers/auth/auth.slice'
import userSlice from './reducers/profile/profile.slice'
import {useDispatch} from "react-redux";
import carSliderSlice from './reducers/cars/car.slice';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/root.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        car: carSliderSlice
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
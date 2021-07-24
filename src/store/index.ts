import {configureStore} from '@reduxjs/toolkit'
import authSlice from './reducers/auth/auth.slice'
import userSlice from './reducers/user/user.slice'
import {useDispatch} from "react-redux";
import carSlice from './reducers/cars/car.slice';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/root.saga'
import listSlice from './reducers/list/list.slice';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        car: carSlice,
        list: listSlice
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
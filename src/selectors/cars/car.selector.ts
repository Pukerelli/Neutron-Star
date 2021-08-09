import {RootState} from "../../store";

export const selectCars = (state: RootState) => state.car.cars

export const selectCurrentCar = (state: RootState) => state.car.currentCar

export const selectCarIsFetching = (state: RootState) => state.car.isFetching

export const selectCarError = (state: RootState) => state.car.error

export const selectCurrentNote = (state: RootState) => state.car.currentNote

export const selectAdding = (state: RootState) => state.car.addingSucceed
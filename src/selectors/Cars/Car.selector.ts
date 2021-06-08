import {RootState} from "../../store";

export const selectCars = (state: RootState) => {
    return state.car.cars
}

export const selectCarName = (state: RootState) => {
    return state.car.currentCar?.name
}
export const selectCurrentCar = (state: RootState) => {
    return state.car.currentCar
}
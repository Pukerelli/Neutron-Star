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
export const selectCurrentCarPhoto = (state: RootState) => {
    return state.car.currentCar.photo
}

export const selectCarIsFetching = (state: RootState) => {
    return state.car.isFetching
}
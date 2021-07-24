import {RootState} from "../../store";
import {createSelector} from "reselect";

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
export const selectCarError = (state: RootState) => {
    return state.car.error
}
export const selectCurrentCarNotes = (state: RootState) => {
    return state.car.currentCar.notes
}
export const selectCurrentNote = (id: string) => createSelector(
    selectCurrentCarNotes,
    notes => notes.find(note => note!._id === id)
)

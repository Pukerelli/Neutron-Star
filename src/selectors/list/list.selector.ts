import {RootState} from "../../store";

export const selectListUsers = (state: RootState) => state.list.users
export const selectListCars = (state: RootState) => state.list.cars
export const selectListIsFetching = (state: RootState) => state.list.isFetching
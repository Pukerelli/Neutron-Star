import {createSlice} from "@reduxjs/toolkit";
import {srcFromServer} from "../../../fake-server/Server";

interface initialState{
    src: Array<string>
    count: number | null
}

const initialState = {
    src: srcFromServer,
    count: srcFromServer.length,
} as initialState

const carSlice = createSlice({
    name: 'carSlider',
    initialState,
    reducers: {

    }
})

export default carSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
    name: "position",
    initialState: null,
    reducers: {
        setPosition(state, action) {

            return action.payload
        }
    }
})

export default positionSlice;
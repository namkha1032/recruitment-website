import { createSlice } from "@reduxjs/toolkit";

const shiftSlice = createSlice({
    name: "shift",
    initialState: null,
    reducers: {
        setShiftArray(state, action) {
            return action.payload
        }
    }
})

export default shiftSlice
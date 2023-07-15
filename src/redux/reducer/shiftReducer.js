import { createSlice } from "@reduxjs/toolkit";

const shiftSlice = createSlice({
    name: "shift",
    initialState: null,
    reducers: {
        setShift(state, action) {
            return action.payload
        }
    }
})

export default shiftSlice
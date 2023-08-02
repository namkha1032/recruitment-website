import { createSlice } from "@reduxjs/toolkit";

const interviewShiftSlice = createSlice({
    name: "interviewshift",
    initialState: null,
    reducers: {
        setInterviewShift(state, action) {
            return action.payload
        }
    }
})

export default interviewShiftSlice
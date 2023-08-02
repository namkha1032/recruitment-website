import { createSlice } from "@reduxjs/toolkit";

const interviewPositionSlice = createSlice({
    name: "interviewposition",
    initialState: null,
    reducers: {
        setInterviewPosition(state, action) {
            return action.payload
        }
    }
})

export default interviewPositionSlice
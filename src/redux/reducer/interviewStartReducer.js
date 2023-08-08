import { createSlice } from "@reduxjs/toolkit";

const interviewStartSlice = createSlice({
    name: "interviewStart",
    initialState: null,
    reducers: {
        setInterviewStart(state, action) {
            return action.payload
        }
    }
})

export default interviewStartSlice
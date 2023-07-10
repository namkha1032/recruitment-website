import { createSlice } from "@reduxjs/toolkit";

const interviewerSlice = createSlice({
    name: "interviewer",
    initialState: null,
    reducers: {
        setInterviewerArray(state, action) {
            return action.payload
        }
    }
})

export default interviewerSlice
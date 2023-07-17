import { createSlice } from "@reduxjs/toolkit";

const interviewerSlice = createSlice({
    name: "interviewer",
    initialState: null,
    reducers: {
        setInterviewer(state, action) {
            return action.payload
        }
    }
})

export default interviewerSlice
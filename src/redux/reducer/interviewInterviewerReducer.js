import { createSlice } from "@reduxjs/toolkit";

const interviewInterviewerSlice = createSlice({
    name: "interviewinterviewer",
    initialState: null,
    reducers: {
        setInterviewInterviewer(state, action) {
            return action.payload
        }
    }
})

export default interviewInterviewerSlice
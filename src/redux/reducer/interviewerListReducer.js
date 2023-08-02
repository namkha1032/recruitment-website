import { createSlice } from "@reduxjs/toolkit";

const interviewerListSlice = createSlice({
    name: "interviewerList",
    initialState: null,
    reducers: {
        setInterviewerList(state, action) {
            return action.payload
        }
    }
})

export default interviewerListSlice
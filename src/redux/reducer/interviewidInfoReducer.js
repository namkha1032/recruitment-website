import { createSlice } from "@reduxjs/toolkit";

const interviewidInfoSlice = createSlice({
    name: "interviewidInfo",
    initialState: null,
    reducers: {
        setInterviewidInfo(state, action) {
            return action.payload
        }
    }
})

export default interviewidInfoSlice
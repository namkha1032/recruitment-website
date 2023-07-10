import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
    name: "interview",
    initialState: null,
    reducers: {
        setInterviewArray(state, action) {
            return action.payload
        }
    }
})

export default interviewSlice
import { createSlice } from "@reduxjs/toolkit";

const interviewResultSlice = createSlice({
    name: "interviewResult",
    initialState: null,
    reducers: {
        setInterviewResult(state, action) {
            return action.payload
        }
    }
})

export default interviewResultSlice
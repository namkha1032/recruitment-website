import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
    name: "interview",
    initialState: null,
    reducers: {
        setInterview(state, action) {
            return action.payload
        },
        cleanUpInterview() {
            return null
        }
    }
})

export default interviewSlice
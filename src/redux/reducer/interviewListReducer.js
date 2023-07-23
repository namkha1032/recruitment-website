import { createSlice } from "@reduxjs/toolkit";

const interviewListSlice = createSlice({
    name: "interviewList",
    initialState: null,
    reducers: {
        setInterviewList(state, action) {
            return action.payload
        },
        cleanUpInterviewList() {
            return null
        }
    }
})

export default interviewListSlice
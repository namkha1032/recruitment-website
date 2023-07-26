import { createSlice } from "@reduxjs/toolkit";

const interviewCandidateSlice = createSlice({
    name: "interviewCandidate",
    initialState: null,
    reducers: {
        setInterviewList(state, action) {
            return action.payload
        }
    }
})

export default interviewCandidateSlice
import { createSlice } from "@reduxjs/toolkit";

const interviewListCandidateSlice = createSlice({
    name: "interviewListCandidate",
    initialState: null,
    reducers: {
        setInterviewListCandidate(state, action) {
            return action.payload
        }
    }
})

export default interviewListCandidateSlice
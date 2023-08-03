import { createSlice } from "@reduxjs/toolkit";

const cvCandidateSlice = createSlice({
    name: "cvCandidate",
    initialState: null,
    reducers: {
        setCvCandidate(state, action) {
       
            return action.payload
        }
    }
})

export default cvCandidateSlice
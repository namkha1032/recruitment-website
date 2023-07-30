import { createSlice } from "@reduxjs/toolkit";

const cvCandidateSlice = createSlice({
    name: "cvCandidate",
    initialState: null,
    reducers: {
        setCvList(state, action) {
       
            return action.payload
        }
    }
})

export default cvCandidateSlice
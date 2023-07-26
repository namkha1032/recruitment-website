import { createSlice } from "@reduxjs/toolkit";

const applicationCandidateSlice = createSlice({
    name: "applicationCandidate",
    initialState: null,
    reducers: {
        setApplicationList(state, action) {
            return action.payload
        }
    }
})

export default applicationCandidateSlice
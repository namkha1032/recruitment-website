import { createSlice } from "@reduxjs/toolkit";

const eventCandidateSlice = createSlice({
    name: "eventCandidate",
    initialState: null,
    reducers: {
        setEventList(state, action) {
            return action.payload
        }
    }
})

export default eventCandidateSlice
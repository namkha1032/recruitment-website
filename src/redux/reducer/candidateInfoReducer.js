// import libraries
import { createSlice } from '@reduxjs/toolkit'

const candidateInfoSlice = createSlice({
    name: "candidateInfo",
    initialState: null,
    reducers: {
        setCandidateInfo(state, action) {
            return action.payload
        }
    }
})

export default candidateInfoSlice
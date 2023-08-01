// import libraries
import { createSlice } from '@reduxjs/toolkit'

const candidateIdSlice = createSlice({
    name: "candidateId",
    initialState: null,
    reducers: {
        setCandidateId(state, action) {
            return action.payload
        }
    }
})

export default candidateIdSlice
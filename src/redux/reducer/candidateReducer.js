// import libraries
import { createSlice } from '@reduxjs/toolkit'

const candidateSlice = createSlice({
    name: "candidate",
    initialState: null,
    reducers: {
        setCandidate(state, action) {
            return action.payload
        }
    }
})

export default candidateSlice
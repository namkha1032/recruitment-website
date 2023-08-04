// import libraries
import { createSlice } from '@reduxjs/toolkit'

const candidateIdRegisterEventSlice = createSlice({
    name: "candidateIdRegisterEvent",
    initialState: null,
    reducers: {
        setCandidateIdRegisterEvent(state, action) {
            return action.payload
        }
    }
})

export default candidateIdRegisterEventSlice
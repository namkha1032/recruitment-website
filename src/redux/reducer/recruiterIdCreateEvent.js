// import libraries
import { createSlice } from '@reduxjs/toolkit'

const recruiterIdCreateEventSlice = createSlice({
    name: "recruiterIdCreateEvent",
    initialState: null,
    reducers: {
        setRecruiterIdCreateEvent(state, action) {
            return action.payload
        }
    }
})

export default recruiterIdCreateEventSlice
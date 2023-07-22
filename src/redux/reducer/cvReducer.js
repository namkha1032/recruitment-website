// import libraries
import { createSlice } from '@reduxjs/toolkit'

const cvSlice = createSlice({
    name: "cv",
    initialState: null,
    reducers: {
        setCv(state, action) {
            return action.payload
        }
    }
})

export default cvSlice
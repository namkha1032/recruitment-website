// import libraries
import { createSlice } from '@reduxjs/toolkit'

const cvInforSlice = createSlice({
    name: "cvInfor",
    initialState: null,
    reducers: {
        setCvInfor(state, action) {
            return action.payload
        }
    }
})

export default cvInforSlice
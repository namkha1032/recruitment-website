// import libraries
import { createSlice } from '@reduxjs/toolkit'

const positionRequireSlice = createSlice({
    name: "positionRequire",
    initialState: null,
    reducers: {
        setPositionRequire(state, action) {
            return action.payload
        }
    }
})

export default positionRequireSlice
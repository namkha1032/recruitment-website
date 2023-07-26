// import libraries
import { createSlice } from '@reduxjs/toolkit'

const positionInforSlice = createSlice({
    name: "positionInfor",
    initialState: null,
    reducers: {
        setPositionInfor(state, action) {
            return action.payload
        }
    }
})

export default positionInforSlice
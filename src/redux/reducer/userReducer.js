// import libraries
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    // Thay dòng 7 bằng null
    initialState: null,
    reducers: {
        setUser(state, action) {
            return { ...state, ...action.payload }
        },
        userLogout(state, action) {
            return action.payload
        }
    }
})

export default userSlice



import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: "room",
    initialState: null,
    reducers: {
        setRoomArray(state, action) {
            return action.payload
        }
    }
})

export default roomSlice
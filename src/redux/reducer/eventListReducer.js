import { createSlice } from "@reduxjs/toolkit";

const eventListSlice = createSlice({
    name: "eventList",
    initialState: null,
    reducers: {
        setEventList(state, action) {
            return action.payload
        }
    }
})

export default eventListSlice
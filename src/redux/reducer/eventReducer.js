import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: null,
    reducers: {
        setEvent(state, action) {
            return action.payload
        }
    }
})

export default eventSlice
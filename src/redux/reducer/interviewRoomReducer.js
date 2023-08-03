import { createSlice } from "@reduxjs/toolkit";

const interviewRoomSlice = createSlice({
    name: "interviewroom",
    initialState: null,
    reducers: {
        setInterviewRoom(state, action) {
            return action.payload
        }
    }
})

export default interviewRoomSlice
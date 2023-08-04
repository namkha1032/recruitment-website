import { createSlice } from "@reduxjs/toolkit";

const eventRegisteredSlice = createSlice({
    name: "eventRegistered",
    initialState: null,
    reducers: {
        setEventRegistered(state, action) {
            return action.payload;
        },
    },
});

export default eventRegisteredSlice;

import { createSlice } from "@reduxjs/toolkit";

const eventFooterSlice = createSlice({
    name: "eventFooter",
    initialState: null,
    reducers: {
        setEventFooter(state, action) {
            return action.payload
        }
    }
})

export default eventFooterSlice
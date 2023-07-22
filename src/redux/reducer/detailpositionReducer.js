import { createSlice } from "@reduxjs/toolkit";

const detailpositionSlice = createSlice({
    name: "detailposition",
    initialState: null,
    reducers: {
        setDetailposition(state, action) {

            return action.payload
        }
    }
})

export default detailpositionSlice;
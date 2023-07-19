import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: null,
    reducers: {
        setLanguage(state, action) {
            return action.payload
        }
    }
})

export default languageSlice
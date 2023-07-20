import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: "",
    reducers: {
        setError(state, action) {
            return action.payload
        }
    }
})

export default errorSlice
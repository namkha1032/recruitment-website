import { createSlice } from "@reduxjs/toolkit";

const requirementSlice = createSlice({
    name: "requirement",
    initialState: null,
    reducers: {
        setRequirement(state, action) {
            return action.payload
        }
    }
})

export default requirementSlice
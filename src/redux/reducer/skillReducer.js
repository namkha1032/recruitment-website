import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: "skill",
    initialState: null,
    reducers: {
        setSkill(state, action) {
            return action.payload
        }
    }
})

export default skillSlice
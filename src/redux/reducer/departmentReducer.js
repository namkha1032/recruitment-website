import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
    name: "department",
    initialState: null,
    reducers: {
        setDepartment(state, action) {
            return action.payload
        }
    }
})

export default departmentSlice
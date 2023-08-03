import { createSlice } from "@reduxjs/toolkit";

const interviewDepartmentSlice = createSlice({
    name: "interviewdepartment",
    initialState: null,
    reducers: {
        setInterviewDepartment(state, action) {
            return action.payload
        }
    }
})

export default interviewDepartmentSlice
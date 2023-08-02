import { createSlice } from "@reduxjs/toolkit";

const interviewSkillSlice = createSlice({
    name: "interviewskill",
    initialState: null,
    reducers: {
        setInterviewSkill(state, action) {
            return action.payload
        }
    }
})

export default interviewSkillSlice
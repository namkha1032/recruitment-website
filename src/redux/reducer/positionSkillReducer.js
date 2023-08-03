import { createSlice } from "@reduxjs/toolkit";

const positionSkillSlice = createSlice({
    name: "positionskill",
    initialState: null,
    reducers: {
        setPositionSkill(state, action) {
            return action.payload
        }
    }
})

export default positionSkillSlice
// import libraries
import { createSlice } from '@reduxjs/toolkit'

const cvHasSkillSlice = createSlice({
    name: "cvHasSkill",
    initialState: null,
    reducers: {
        setCvHasSkill(state, action) {
            return action.payload
        }
    }
})

export default cvHasSkillSlice
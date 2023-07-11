import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: "question",
    initialState: null,
    reducers: {
        setQuestionArray(state, action) {
            return action.payload
        }
    }
})

export default questionSlice
import { createSlice } from "@reduxjs/toolkit";

const questionListSlice = createSlice({
  name: "questionList",
  initialState: null,
  reducers: {
    setQuestionList(state, action) {
      return action.payload;
    },
    updateQuestionList(state, action) {
      return action.payload;
    },
    cleanUpQuestionList() {
      return null;
    },
  },
});

export default questionListSlice;

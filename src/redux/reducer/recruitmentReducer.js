import { createSlice } from "@reduxjs/toolkit";

const recruitmentSlice = createSlice({
  name: "recruitment",
  initialState: null,
  reducers: {
    setRecruitment(state, action) {
      return action.payload;
    },
    updateRecruitment(state, action) {
      return action.payload;
    },
    cleanUpRecruitment() {
      return null
    }
  },
});

export default recruitmentSlice;

import { createSlice } from "@reduxjs/toolkit";

const positionListSlice = createSlice({
  name: "positionList",
  initialState: null,
  reducers: {
    setPositionList(state, action) {
      return action.payload;
    },
    updatePositionList(state, action) {
      return action.payload;
    },
    cleanUpPositionList() {
      return null;
    },
  },
});

export default positionListSlice;

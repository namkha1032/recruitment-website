import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "position",
  initialState: null,
  reducers: {
    setPosition(state, action) {
      return action.payload;
    },
    updatePosition(state, action) {
      return action.payload;
    },
    cleanUpPosition() {
      return null;
    },
  },
});

export default positionSlice;

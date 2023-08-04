import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: null,
  reducers: {
    setReport(state, action) {
      return action.payload;
    },
  },
});

export default reportSlice;

import { createSlice } from "@reduxjs/toolkit";

const loadingAddSlice = createSlice({
  name: "loadingAdd",
  initialState: false,
  reducers: {
    onLoading() {
      return true
    },
    offLoading() {
      return false
    }
  },
});

export default loadingAddSlice;
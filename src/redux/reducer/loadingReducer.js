import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    onLoading() {
      return true
    },
    offLoading() {
      return false
    }
  },
});

export default loadingSlice;
import { createSlice } from "@reduxjs/toolkit";

const statusApplicationSlice = createSlice({
  name: "statusApplication",
  initialState: null,
  reducers: {
    onLoading(action) {
      return action.payload
    }
  },
});

export default statusApplicationSlice;

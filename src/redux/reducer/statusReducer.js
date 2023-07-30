import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    status: "idle",
    message: "",
  },
  reducers: {
    onLoading() {
      return {
        status: "loading",
        message: "",
      };
    },
    onSuccess(state, action) {
      return {
        status: "success",
        message: action.payload,
      };
    },
    onReset() {
      return {
        status: "idle",
        message: "",
      };
    },
  },
});

export default statusSlice;

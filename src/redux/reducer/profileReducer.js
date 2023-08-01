import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    setProfile(state, action) {
      return action.payload;
    } 
  },
});

export default profileSlice;

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    setProfile(state, action) {
      return action.payload;
    },
    updateProfile(state, action) {
      return {...state,...action.payload}
    } 
  },
});

export default profileSlice;

import { createSlice } from "@reduxjs/toolkit";

const cvListSlice = createSlice({
  name: 'cvlist',
  initialState: null,
  reducers: {
    setCvList(state, action) {
      return action.payload
    }
  }
})

export default cvListSlice;

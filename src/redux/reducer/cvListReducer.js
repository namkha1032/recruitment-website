import { createSlice } from "@reduxjs/toolkit";

const cvListSlice = createSlice({
  name: 'listcv',
  initialState: null,
  reducers: {
    setCvList(state, action) {
      return action.payload
    }
  }
})

export default cvListSlice;

import { createSlice } from "@reduxjs/toolkit";

const updatesubmitcvSlice = createSlice({
  name: 'updatesubmitcv',
  initialState: false,
  reducers: {
    setUpdatesubmitcv(state, action) {
      return action.payload
    }
  }
})

export default updatesubmitcvSlice;
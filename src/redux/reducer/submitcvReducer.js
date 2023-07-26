import { createSlice } from "@reduxjs/toolkit";

const submitcvSlice = createSlice({
  name: 'submitcv',
  initialState: false,
  reducers: {
    setSubmitcv(state, action) {
      return action.payload
    }
  }
})

export default submitcvSlice;
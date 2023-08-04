import { createSlice } from "@reduxjs/toolkit";

const countSubmitSlice = createSlice({
  name: 'countSubmit',
  initialState: null,
  reducers: {
    setCountSubmit(state, action) {
      return action.payload
    }
  }
})

export default countSubmitSlice;
import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: 'application',
  initialState: null,
  reducers: {
    setApplication(state, action) {
      return action.payload
    }
  }
})

export default applicationSlice;
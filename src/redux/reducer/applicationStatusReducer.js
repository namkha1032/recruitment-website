import { createSlice } from "@reduxjs/toolkit";

const applicationStatusSlice = createSlice({
  name: 'applicationStatus',
  initialState: null,
  reducers: {
    setApplicationStatus(state, action) {
      return action.payload
    }
  }
})

export default applicationStatusSlice;
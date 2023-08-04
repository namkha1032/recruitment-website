import { createSlice } from "@reduxjs/toolkit";

const submitNotifySlice = createSlice({
  name: 'submitNotify',
  initialState: 'no',
  reducers: {
    setSubmitNotify(state, action) {
      return action.payload
    }
  }
})

export default submitNotifySlice;
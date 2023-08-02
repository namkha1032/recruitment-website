import { createSlice } from "@reduxjs/toolkit";

const infoApplicationSlice = createSlice({
  name: 'infoApplication',
  initialState: null,
  reducers: {
    setInfoApplication(state, action) {
      return action.payload
    }
  }
})

export default infoApplicationSlice;
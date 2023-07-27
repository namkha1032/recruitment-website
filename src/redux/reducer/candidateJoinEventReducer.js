import { createSlice } from "@reduxjs/toolkit";

const candidateJoinEventSlice = createSlice({
  name: 'candidateJoinEvent',
  initialState: null,
  reducers: {
    setCandidateJoinEvent(state, action) {
      return action.payload
    }
  }
})

export default candidateJoinEventSlice;
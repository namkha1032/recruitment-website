import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        candidate:[],
        recruiter:[],
        interviewer:[],
        blacklist:[],
    },
    reducers: {
        getCandidate(state,action){
           state.candidate=action.payload;
        },
        getRecruiter(state,action){
            state.recruiter=action.payload;
        },
        getInterviewer(state,action){
            state.interviewer=action.payload;
        },
        getBlacklist(state,action){
            state.blacklist=action.payload;
        },
    }
});

export const {getCandidate,getInterviewer,getRecruiter,getBlacklist} = adminSlice.actions;
export default adminSlice;
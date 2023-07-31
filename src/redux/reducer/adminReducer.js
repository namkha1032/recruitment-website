import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        candidate:[],
        recruiter:[],
        interviewer:[],
        blacklist:[],
        department: [],
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
        getDepartments(state,action){
            state.department=action.payload;
        }
    }
});

export const {getCandidate,getInterviewer,getRecruiter,getBlacklist,getDepartments} = adminSlice.actions;
export default adminSlice;
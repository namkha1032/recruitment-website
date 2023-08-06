import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        candidate: [],
        recruiter: [],
        interviewer: [],
        blacklist: [],
        department: [],
        error: [],
    },
    reducers: {
        getCandidate(state, action) {
            state.candidate = action.payload;
            state.error=null
        },
        getRecruiter(state, action) {
            state.recruiter = action.payload;
            state.error=null

        },
        getInterviewer(state, action) {
            state.interviewer = action.payload;
            state.error=null

        },
        getBlacklist(state, action) {
            state.blacklist = action.payload;
            state.error=null

        },
        getDepartments(state, action) {
            state.department = action.payload;
            state.error=null
        },
        getErrorAdmin(state,action){
            state.error=action.payload;
        }
    }
});

export const {getCandidate, getInterviewer, getRecruiter, getBlacklist, getDepartments} = adminSlice.actions;
export default adminSlice;
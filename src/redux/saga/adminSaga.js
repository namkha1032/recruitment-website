import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";

function* doGetCandidate(action){
    const res = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Candidate`);
    yield put({type:"admin/getCandidate",payload: res.data})
}
function* doGetRecruiter(action){
    const res = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Recruiter`);
    yield put({type:"admin/getRecruiter",payload: res.data})
}
function* doGetInterviewer(action){
    const res = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Interviewer`);
    yield put({type:"admin/getInterviewer",payload: res.data})
}

function* adminSaga(){
    yield takeLatest('saga/getCandidate',doGetCandidate);
    yield takeLatest('saga/getInterviewer',doGetInterviewer);
    yield takeLatest('saga/getRecruiter',doGetRecruiter);

}
export default adminSaga
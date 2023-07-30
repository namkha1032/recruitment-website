import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";

function* doGetCandidate(action){
    const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`);
    yield put({type:"admin/getCandidate",payload: res.data})
}
function* doGetRecruiter(action){
    const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Recruiter`);
    yield put({type:"admin/getRecruiter",payload: res.data})
}
function* doGetInterviewer(action){
    const res = yield call(axios.get, `${host.name}/data/fakeInterviewers.json`);
    yield put({type:"admin/getInterviewer",payload: res.data})
}
function* doGetBlacklist(action){
    const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/BlackList`);
    yield put({type:"admin/getBlacklist",payload: res.data})
}

function* adminSaga(){
    yield takeEvery('saga/getCandidate',doGetCandidate);
    yield takeEvery('saga/getInterviewer',doGetInterviewer);
    yield takeEvery('saga/getRecruiter',doGetRecruiter);
    yield takeEvery('saga/getBlacklist',doGetBlacklist);

}
export default adminSaga
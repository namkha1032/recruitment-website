import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";

function* doGetCandidate(action){
    try{
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`);
        yield put({type:"admin/getCandidate",payload: res.data})
    }
    catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        console.log("error")
    }
}
function* doGetRecruiter(action){
    try{
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Recruiter`);
        yield put({type:"admin/getRecruiter",payload: res.data})
    }
    catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        console.log("error")
    }
}
function* doGetInterviewer(action){
    try{
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer`);
        yield put({type:"admin/getInterviewer",payload: res.data})
    }
    catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        console.log("error")
    }
}
function* doGetBlacklist(action){
    try{
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/BlackList`);
        yield put({type:"admin/getBlacklist",payload: res.data})
    }
    catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        console.log("error")
    }
}
function* doGetDepartment(action){
    try{
        const res = yield call(axios.get, `${host.name}/data/departmentList.json`);
        yield put({type:"admin/getDepartments",payload: res.data})
    }
    catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        console.log("error")
    }
}

function* adminSaga(){
    yield takeEvery('saga/getCandidate',doGetCandidate);
    yield takeEvery('saga/getInterviewer',doGetInterviewer);
    yield takeEvery('saga/getRecruiter',doGetRecruiter);
    yield takeEvery('saga/getBlacklist',doGetBlacklist);
    yield takeEvery('saga/getDepartmentAdmin',doGetDepartment);


}
export default adminSaga
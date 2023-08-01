import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";

function* doGetCandidate(action){
    try{
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`,config);
        yield put({type:"admin/getCandidate",payload: res.data})
    }
    catch (error) {
        console.log("error")
    }
}
function* doGetRecruiter(action){
    try{
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Recruiter`,config);
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
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer`,config);
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
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Blacklist`,config);
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
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Department`,config);
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

function* doAddToBlacklist(action){
    try {
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const {
            candidateId,
            reason,
        } = action.payload;
        const now = new Date();
        const dateTime = now.toISOString();
        const data = {
            candidateId,
            reason,
            dateTime,
        };
        const res = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/BlackList', data, {
            headers: {'Content-Type': 'application/json'}
        }, config);
    } catch (error) {
        console.log(error);
    }
}

function* doAddAccount(action){
    try {
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        const {
            fullname,
            username,
            email,
            password,
            departmentId,
            role
        } = action.payload;
        const data = {
            fullName: fullname,
            username: username,
            email: email,
            password: password,
            departmentId: departmentId,
        };
        const res = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Admin/Create?role=${role}`, data, config);
        console.log(res,data,`https://leetun2k2-001-site1.gtempurl.com/api/Admin/Create?role=${role}`)
    } catch (error) {
        console.log(error);
    }
}


function* adminSaga(){
    yield takeEvery('saga/getCandidate',doGetCandidate);
    yield takeEvery('saga/getInterviewer',doGetInterviewer);
    yield takeEvery('saga/getRecruiter',doGetRecruiter);
    yield takeEvery('saga/getBlacklist',doGetBlacklist);
    yield takeEvery('saga/getDepartmentAdmin',doGetDepartment);
    yield takeEvery('saga/addToBlacklist',doAddToBlacklist);
    yield takeEvery('saga/addAdvancedAccount',doAddAccount);

}
export default adminSaga
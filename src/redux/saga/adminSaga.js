import {call, put, takeEvery} from "redux-saga/effects";
import axios from 'axios';

function* doGetCandidate(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`,config);
        // console.log("data: ",res.data)
        yield put({type: "admin/getCandidate", payload: res.data})
        // console.log("data: ", res.data)
    } catch (error) {
        // console.log(error)
    }
}

function* doGetRecruiter(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Recruiter`,config);
        yield put({type: "admin/getRecruiter", payload: res.data})
    } catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        // console.log(error)
    }
}

function* doGetInterviewer(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer`,config);
        yield put({type: "admin/getInterviewer", payload: res.data})
    } catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        // console.log(error)
    }
}

function* doGetBlacklist(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Blacklist`,config);
        yield put({type: "admin/getBlacklist", payload: res.data})
    } catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        // console.log(error)
    }
}

function* doGetDepartment(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
        const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Department`,config);
        yield put({type: "admin/getDepartments", payload: res.data})
    } catch (error) {
        // yield put({
        //     type: "error/setError",
        //     payload: {
        //         status: "yes",
        //         message: "message" in error ? error.message : error.response.data,
        //     },
        // });
        // console.log(error)
    }
}

function* doAddToBlacklist(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        };
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
        const res = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/BlackList', data, config);
        yield put({type: "error/setError" , payload: {
                status: "no",
                message: "Account Added Successfully"
            }})
    } catch (error) {
        // console.log(error);
        yield put({type: "error/setError", payload:{
                status: "yes",
                message: "Error code: " + error.response.status + " : " + error.message,
            }})
    }
}

function* doAddAccount(action) {
    try {
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        // console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        // console.log(token)
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
        // console.log(data)
        const res = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Admin/Create?role=${role}`, data, config);
        // // console.log(res,data,`https://leetun2k2-001-site1.gtempurl.com/api/Admin/Create?role=${role}`)
        // return res.data
        yield put({type: "error/setError" , payload: {
                status: "no",
                message: "Account Created Successfully"
            }})
    } catch (error) {
        // yield put({type: "admin/getErrorAdmin", payload: {
        //         message: error.message,
        //         name: error.name,
        //         code: error.code,
        //     }})
        // // console.log(error);
        // console.log("Error log: ",error)
        yield put({type: "error/setError", payload:{
                status: "yes",
                message: "Error code: " + error.response.status + " : " + error.message,

            }})
    }
}


function* adminSaga() {
    // // console.log("saga init")
    yield takeEvery('saga/getCandidateAdmin', doGetCandidate);
    yield takeEvery('saga/getInterviewerAdmin', doGetInterviewer);
    yield takeEvery('saga/getRecruiterAdmin', doGetRecruiter);
    yield takeEvery('saga/getBlacklist', doGetBlacklist);
    yield takeEvery('saga/getDepartmentAdmin', doGetDepartment);
    yield takeEvery('saga/addToBlacklist', doAddToBlacklist);
    yield takeEvery('saga/addAdvancedAccount', doAddAccount);
    // // console.log("saga end")
}

export default adminSaga
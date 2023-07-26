// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* userLogin(action) {
    try {
        /* const response = yield call(axios.post, 'http://localhost:3001/api/login', action.payload)
        yield call(window.localStorage.setItem, 'user', JSON.stringify(response.data))
        yield put({ type: "user/userLogin", payload: response.data }) */
        const { username, password, check } = action.payload
        let api = ""
        if (username == "candidate1" && password == "candidate1") {
            api = `${host.name}/data/userCandidate.json`
        }
        else if (username == "interviewer1" && password == "interviewer1") {
            api = `${host.name}/data/userInterviewer.json`
        }
        else if (username == "recruiter1" && password == "recruiter1") {
            api = `${host.name}/data/userRecruiter.json`
        }
        else if (username == "admin1" && password == "admin1") {
            api = `${host.name}/data/userAdmin.json`
        }
        else {
            throw {
                response: {
                    data: {
                        error: "username or password is incorrect"
                    }
                }
            }
        }
        /* const { username, password, check } = action.payload
        const response = yield call(axios.post, 'http://leetun2k2-001-site1.gtempurl.com/api/Authentication/Login', { username, password })
        console.log("response is: ", response) */
        const response = yield call(axios.get, api)

        yield put({ type: "user/setUser", payload: response.data })
        if (check) {
            window.localStorage.setItem("user", JSON.stringify(response.data))
        }
        else {
            window.sessionStorage.setItem("user", JSON.stringify(response.data))
        }
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })

    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userGetRole(action) {
    return "hahaha"
    // const response = yield call(axios.get, `${host.name}/data/role.json`, action.payload)
    // //console.log("response is: ", response)
    // yield put({ type: "user/userGetRole", payload: response.data })
}

function* userRegister(action) {
    try {
        /* const response = yield call(axios.post, 'http://localhost:3001/api/register', action.payload) */
        /* yield call(window.localStorage.setItem, 'user', JSON.stringify(response.data))
        yield put({ type: "user/userRegister", payload: response.data }) */
        /* throw {
            response: {
                data: {
                    error: "username or email is already exist"
                }
            }
        } */
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* emailRecovery(action) {
    try {
        /* throw {
            response: {
                data: {
                    error: "email is incorrect"
                }
            }
        } */
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* otpRecovery(action) {
    try {
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userResetPassword(action) {
    try {
        /* throw {
            response: {
                data: {
                    error: "email is incorrect"
                }
            }
        } */
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userChangePassword(action) {
    try {
        /* throw {
            response: {
                data: {
                    error: "email is incorrect"
                }
            }
        } */
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userLogout() {
    // yield call(window.localStorage.removeItem, 'user')
    // yield call(window.sessionStorage.removeItem, 'user')
    window.localStorage.removeItem('user')
    window.sessionStorage.removeItem('user')
    yield put({ type: "user/setUser", payload: null })
}


function* userSaga() {
    yield all([
        takeEvery("saga/userLogin", userLogin),
        takeEvery("saga/userRegister", userRegister),
        takeEvery("saga/userGetRole", userGetRole),
        takeEvery("saga/emailRecovery", emailRecovery),
        takeEvery("saga/otpRecovery", otpRecovery),
        takeEvery("saga/userResetPassword", userResetPassword),
        takeEvery("saga/userChangePassword", userChangePassword),
        takeEvery("saga/userLogout", userLogout)
    ])
}

export default userSaga
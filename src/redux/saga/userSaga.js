import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"

function* userLogin(action) {
    try {
        const { username, password, check } = action.payload
        console.log("username: ", username, "password: ", password, "check: ", check)
        const response = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Login', { username, password })
        console.log("response is: ", response.data)

        yield put({ type: "user/setUser", payload: response.data })
        if (check) {
            window.localStorage.setItem("user", JSON.stringify(response.data))
        }
        else {
            window.sessionStorage.setItem("user", JSON.stringify(response.data))
        }

        let token = `Bearer ${response.data.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const userId = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/CurrentUser', config)
        // console.log("userId is", userId.data)
        yield put({ type: "user/setUser", payload: userId.data })
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })

    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error.response.data.status)
    }
}

// function* userLogin(action) {
//     try {
//         const { username, password, check } = action.payload
//         let api = ""
//         if (username == "candidate1" && password == "candidate1") {
//             api = `${host.name}/data/userCandidate.json`
//         }
//         else if (username == "interviewer1" && password == "interviewer1") {
//             api = `${host.name}/data/userInterviewer.json`
//         }
//         else if (username == "recruiter1" && password == "recruiter1") {
//             api = `${host.name}/data/userRecruiter.json`
//         }
//         else if (username == "admin1" && password == "admin1") {
//             api = `${host.name}/data/userAdmin.json`
//         }
//         else {
//             throw {
//                 response: {
//                     data: {
//                         error: "username or password is incorrect"
//                     }
//                 }
//             }
//         }
//         const response = yield call(axios.get, api)
//         yield put({ type: "user/setUser", payload: response.data })
//         if (check) {
//             window.localStorage.setItem("user", JSON.stringify(response.data))
//         }
//         else {
//             window.sessionStorage.setItem("user", JSON.stringify(response.data))
//         }
//         yield put({ type: "error/setError", payload: { status: "no", message: "" } })

//     }
//     catch (error) {
//         yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
//         console.log("err: ", error)
//     }
// }



function* userRegister(action) {
    try {
        const response = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Register', action.payload)
        console.log("response is: ", response)
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* emailRecovery(action) {
    try {
        console.log(action.payload)
        const { email } = action.payload
        const response = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/SendPasswordResetCode?email=${email}`, { email })
        console.log("response forgot password is: ", response)
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
        console.log(action.payload)
        const { email, otp, newPassword } = action.payload
        const response = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/ResetPassword?email=${email}&otp=${otp}&newPassword=${newPassword}`, action.payload)
        console.log("response forgot password is: ", response)
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userChangePassword(action) {
    try {
        console.log("action.payload is: ", action.payload)
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const response = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/ChangePassword', action.payload, config)
        console.log("response password is: ", response)
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userLogout() {
    window.localStorage.removeItem('user')
    window.sessionStorage.removeItem('user')
    yield put({ type: "user/userLogout", payload: null })
}


function* userSaga() {
    yield all([
        takeEvery("saga/userLogin", userLogin),
        takeEvery("saga/userRegister", userRegister),
        takeEvery("saga/emailRecovery", emailRecovery),
        takeEvery("saga/otpRecovery", otpRecovery),
        takeEvery("saga/userResetPassword", userResetPassword),
        takeEvery("saga/userChangePassword", userChangePassword),
        takeEvery("saga/userLogout", userLogout)
    ])
}

export default userSaga



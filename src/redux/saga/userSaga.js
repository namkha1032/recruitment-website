import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"

function* userLogin(action) {
    try {
        const { username, password, check } = action.payload
        const response = yield call(axios.post, 'http://leetun2k2-001-site1.gtempurl.com/api/Authentication/Login', { username, password })
        console.log("response is: ", response.data)

        yield put({ type: "user/setUser", payload: response.data })
        window.localStorage.setItem("user", JSON.stringify(response.data))

        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const userId = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Authentication/CurrentUser', config)
        console.log("userId is", userId.data)
        yield put({ type: "user/setUser", payload: userId.data })
        /* if (check) {
            window.localStorage.setItem("user", JSON.stringify(response.data))
        }
        else {
            window.sessionStorage.setItem("user", JSON.stringify(response.data))
        } */
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })

    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error.response.data.status)
    }
}

function* userRegister(action) {
    try {
        const { fullname, username, email, password } = action.payload
        const response = yield call(axios.post, 'http://leetun2k2-001-site1.gtempurl.com/api/Authentication/Register', { username, email, password })
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
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userChangePassword(action) {
    try {
        let userlocal = JSON.parse(window.localStorage.getItem("user"))
        console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const response = yield call(axios.post, 'http://leetun2k2-001-site1.gtempurl.com/api/Authentication/ChangePassword', action.payload, config)
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
    yield put({ type: "user/userLogout", payload: null})
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
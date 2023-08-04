import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"

function* userLogin(action) {
    try {
        const { username, password, check } = action.payload
        //console.log("username: ", username, "password: ", password, "check: ", check)
        const responseLogin = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Login', { username, password })
        //console.log("response is: ", responseLogin.data)

        let token = `Bearer ${responseLogin.data.token}`
        //console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        //const responseUserId = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/CurrentUser', config)
        //console.log("userId is", responseUserId.data.userId)

        const responseUserInformation = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/UserLogin', config)
        //console.log("userInformation is", responseUserInformation.data)

        const responseRole = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/GetRole', config)

        console.log("responseRole: ", responseRole.data)
        let userObj = {
            token: responseLogin.data.token,
            userid: responseUserInformation.data.id,
            name: responseUserInformation.data.fullName,
            email: responseUserInformation.data.email,
            birth: responseUserInformation.data.dateOfBirth,
            phone: responseUserInformation.data.phoneNumber,
            address: responseUserInformation.data.address,
            image: responseUserInformation.data.imageURL,
        }

        const responseProfile = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Profile/${responseUserInformation.data.id}`,/* responseUserInformation.data.id , */config)
        console.log("responseProfile: ", responseProfile.data.candidateId)

        if (responseRole.data == "Candidate") {
            userObj.candidateId = responseProfile.data.candidateId
        } else if (responseRole.data == "Recruiter") {
            userObj.recruiterId = responseProfile.data.recruiterId
            userObj.departmentId = responseProfile.data.departmentId
        } else if (responseRole.data == "Interviewer") {
            userObj.interviewerId = responseProfile.data.interviewerId
            userObj.departmentId = responseProfile.data.departmentId
        } 

        // userObj = {
        //     token: responseLogin.data.token,
        //     userid: responseUserId.data.userId,
        //     name: responseUserInformation.data.fullName,
        //     email: responseUserInformation.data.email,
        //     birth: responseUserInformation.data.dateOfBirth,
        //     phone: responseUserInformation.data.phoneNumber,
        //     address: responseUserInformation.data.address,
        //     image: responseUserInformation.data.imageURL,
        // }
        console.log("userobj: ", userObj)
        if (check) {
            window.localStorage.setItem("user", JSON.stringify(userObj))
        }
        else {
            window.sessionStorage.setItem("user", JSON.stringify(userObj))
        }
        yield put({ type: "user/setUser", payload: userObj })
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })

    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.message } })
        console.log("err: ", error.response.data.status)
    }
}

function* userRegister(action) {
    try {
        const response = yield call(axios.post, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Register', action.payload)
        //console.log("response is: ", response)
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* emailRecovery(action) {
    try {
        const { email } = action.payload
        const response = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/SendForgotPasswordCode?email=${email}`, { email })
        //console.log("response forgot password is: ", response)
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userResetPassword(action) {
    try {
        //console.log(action.payload)
        const { email, otp, newPassword } = action.payload
        const response = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/ForgotPassword?email=${email}&otp=${otp}&newPassword=${newPassword}`, action.payload)
        //console.log("response forgot password is: ", response)
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (error) {
        yield put({ type: "error/setError", payload: { status: "yes", message: error.response.data.error } })
        console.log("err: ", error)
    }
}

function* userChangePassword(action) {
    try {
        //console.log("action.payload is: ", action.payload)
        let userlocal = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : JSON.parse(window.sessionStorage.getItem("user"))
        //console.log(userlocal)
        let token = `Bearer ${userlocal.token}`
        //console.log(token)
        const config = {
            headers: { Authorization: token },
        }
        const response = yield call(axios.put, 'https://leetun2k2-001-site1.gtempurl.com/api/Authentication/ChangePassword', action.payload, config)
        //console.log("response password is: ", response)
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
        // takeEvery("saga/otpRecovery", otpRecovery),
        takeEvery("saga/userResetPassword", userResetPassword),
        takeEvery("saga/userChangePassword", userChangePassword),
        takeEvery("saga/userLogout", userLogout)
    ])
}

export default userSaga



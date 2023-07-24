// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* userLogin(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:3001/api/login', action.payload)
        yield call(window.localStorage.setItem, 'user', JSON.stringify(response.data))
        yield put({ type: "user/userLogin", payload: response.data })

    }
    catch (error) {
        console.log("error is: ", error)
    }
}

// function* userGetRole(action) {
//     const response = yield call(axios.get, 'http://localhost:3000/data/role.json', action.payload)
//     //console.log("response is: ", response)
//     yield put({ type: "user/userGetRole", payload: response.data })
// }

function* userRegister(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:3001/api/register', action.payload)
        /* yield call(window.localStorage.setItem, 'user', JSON.stringify(response.data))
        yield put({ type: "user/userRegister", payload: response.data }) */

    }
    catch (error) {
        console.log("error is: ", error)
    }
}

function* userLogout() {
    yield call(window.localStorage.removeItem, 'user')
    yield put({ type: "user/userLogout", payload: null })
}


function* userSaga() {
    yield all([
        takeEvery("saga/userLogin", userLogin),
        takeEvery("saga/userRegister", userRegister),
        takeEvery("saga/userLogout", userLogout)
    ])
}

export default userSaga
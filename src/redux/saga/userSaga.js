// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* loginSaga(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:3001/api/login', action.payload)
        yield call(window.localStorage.setItem, 'user', JSON.stringify(response.data))
        yield put({ type: "user/userLogin", payload: response.data })

    }
    catch (error) {
        console.log("error is: ", error)
    }
}

function* getRoleSaga(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/role.json', action.payload)
    //console.log("response is: ", response)
    yield put({ type: "user/userGetRole", payload: response.data })
}

function* registerSaga(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:3001/api/register', action.payload)
        /* yield call(window.localStorage.setItem, 'user', JSON.stringify(response.data))
        yield put({ type: "user/userRegister", payload: response.data }) */

    }
    catch (error) {
        console.log("error is: ", error)
    }
}

function* logoutSaga() {
    yield call(window.localStorage.removeItem, 'user')
    yield put({ type: "user/userLogout", payload: null })
}


function* userSaga() {
    yield all([
        takeEvery("saga/userLogin", loginSaga),
        takeEvery("saga/userGetRole", getRoleSaga),
        takeEvery("saga/userRegister", registerSaga),
        takeEvery("saga/userLogout", logoutSaga)
    ])
}

export default userSaga
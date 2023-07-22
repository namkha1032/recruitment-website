// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

const userid = 1
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
function* logoutSaga() {
    yield call(window.localStorage.removeItem, 'user')
    yield put({ type: "user/userLogout", payload: null })
}

function* setUserSaga(action) {
    console.log(action.payload)
    const response = yield call(axios.patch, `http://localhost:3001/user/${userid}`, action.payload)
    localStorage.setItem('user1', JSON.stringify(response.data))
    yield put({ type: "user/setUser", payload: response.data })
}

function* getUserSaga(action) {
    console.log(action.payload)
    const response = yield call(axios.get, `http://localhost:3001/user?userid=${userid}`)
    localStorage.setItem('user1', JSON.stringify(response.data))
    yield put({ type: "user/setUser", payload: response.data })
}

function* userSaga() {
    yield all([
        takeEvery("saga/userLogin", loginSaga),
        takeEvery("saga/userLogout", logoutSaga),
        takeEvery("saga/setUser", setUserSaga),
        takeEvery("saga/setUser", getUserSaga)
    ])
}

export default userSaga
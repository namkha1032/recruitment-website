// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* loginSaga(action) {
    try {
        const user = yield call(axios.post, 'http://localhost:3001/api/login', action.payload)
        yield call(window.localStorage.setItem, 'user', JSON.stringify(user))
        yield put({ type: "user/userLogin", payload: user })

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
        takeEvery("saga/userLogout", logoutSaga)
    ])
}

export default userSaga
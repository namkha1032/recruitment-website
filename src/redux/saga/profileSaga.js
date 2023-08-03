// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getProfile(action) {
    const response = yield call(axios.get, `${host.name}/data/profile.json`)
    yield put({ type: "profile/setProfile", payload: response.data })

    
}

function* profileSaga() {
    yield all([
        takeEvery("profileSaga/getProfile", getProfile)
    ])
}

export default profileSaga
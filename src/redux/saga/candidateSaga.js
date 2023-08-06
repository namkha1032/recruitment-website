// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCandidate(action) {
    const response = yield call(axios.get, `/data/candidateid.json?candidateid=${action.payload}`)
    yield put({ type: "candidate/setCandidate", payload: response.data })
}

function* candidateSaga() {
    yield all([
        takeEvery("candidateSaga/getCandidate", getCandidate)
    ])
}

export default candidateSaga
// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getDepartmentInterviewer(action) {
    const response = yield call(axios.get, `${host.name}/data/interviewerlist.json`)
    yield put({ type: "interviewer/setInterviewer", payload: response.data })
}

function* interviewerSaga() {
    yield all([
        takeEvery("saga/getDepartmentInterviewer", getDepartmentInterviewer)
    ])
}

export default interviewerSaga
// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getDepartmentInterviewer(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/interviewerlist.json')
    yield put({ type: "interviewer/setInterviewer", payload: response.data })
}

function* interviewerSaga() {
    yield all([
        takeEvery("saga/getDepartmentInterviewer", getDepartmentInterviewer)
    ])
}

export default interviewerSaga
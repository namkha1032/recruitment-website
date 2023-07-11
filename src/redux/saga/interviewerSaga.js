// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getDepartmentInterviewers(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/departmentinterviewer.json')
    yield put({ type: "interviewer/setInterviewerArray", payload: response.data })
}

function* interviewerSaga() {
    yield all([
        takeEvery("saga/getDepartmentInterviewers", getDepartmentInterviewers)
    ])
}

export default interviewerSaga
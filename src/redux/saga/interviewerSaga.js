// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getDepartmentInterviewer(action) {
    //     const response = yield call(axios.get, `/data/interviewerlist.json`)
    //     yield put({ type: "interviewer/setInterviewer", payload: response.data })
    const responseInterviewerList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer?departmentId=00000000-0000-0000-0000-000000000001`)
}

function* getAllInterviewCandidate() {

    const response = yield call(axios.get, `/data/interviewAllOfCandidate.json`)
    yield put({ type: "interviewCandidate/setInterviewList", payload: response.data })

}

function* interviewerSaga() {
    yield all([
        takeEvery("saga/getDepartmentInterviewer", getDepartmentInterviewer),
        takeEvery("sagatest/getAllInterviewCandidate", getAllInterviewCandidate)
    ])
}


export default interviewerSaga
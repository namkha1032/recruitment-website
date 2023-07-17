// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
// const fs = require("fs");

function* getUpcomingInterview(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/interviewlist.json')
    yield put({ type: "interview/setInterview", payload: response.data })
}

function* getInterviewId(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/interviewid.json')
    yield put({ type: "interview/setInterview", payload: response.data })
}

function* scoreInterview(action) {
    // const abc = yield call(axios.post, "http://localhost:3001/api/interview", action.payload)
    console.log("hehehe")
}


function* interviewSaga() {
    yield all([
        takeEvery("saga/getUpcomingInterview", getUpcomingInterview),
        takeEvery("saga/scoreInterview", scoreInterview),
        takeEvery("saga/getInterviewId", getInterviewId)
    ])
}


export default interviewSaga
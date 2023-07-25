// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"

// const fs = require("fs");

function* getAllInterviewCandidate() {
    console.log("Hello")
    const response = yield call(axios.get, 'http://localhost:3000/data/interviewAllOfCandidate.json')
    yield put({ type: "interviewCandidate/setInterviewList", payload: response.data })

}

function* interviewCandidateSaga() {
    yield all([
        takeLatest("saga/getAllInterviewCandidate", getAllInterviewCandidate),
    ])
}


export default interviewCandidateSaga
// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { error } from "jquery"
// const fs = require("fs");

function* getAllInterviewCandidate() {
    try{
    const response = yield call(axios.get, `${host.name}/data/interviewAllOfCandidate.json`)
    yield put({ type: "interviewListCandidate/setInterviewListCandidate", payload: response.data })
    }
    catch{
        console.log(error)
    }
}

function* interviewCandidateSaga() {
    yield all([
        takeLatest("saga/getAllInterviewCandidate", getAllInterviewCandidate),
    ])
}


export default interviewCandidateSaga
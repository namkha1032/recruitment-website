// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
// const fs = require("fs");

function* getAllCvCandidate() {
    console.log("Hello")
    const response = yield call(axios.get, `${host.name}/data/CVListOfCandidate.json`)
    console.log("hello 1")
    
    yield put({ type: "cvCandidate/setCvList", payload: response.data })
    console.log(response.data)

}

function* cvCandidateSaga() {
    yield all([
        takeEvery("saga/getAllCvCandidate", getAllCvCandidate),
    ])
}


export default cvCandidateSaga
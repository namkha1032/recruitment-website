// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
// const fs = require("fs");

function* getAllApplicationCandidate() {
    console.log("Hello")
    const response = yield call(axios.get, `${host.name}/data/applicationAllOfCandidate.json`)
    yield put({ type: "applicationCandidate/setApplicationList", payload: response.data })

}

function* applicationCandidateSaga() {
    yield all([
        takeLatest("saga/getAllApplicationCandidate", getAllApplicationCandidate),
    ])
}


export default applicationCandidateSaga
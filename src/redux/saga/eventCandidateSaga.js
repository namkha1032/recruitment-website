// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
// const fs = require("fs");

function* getAllEventCandidate() {
    console.log("Hello")
    const response = yield call(axios.get, `${host.name}/data/eventAllOfCandidate.json`)
    yield put({ type: "eventCandidate/setEventList", payload: response.data })

}

function* eventCandidateSaga() {
    yield all([
        takeLatest("saga/getAllEventCandidate", getAllEventCandidate),
    ])
}


export default eventCandidateSaga
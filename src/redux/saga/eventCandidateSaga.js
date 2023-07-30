// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
// const fs = require("fs");

function* getAllEventCandidate() {
    console.log("Hello")
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Event`)
    yield put({ type: "eventCandidate/setEventList", payload: response.data })

}

function* eventCandidateSaga() {
    yield all([
        takeEvery("saga/getAllEventCandidate", getAllEventCandidate),
    ])
}


export default eventCandidateSaga
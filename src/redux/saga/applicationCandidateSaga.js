// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
// const fs = require("fs");

function* getAllApplicationCandidate() {
    console.log("Hello")
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/ApplicationHistory/00000000-0000-0000-0000-000000000001`)
    yield put({ type: "applicationCandidate/setApplicationList", payload: response.data })

}

function* applicationCandidateSaga() {
    yield all([
        takeLatest("saga/getAllApplicationCandidate", getAllApplicationCandidate),
    ])
}


export default applicationCandidateSaga
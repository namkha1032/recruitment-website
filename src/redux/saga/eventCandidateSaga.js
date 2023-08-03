// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { error } from "jquery"
// const fs = require("fs");

function* getAllEventCandidate() {
    try{
    console.log("Hello")
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Event`)
    yield put({ type: "eventCandidate/setEventList", payload: response.data })
    }
    catch{
        console.log(error)
    }
}

function* eventCandidateSaga() {
    yield all([
        takeEvery("saga/getAllEventCandidate", getAllEventCandidate),
    ])
}


export default eventCandidateSaga
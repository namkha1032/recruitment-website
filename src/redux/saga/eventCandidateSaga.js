// import libraries
import { takeEvery, put, all, call, takeLatest,select } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { error } from "jquery"
// const fs = require("fs");

function* getAllEventCandidate(action) {
    try{
        
        // const candidateId = yield select((state) => state.user.candidateId);
        //console.log("CandidateIdOfUser", candidateId);
        const candidateId = "db20f8d0-eb45-43af-9790-e89f48a1a587";
        // console.log("CanidateId:",candidateId);
        const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent/JoinEventDetail/${candidateId}`);
        console.log("api event:",response.data);
    // console.log("Hello")
    // const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Event`)
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
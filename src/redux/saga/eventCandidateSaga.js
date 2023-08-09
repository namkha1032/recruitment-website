// import libraries
import { takeEvery, put, all, call,select } from "redux-saga/effects"
import axios from 'axios'

import { error } from "jquery"
// const fs = require("fs");

function* getAllEventCandidate(action) {
    try{
        const config = {
            headers: { Authorization: action.payload.token },
        }
        const candidateId = yield select((state) => state.user.candidateId);
        const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CandidateJoinEvent/JoinEventDetail/${candidateId}`,config);
   
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
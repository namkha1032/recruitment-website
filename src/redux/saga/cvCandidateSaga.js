// import libraries
import { takeEvery, put, all, call, select } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { error } from "jquery"
// const fs = require("fs");

function* getAllCvCandidate(action) {
    try{
        
    const candidateId =  yield select((state) => state.user.candidateId);
    console.log("Hello")
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs/${candidateId}`)
    console.log("hello 1")
    
    yield put({ type: "cvCandidate/setCvCandidate", payload: response.data })
    console.log(response.data)
    }
    catch{
        console.log(error)
    }

}

function* cvCandidateSaga() {
    yield all([
        takeEvery("saga/getAllCvCandidate", getAllCvCandidate),
    ])
}


export default cvCandidateSaga
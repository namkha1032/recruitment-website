// import libraries
import { takeEvery, put, all, call, select } from "redux-saga/effects"
import axios from 'axios'

import { error } from "jquery"

function* getAllCvCandidate(action) {
    try{
    const candidateId =  yield select((state) => state.user.candidateId);
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs/${candidateId}`)
    yield put({ type: "cvCandidate/setCvCandidate", payload: response.data })
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
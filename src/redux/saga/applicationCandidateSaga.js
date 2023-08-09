// import libraries
import { takeEvery, put, all, call, select} from "redux-saga/effects"
import axios from 'axios'

import { error } from "jquery"
// const fs = require("fs");

function* getAllApplicationCandidate(action) {
    try{
    
    const candidateId = yield select((state) => state.user.candidateId);;
    //yield select((state) => state.user.candidateId);
    const config = {
            headers: { Authorization: action.payload.token },
    }
   
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`,config)
  
    const filteredApplication = response.data.filter((application) => application.cv.candidateId === candidateId)
  
    const transformedData = filteredApplication.map((item) => ({
        applicationId: item.applicationId,
        positionName: item.position.positionName,
        cvid: item.cv.cvid,
        positionId: item.position.positionId,
        dateTime: item.dateTime,
        Status: item.candidate_Status,
        priority: item.priority,
      }));
    
    yield put({ type: "applicationCandidate/setApplicationList", payload: transformedData })
    }
    catch{
        console.log(error)
    }
}

function* applicationCandidateSaga() {
    yield all([
        takeEvery("saga/getAllApplicationCandidate", getAllApplicationCandidate),
    ])
}


export default applicationCandidateSaga
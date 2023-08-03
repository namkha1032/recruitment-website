// import libraries
import { takeEvery, put, all, call, takeLatest , select} from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { error } from "jquery"
// const fs = require("fs");

function* getAllApplicationCandidate(action) {
    try{
    console.log("Hello")
    const candidateId = "db20f8d0-eb45-43af-9790-e89f48a1a587";
    //yield select((state) => state.user.candidateId);
        const config = {
            headers: { Authorization: action.payload.token },
        }
        console.log("CandidateIdOfUser", candidateId);
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`,config)
    console.log("dataBeforeFilter",response.data)
    const filteredApplication = response.data.filter((application) => application.cv.candidateId === candidateId)
    console.log("filterApplication",filteredApplication)
    const transformedData = filteredApplication.map((item) => ({
        applicationId: item.applicationId,
        positionName: item.position.positionName,
        cvid: item.cv.cvid,
        positionId: item.position.positionId,
        dateTime: item.dateTime,
        Status: item.company_Status,
        priority: item.priority,
      }));
      console.log("trànormdata",transformedData)
    yield put({ type: "applicationCandidate/setApplicationList", payload: transformedData })
    }
    catch{
        console.log(error)
    }
}

function* applicationCandidateSaga() {
    yield all([
        takeLatest("saga/getAllApplicationCandidate", getAllApplicationCandidate),
    ])
}


export default applicationCandidateSaga
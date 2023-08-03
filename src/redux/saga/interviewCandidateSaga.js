// import libraries
import { takeEvery, put, all, call, takeLatest, select } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { error } from "jquery"
// const fs = require("fs");

function* getAllInterviewCandidate(action) {
    try{
    //const candidateId = yield select((state) => state.user.candidateId);
    const config = {
        headers: { Authorization: action.payload.token },
    }
    const candidateId = "db20f8d0-eb45-43af-9790-e89f48a1a587";
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`,config)
    console.log("InterviewList",response.data)
    const filterInterview = response.data.filter((interview) => interview.application.cv.candidateId === candidateId)
    console.log("filterInterview",filterInterview)
    const interviewList = filterInterview.map((item) => ({
        interviewId: item.interviewId,
        positionName: item.application.position.positionName,
        Status: item.candidate_Status,
        dateTime: item.application.dateTime,
        address: item.application.position.department.address
    }))
    console.log("interviewListaftermap",interviewList)
    yield put({ type: "interviewListCandidate/setInterviewListCandidate", payload: interviewList })
    }
    catch{
        console.log(error)
    }
}

function* interviewCandidateSaga() {
    yield all([
        takeLatest("saga/getAllInterviewCandidate", getAllInterviewCandidate),
    ])
}


export default interviewCandidateSaga
// import libraries
import { takeEvery, put, all, call, select } from "redux-saga/effects"
import axios from 'axios'
import { error } from "jquery"
import transformDateOnly from "../../utils/transformDateOnly"
// const fs = require("fs");

function* getAllInterviewCandidate(action) {
    try {
        const candidateId = yield select((state) => state.user.candidateId);
        const config = {
            headers: { Authorization: action.payload.token },
        }
        //const candidateId = "9fb97e9c-2394-4a32-a93f-7501c71b6971";
        const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`, config)
        const filterInterview = response.data.filter((interview) => interview.application.cv.candidateId === candidateId)
        const interviewList = filterInterview.map((item) => {
            let shift = {
                shiftstart: item.itrsinterview.shift.shiftTimeStart,
                shiftend: item.itrsinterview.shift.shiftTimeEnd
            }
            let startSmallTen = "0" + shift.shiftstart + ":00:00"
            let startLargeTen = shift.shiftstart + ":00:00"
            let endSmallTen = "0" + shift.shiftend + ":00:00"
            let endLargeTen = shift.shiftend + ":00:00"
            let shiftStart = shift.shiftstart < 10 ? startSmallTen : startLargeTen
            let shiftEnd = shift.shiftend < 10 ? endSmallTen : endLargeTen
            let date = transformDateOnly(item.itrsinterview.dateInterview)
            let time = ` ${shiftStart} to ${shiftEnd}`
            let newInterview = {
                interviewId: item.interviewId,
                positionName: item.application.position.positionName,
                Status: item.candidate_Status,
                dateTime: date + time,
                address: item.application.position.department.address
            }
            return newInterview
        })
        yield put({ type: "interviewListCandidate/setInterviewListCandidate", payload: interviewList })
    }
    catch {
        console.log(error)
    }
}

function* interviewCandidateSaga() {
    yield all([
        takeEvery("saga/getAllInterviewCandidate", getAllInterviewCandidate),
    ])
}


export default interviewCandidateSaga
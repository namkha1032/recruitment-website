// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
// const fs = require("fs");
function* getUpcomingInterviews(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/upcominginterview.json')
    yield put({ type: "interview/setInterviewArray", payload: response.data })

}

function* scoreInterview(action) {
    // yield call(fs.writeFileSync, "../../data/interviewResult.json", action.payload)
    // fs.writeFileSync("data.json", data);
    console.log("actionpayload: ", action.payload)
    yield call(axios.post, "http://localhost:3001/api/interview", action.payload)
}

function* interviewSaga() {
    yield all([
        takeEvery("saga/getUpcomingInterviews", getUpcomingInterviews),
        takeEvery("saga/scoreInterview", scoreInterview)
    ])
}


export default interviewSaga
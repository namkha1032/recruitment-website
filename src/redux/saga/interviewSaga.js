// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getUpcomingInterviews(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/upcominginterview.json')
    yield put({ type: "interview/setInterviewArray", payload: response.data })

}

function* interviewSaga() {
    yield all([
        takeEvery("saga/getUpcomingInterviews", getUpcomingInterviews)
    ])
}

export default interviewSaga
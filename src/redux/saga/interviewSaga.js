// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
// const fs = require("fs");

function* getAllInterview() {
    yield put({ type: "loading/onLoading" })
    yield call(delay, 1500)
    const response = yield call(axios.get, `${host.name}/data/interviewAll.json`)
    yield put({ type: "interviewList/setInterviewList", payload: response.data })
    yield put({ type: "loading/offLoading" })
}

function* getInterviewWithFilter(action) {
    yield put({ type: "loading/onLoading" })
    console.log("Payload:", action.payload)
    yield call(delay, 1500)
    const response = yield call(axios.get, `${host.name}/data/interviewAll.json`)
    yield put({ type: "interviewList/setInterviewList", payload: response.data })
    yield put({ type: "loading/offLoading" })
}

function* getUpcomingInterview(action) {
    const response = yield call(axios.get, `${host.name}/data/interviewlist.json`)
    yield put({ type: "interview/setInterview", payload: response.data })
}

function* getInterviewId(action) {
    const response = yield call(axios.get, `${host.name}/data/interviewid.json`)
    yield put({ type: "interview/setInterview", payload: response.data })
}

function* scoreInterview(action) {
    // const abc = yield call(axios.post, "http://localhost:3001/api/interview", action.payload)
    console.log("hehehe")
}

function* createInterview(action) {
    try {
        // const response = yield call(axios.post, "http://localhost:3001/api/interview/error", action.payload)
        // throw {
        //     response: {
        //         data: {
        //             error: "trung lich roi lam lai di"
        //         }
        //     }
        // }
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
    }
    catch (err) {
        yield put({ type: "error/setError", payload: { status: "yes", message: err.response.data.error } })
        console.log("err: ", err)
    }
}


function* interviewSaga() {
    yield all([
        takeEvery("saga/getUpcomingInterview", getUpcomingInterview),
        takeEvery("saga/scoreInterview", scoreInterview),
        takeEvery("saga/getInterviewId", getInterviewId),
        takeEvery("saga/createInterview", createInterview),
        takeLatest("saga/getAllInterview", getAllInterview),
        takeLatest("saga/getInterviewWithFilter", getInterviewWithFilter),
    ])
}


export default interviewSaga
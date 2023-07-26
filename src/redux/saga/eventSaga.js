import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { formatEventList } from "../../utils/formatEventList"

function* getEventList() {
    yield put({ type: "loading/onLoading" })
    yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/eventList.json`)
    const response = yield call(axios.get, "http://leetun2k2-001-site1.gtempurl.com/api/Event")
    // --- Get Recruiter name
    
    // --- Format EventList
    const data = formatEventList(response.data)
    yield put({ type: "eventList/setEventList", payload: data })
    yield put({ type: "loading/offLoading" })
}

function* getEventListWithFilter(action) {
    console.log(action.payload)
    yield put({ type: "loading/onLoading" })
    yield call(delay, 1500)
    const response = yield call(axios.get, `${host.name}/data/eventList.json`)
    yield put({ type: "eventList/setEventList", payload: response.data })
    yield put({ type: "loading/offLoading" })
}
function* getEvent() {
    const response = yield call(axios.get, `${host.name}/data/eventid.json`)
    yield put({ type: "event/setEvent", payload: response.data })
}
function* eventSaga() {
    yield all([
        takeLatest("saga/getEventList", getEventList),
        takeLatest("saga/getEventListWithFilter", getEventListWithFilter),
        takeEvery("saga/getEvent", getEvent)
    ])
}

export default eventSaga
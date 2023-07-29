import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"
import host from "../host"
import { formatEventList } from "../../utils/formatEventList"

function* getEventList() {
    yield put({ type: "loading/onLoading" })
    yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/eventList.json`)
    const response = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Event")
    // --- Get Recruiter name
    
    // --- Format EventList
    // const data = formatEventList(response.data)
    yield put({ type: "eventList/setEventList", payload: response.data })
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
function* getEvent(action) {
    console.log("eid: ", action.payload)
    const response = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Event/GetEventById/${action.payload}`)
    console.log("res: ", response.data)
    const res = response.data;
    const newObj = {
        eventId: res.eventId,
        eventName: res.eventName,
        content: res.description,
        quantity: 50,
        maxQuantity: res.maxParticipants,
        time: res.datetimeEvent,
        location: res.place,
        createdTime: "16/07/2023 10:30"
    }
    yield put({ type: "event/setEvent", payload: newObj })
}
function* getAllCandidateOfEvent() {
    console.log("eid: ")
    const response = yield call(axios.get, `${host.name}/data/candidateJoinEvent.json`)
    console.log("res: ", response.data)
    yield put({ type: "candidateJoinEvent/setCandidateJoinEvent", payload: response.data })
}
function* eventSaga() {
    yield all([
        takeLatest("saga/getEventList", getEventList),
        takeLatest("saga/getEventListWithFilter", getEventListWithFilter),
        takeEvery("saga/getEvent", getEvent),
        takeEvery("saga/getAllCandidateOfEvent", getAllCandidateOfEvent)
    ])
}

export default eventSaga
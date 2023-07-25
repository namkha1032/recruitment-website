import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"


function* getEventList() {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    const response = yield call(axios.get, 'http://localhost:3000/data/eventList.json')
    yield put({ type: "eventList/setEventList", payload: response.data })
    yield put({type: "loading/offLoading"})
}

function* getEvent() {
    
}

function* eventSaga() {
    yield all([
        takeLatest("saga/getEventList", getEventList)
    ])
}

export default eventSaga
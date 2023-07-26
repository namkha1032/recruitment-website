// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getShift(action) {
    const response = yield call(axios.get, `${host.name}/data/shiftlist.json`)
    yield put({ type: "shift/setShift", payload: response.data })

}

function* shiftSaga() {
    yield all([
        takeEvery("saga/getShift", getShift)
    ])
}

export default shiftSaga
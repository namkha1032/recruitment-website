// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getShift(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/shiftlist.json')
    yield put({ type: "shift/setShift", payload: response.data })

}

function* shiftSaga() {
    yield all([
        takeEvery("saga/getShift", getShift)
    ])
}

export default shiftSaga
// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getShifts(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/shift.json')
    yield put({ type: "shift/setShiftArray", payload: response.data })

}

function* shiftSaga() {
    yield all([
        takeEvery("saga/getShifts", getShifts)
    ])
}

export default shiftSaga
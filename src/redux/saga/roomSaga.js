// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getRoom(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/roomlist.json')
    yield put({ type: "room/setRoom", payload: response.data })

}

function* roomSaga() {
    yield all([
        takeEvery("saga/getRoom", getRoom)
    ])
}

export default roomSaga
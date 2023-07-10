// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getRooms(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/room.json')
    yield put({ type: "room/setRoomArray", payload: response.data })

}

function* roomSaga() {
    yield all([
        takeEvery("saga/getRooms", getRooms)
    ])
}

export default roomSaga
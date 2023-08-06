// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getRoom(action) {
    // const response = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Room`)
    // const resList = response.data
    // let newList = []
    // for (let res of resList) {
    //     const newObj = {
    //         roomid: res.roomId,
    //         roomname: res.roomName
    //     }
    //     newList = newList.concat(newObj)
    // }
    // yield put({ type: "room/setRoom", payload: newList })
    const responsefake = yield call(axios.get, `/data/roomlist.json`)
    yield put({ type: "room/setRoom", payload: responsefake.data })
}

function* roomSaga() {
    yield all([
        takeEvery("saga/getRoom", getRoom)
    ])
}

export default roomSaga
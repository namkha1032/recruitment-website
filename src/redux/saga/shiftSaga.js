// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getShift(action) {
    // const response = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Shift`)
    // const resList = response.data
    // console.log("resList: ", resList)
    // let newList = []
    // for (let res of resList) {
    //     const newObj = {
    //         shiftid: res.shiftId,
    //         shiftstart: res.shiftTimeStart,
    //         shiftend: res.shiftTimeEnd
    //     }
    //     newList = newList.concat(newObj)
    // }
    // console.log("newl: ", newList)
    // newList.sort((a, b) => {
    //     return a.shiftstart - b.shiftstart;
    // });
    // console.log("newl sorted: ", newList)
    // yield put({ type: "shift/setShift", payload: newList })
    const responsefake = yield call(axios.get, `/data/shiftlist.json`)
    yield put({ type: "shift/setShift", payload: responsefake.data })
}
function* shiftSaga() {
    yield all([
        takeEvery("saga/getShift", getShift)
    ])
}

export default shiftSaga
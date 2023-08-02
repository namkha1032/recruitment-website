// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"

function* getPositioninfor(action) {
    const recruitmentid = action.payload
    const response1 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Position')
    const position = response1.data.filter((prop)=>prop.positionId===recruitmentid)
    console.log(position)

    const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Requirement`)
    const requirement= response2.data.filter((prop)=>prop.positionId===position[0].positionId && prop.isDeleted===false)
    yield put({ type: "positionInfor/setPositionInfor", payload: position })
    yield put({ type: "positionRequire/setPositionRequire", payload: requirement })

    // const response1 = yield call(axios.get, `${host.name}/data/positionInfor.json`)
    // const position = response1.data

    // yield put({ type: "positionInfor/setPositionInfor", payload: position })
    // yield put({ type: "positionRequire/setPositionRequire", payload: position[0].requirement })
}

function* positionInforSaga() {
    yield all([
        takeEvery("saga/getPositioninfor", getPositioninfor),
    ])
}

export default positionInforSaga
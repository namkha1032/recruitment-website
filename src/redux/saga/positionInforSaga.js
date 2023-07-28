// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"

function* getPositioninfor(action) {
    // const response1 = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Position')
    // const postition = response1.data.filter((prop)=>prop.positionId==="00000000-0000-0000-0000-000000000001")
    // console.log(postition)

    // const response2 = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Requirement`)
    // const requirement= response2.data.filter((prop)=>prop.positionId===postition[0].positionId)
    const response1 = yield call(axios.get, `${host.name}/data/positionInfor.json`)
    const position = response1.data

    yield put({ type: "positionInfor/setPositionInfor", payload: position })
    yield put({ type: "positionRequire/setPositionRequire", payload: position[0].requirement })
    // yield put({ type: "cvHasCertificate/setCvHasCertificate", payload: cvCertificate })
}

function* positionInforSaga() {
    yield all([
        takeEvery("saga/getPositioninfor", getPositioninfor),
    ])
}

export default positionInforSaga
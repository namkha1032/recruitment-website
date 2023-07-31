// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCandidate(action) {
    const response = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${action.payload}`)
    yield put({ type: "candidate/setCandidate", payload: response.data })
    // const response = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Candidate/${action.payload}`)
    // const fomat = {
    //     userid: response.data.userId,
    //     name:response.data.fullName,
    //     birth:response.data.dateOfBirth,
    //     address:response.data.address,
    //     image:response.data.imageURL,
    //     email: 'example@hmail.com',
    //     phone: '0123456789'
    // }
    // yield put({ type: "candidate/setCandidate", payload: fomat })
}

function* candidateSaga() {
    yield all([
        takeEvery("saga/getCandidate", getCandidate)
    ])
}

export default candidateSaga
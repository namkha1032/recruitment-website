// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getCv(action) {
    const response1 = yield call(axios.get, 'http://localhost:3000/data/cvid.json')
    const response2 = yield call(axios.get, `http://localhost:3000/data/candidateid.json?candidateid=${response1.data.userid}`)
    // yield put({ type: "saga/getCandidate", payload: response1.data.userid })
    yield put({ type: "cv/setCv", payload: response1.data })
    yield put({ type: "candidate/setCandidate", payload: response2.data })
}

function* getCvList(action) {
    // const reponse = yield call(axios.get, 'http://localhost:3000/data/CVList.json')
    const reponse = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Cv')
    yield put({ type: 'cvlist/setCvList', payload: reponse.data })
}

function* cvSaga() {
    yield all([
        takeEvery("saga/getCv", getCv),
        takeEvery("saga/getCvList", getCvList)
    ])
}

export default cvSaga
// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getCvinfor(action) {
    const response1 = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Cv')
    const cv = response1.data.filter((prop)=>prop.cvId==="632d2789-f0dc-4f47-965f-f3a8cffd6f40")

    const response2 = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill`)
    const cvSkill= response2.data.filter((prop)=>prop.cvid===cv[0].cvId)

    const response3 = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Certificate`)
    const cvCertificate= response3.data.filter((prop)=>prop.cvid===cv[0].cvId)


    yield put({ type: "cvInfor/setCvInfor", payload: cv })
    yield put({ type: "cvHasSkill/setCvHasSkill", payload: cvSkill })
    yield put({ type: "cvHasCertificate/setCvHasCertificate", payload: cvCertificate })
}

function* cvInforSaga() {
    yield all([
        takeEvery("saga/getCvinfor", getCvinfor),
    ])
}

export default cvInforSaga
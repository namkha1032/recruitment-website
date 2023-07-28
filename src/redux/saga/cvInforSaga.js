// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"

function* getCvinfor(action) {
    const response1 = yield call(axios.get, `${host.name}/data/cvinfor.json`)
    const cv=response1.data
    // const response1 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Cv')
    // const cv = response1.data.filter((prop)=>prop.cvid==="d1c51600-6272-4c78-9b50-36af9d403a28")
    // console.log(cv)

    // const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill`)
    // const cvSkill= response2.data.filter((prop)=>prop.cvid===cv[0].cvid)
    // // const cvSkill= cv[0].skills
    // // console.log(cvSkill)

    // const response3 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Certificate`)
    // const cvCertificate= response3.data.filter((prop)=>prop.cvid===cv[0].cvid)
    // // const cvCertificate= cv[0].certificates
console.log(cv)

    yield put({ type: "cvInfor/setCvInfor", payload: cv})
    yield put({ type: "cvHasSkill/setCvHasSkill", payload: cv[0].skills })
    yield put({ type: "cvHasCertificate/setCvHasCertificate", payload: cv[0].certificates  })
}

function* cvInforSaga() {
    yield all([
        takeEvery("saga/getCvinfor", getCvinfor),
    ])
}

export default cvInforSaga
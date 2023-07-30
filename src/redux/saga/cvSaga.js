// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCv(action) {
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
    // const response2 = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${response1.data.userid}`)
    const response2 = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${0}`)

    // yield put({ type: "saga/getCandidate", payload: response1.data.userid })
    console.log(response1.data[0])
    yield put({ type: "cv/setCv", payload: {...response1.data[0],"languages": [
        {
            "cvlanguageid": 0,
            "name": "English",
            "decription": ""
        },
        {
            "cvlanguageid": 1,
            "name": "Korean",
            "decription": ""
        },
        {
            "cvlanguageid": 2,
            "name": "Chinese",
            "decription": ""
        }
    ]} })
    yield put({ type: "candidate/setCandidate", payload: response2.data })
}

function* getCvList(action) {
    try{
        const reponse = yield call(axios.get, `${host.name}/data/CVList.json`)
        // const reponse1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/GetCandidateCvs`) 
        // const reponse = yield call(axios.get, `${host.name}/data/CVList.json`)
        // const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
        yield put({ type: 'cvlist/setCvList', payload: reponse.data })
    } catch(error){
        console.log(error)
    }
    
}

function* cvSaga() {
    yield all([
        takeEvery("saga/getCv", getCv),
        takeEvery("saga/getCvList", getCvList)
    ])
}

export default cvSaga
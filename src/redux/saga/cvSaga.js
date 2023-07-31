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
        }],"certificates": [...response1.data[0].certificates,
        {
            "certificateId": "8483e625-6146-48ec-9abc-e7b3452a48a7",
            "certificateName": "Javascript",
            "description": "Javascript 1 năm",
            "organizationName": "organize",
            "dateEarned": "2023-07-01T00:00:00",
            "expirationDate": null,
            "link": "link",
            "cvid": "d1c51600-6272-4c78-9b50-36af9d403a28",
            "isDeleted": false
          },
          {
            "certificateId": "8483e625-6146-48ec-9abc-e7b3452a48a7",
            "certificateName": "ReactJS ",
            "description": "ReactJS quá dễ",
            "organizationName": "organize",
            "dateEarned": "2023-07-05T00:00:00",
            "expirationDate": null,
            "link": "link",
            "cvid": "d1c51600-6272-4c78-9b50-36af9d403a28",
            "isDeleted": false
          },
          {
            "certificateId": "8483e625-6146-48ec-9abc-e7b3452a48a7",
            "certificateName": "C/C++",
            "description": "C/C++ .......",
            "organizationName": "organize",
            "dateEarned": "2023-07-12T00:00:00",
            "expirationDate": null,
            "link": "link",
            "cvid": "d1c51600-6272-4c78-9b50-36af9d403a28",
            "isDeleted": false
          }
    ]
    } })
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
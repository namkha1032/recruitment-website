// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getCv(action) {
    const response1 = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Cv`)
    // const response2 = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${response1.data.userid}`)
    const response2 = yield call(axios.get, `${host.name}/data/candidateid.json?candidateid=${0}`)

    // yield put({ type: "saga/getCandidate", payload: response1.data.userid })
    console.log(response1.data[0])
    yield put({ type: "cv/setCv", payload: {...response1.data[0],"skills": [
        {
            "cvskillid": 0,
            "skillname": "HTML CSS",
            "decription": "HTML CSS"
        },
        {
            "cvskillid": 1,
            "skillname": "ReactJS",
            "decription": "ReactJS"
        },
        {
            "cvskillid": 2,
            "skillname": "JavaScript",
            "decription": "JavaScript"
        },
        {
            "cvskillid": 3,
            "skillname": "Python",
            "decription": "Pythonssss"
        }
    ],
    "languages": [
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
    ],"certificates": [
        {
            "certificateid": 0,
            "name": "HTML CSS",
            "decription": "HTML CSS",
            "Orgranizationname": "HTML CSS",
            "dateearned": "12-12-2022",
            "expirationdate": "12-12-2023",
            "link": "abc.com"
        },
        {
            "certificateid": 1,
            "name": "Javasctipt",
            "decription": "Javasctipt",
            "Orgranizationname": "Javasctipt",
            "dateearned": "12-12-2022",
            "expirationdate": "12-12-2023",
            "link": "abc.com"
        },
        {
            "certificateid": 2,
            "name": "HTML CSS",
            "decription": "HTML CSS",
            "Orgranizationname": "HTML CSS",
            "dateearned": "12-12-2022",
            "expirationdate": "12-12-2023",
            "link": "abc.com"
        },
        {
            "certificateid": 3,
            "name": "HTML CSS",
            "decription": "HTML CSS",
            "Orgranizationname": "HTML CSS",
            "dateearned": "12-12-2022",
            "expirationdate": "12-12-2023",
            "link": "abc.com"
        }
        
    ],"experience":"My journey with React.js has been an enriching experience. I embraced its component-based architecture, which allowed me to create reusable and organized UI components. Understanding state and props empowered me to build dynamic and interactive user interfaces. React's virtual DOM impressed me with its performance optimizations, resulting in faster rendering. Working with React's ecosystem of libraries and tools expanded my capabilities. The supportive React.js community and resources have been invaluable. Overall, I've gained a deep appreciation for React.js and look forward to further growth and innovation with this powerful library.","education": "Đại học",} })
    yield put({ type: "candidate/setCandidate", payload: response2.data })
}

function* getCvList(action) {
    const reponse = yield call(axios.get, 'http://localhost:3000/data/CVList.json')
    // const reponse = yield call(axios.get, `${host.name}/data/CVList.json`)
    // const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`)
    yield put({ type: 'cvlist/setCvList', payload: reponse.data })
}

function* cvSaga() {
    yield all([
        takeEvery("saga/getCv", getCv),
        takeEvery("saga/getCvList", getCvList)
    ])
}

export default cvSaga
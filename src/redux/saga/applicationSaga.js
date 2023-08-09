import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";
import { formatPositionList } from "../../utils/formatPositionList";
import recommendCV from "../../utils/recommendCV";
function* getApplication(action) {
    // const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/${action.payload}`);
    // const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload}`)
    // console.log("num", action.payload);
    // console.log("resapp", response.data)
    // console.log('resapp1', response1.data)
    // const application = response.data.filter((props)=> props.positionId === response1.data.positionId);
    // console.log("appsaga", application);

    // const response2 = yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById/${action.payload}`)
    // console.log("res2", response2.data);
    // yield put({ type: 'application/setApplication', payload: application })
    try {

        const config = {
            headers: {
                Authorization: action.payload.token,
            }
        };
        // const reponse = yield call(axios.get, `/data/applicationList.json`)
        const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload.recruitmentid}`, config)
        const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`, config)
        const responseCandidateList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`, config)
        const responseCvSkillList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CvHasSkill`, config)
        let candidatelist = []
        let application = response2.data.filter((prop) => prop.position.positionId === response1.data.positionId);

        const responseCvList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv`, config)
        for (let i = 0; i < application.length; i++) {
            let findCv = responseCvList.data.find((item) => {
                return item.cvid == application[i].cv.cvid
            })
            const findCandidate = responseCandidateList.data.find((item) => {
                return item.candidateId == application[i].cv.candidateId
            })
            let cvSkillList = responseCvSkillList.data.filter((item) => {
                return item.cvid == application[i].cv.cvid
            })
            let newSkillList = findCv.skills.map(skill => {
                const findCvSkill = cvSkillList.find((cvsk) => {
                    return cvsk.skillId == skill.skillId
                })
                let newSkill = {
                    ...skill,
                    years: findCvSkill.experienceYear
                }
                return newSkill
            })
            findCv = {
                ...findCv,
                skills: newSkillList
            }
            candidatelist.push({ ...application[i], ...findCandidate, findCv: findCv, findPosition: response1.data })
        }
        candidatelist = yield call(recommendCV, candidatelist)
        // const test = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate/db20f8d0-eb45-43af-9790-e89f48a1a587`, config)
        // console.log('testcandidate', test.data.user.fullName);
        // candidatelist.push(mergeobject);

        yield put({ type: 'application/setApplication', payload: candidatelist })
    } catch (error) {
        if (error) {
            yield put({ type: 'applicationError/onError', payload: 'error' })
        }
    }


}

function* getInfoApplication(action) {
    try {
        const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`)
        const data = response.data.filter(item => item.applicationId === action.payload.applicationid)
        if (data.length === 0)
            yield put({ type: 'infoApplication/setInfoApplication', payload: 'none' })
        else {
            const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`)
            const data = response.data.filter(item => item.applicationId === action.payload.applicationid)
            if (data.length === 0)
                yield put({ type: 'infoApplication/setInfoApplication', payload: 'none' })
            else {
                const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate/${data[0].cv.candidateId}`)
                const response3 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Profile/${response2.data.userId}`, {
                    headers: { Authorization: `Bearer ${action.payload.token}` }
                })

                const data1 = {
                    name: response3.data.fullName,
                    email: response3.data.email,
                    phone: response3.data.phoneNumber,
                    address: response3.data.address,
                    image: response3.data.imageURL,
                }
                yield put({ type: "candidate/setCandidate", payload: data1 })
                yield put({ type: 'infoApplication/setInfoApplication', payload: data[0] })
            }
        }

    } catch (error) {
        console.log(error)
    }


}
function* submitCv(action) {
    yield put({ type: 'submitNotify/setSubmitNotify', payload: 'loading' })
    try {

        const config = {
            headers: {
                Authorization: action.payload.token,
            }
        };
        const reponse = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Application`, action.payload, config)
        yield put({ type: 'submitcv/setSubmitcv', payload: reponse.data })
        yield put({ type: 'submitNotify/setSubmitNotify', payload: 'success' })
    } catch (error) {
        yield put({ type: 'submitNotify/setSubmitNotify', payload: 'errorsubmit' })
        console.log(error)
    }
}

function* updatesubmitCv(action) {
    yield put({ type: 'submitNotify/setSubmitNotify', payload: 'loading' })
    try {
        const config = {
            headers: {
                Authorization: action.payload.token,
            }
        };
        const reponse = yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload.applicationId}`, action.payload, config)
        yield put({ type: 'submitNotify/setSubmitNotify', payload: 'updatesuccess' })
    } catch (error) {
        yield put({ type: 'submitNotify/setSubmitNotify', payload: 'errorupdate' })
    }
}

function* getApplicationStatus(action) {
    try {

        const config = {
            headers: {
                Authorization: action.payload.token
            }
        };
        const application = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`, config);
        const allcandidate = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Candidate`, config);
        const candidate = allcandidate.data.filter((prop) => prop.user.id === action.payload.userid);
        const application_status = application.data.filter((prop) => prop.cv.candidateId === candidate[0].candidateId && prop.position.positionId === action.payload.positionId)
        yield put({ type: 'applicationStatus/setApplicationStatus', payload: application_status, config })
    } catch (error) {
        yield put({ type: 'applicationStatusError/onError', payload: 'error' })
    }
}


function* rejectApplication(action) {

    try {
        const response = yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Application/UpdateStatusApplication/${action.payload.applicationid}?Candidate_Status=${action.payload.candidate_Status}&Company_Status=Rejected`, action.payload, {
            headers: {
                Authorization: `Bearer ${action.payload.token}`
            },
        })
        let newInfoApp = {
            ...action.payload.infoApplication,
            company_Status: "Rejected"
        }
        yield put({ type: "error/setError", payload: { status: "no", message: "" } })
        yield put({ type: 'infoApplication/setInfoApplication', payload: newInfoApp })
        console.log(response.data)
    } catch (error) {
        console.log("error")
    }

}

function* applicationSaga() {
    yield all([
        takeEvery('applicationSaga/updatesubmitCv', updatesubmitCv),
        takeEvery('applicationSaga/getApplicationStatus', getApplicationStatus),
        takeEvery('applicationSaga/submitCv', submitCv),
        takeEvery('applicationSaga/getApplication', getApplication),
        takeEvery('applicationSaga/getInfoApplication', getInfoApplication),
        takeEvery('applicationSaga/rejectApplication', rejectApplication),
    ])
}

export default applicationSaga;
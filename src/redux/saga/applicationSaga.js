import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";
import { formatPositionList } from "../../utils/formatPositionList";
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
        // const reponse = yield call(axios.get, `${host.name}/data/applicationList.json`)
        const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload}`)
        yield put({
            type: 'application/setApplication', payload: {
                ...reponse.data, "cv": {
                    "cvid": "00000000-0000-0000-0000-000000000001",
                    "candidateId": "00000000-0000-0000-0000-000000000001",
                    "experience": "string",
                    "cvPdf": "string",
                    "cvName": "string",
                    "introduction": "string",
                    "education": "string",
                    "isDeleted": true,
                    "skills": [],
                    "certificates": []
                },

          "position": formatPositionList([{
            "positionId": "00000000-0000-0000-0000-000000000001",
            "positionName": "Junior",
            "description": "no",
            "requirementId": "00000000-0000-0000-0000-000000000000",
            "requirement": null,
            "salary": 100,
            "maxHiringQty": 10,
            "startDate": "2001-01-01T00:00:00",
            "endDate": "2009-09-09T00:00:00",
            "departmentId": "00000000-0000-0000-0000-000000000001",
            "department": null,
            "languageId": "00000000-0000-0000-0000-000000000001",
            "language": null,
            "isDeleted": false
          }])[0] ,
          company_Status: "Đang xử lý" }})
          yield put ({type:'position/setPosition',payload:{
            "positionId": "00000000-0000-0000-0000-000000000001",
            "positionName": "Junior",
            "description": "no",
            "requirementId": "00000000-0000-0000-0000-000000000000",
            "requirement": null,
            "salary": 100,
            "maxHiringQty": 10,
            "startDate": "2001-01-01T00:00:00",
            "endDate": "2009-09-09T00:00:00",
            "departmentId": "00000000-0000-0000-0000-000000000001",
            "department": null,
            "languageId": "00000000-0000-0000-0000-000000000001",
            "language": null,
            "isDeleted": false
          } })
    } catch (error) {
        console.log(error)
    }



}


function* submitCv(action) {
    try {
        const reponse = yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Application`, action.payload)
        console.log("submitsaga", reponse.data)
        yield put({ type: 'submitcv/setSubmitcv', payload: reponse.data })
    } catch (error) {
        console.log("error")
    }

}

function* getApplicationForCreatingInterview(action) {
    // const responseApplication = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload}`)
    // --------hàng tạm thời------------
    const responseAppList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`)
    const appItem = responseAppList.data.find((item) => {
        return item.applicationId == action.payload
    })
    // ---------------------------------
    yield put({ type: "application/setApplication", payload: appItem })
}
function* applicationSaga() {
    yield all([
        takeEvery('saga/submitCv', submitCv),
        takeEvery('saga/getApplication', getApplication),
        takeEvery('saga/getApplicationForCreatingInterview', getApplicationForCreatingInterview),
    ])
}

export default applicationSaga;
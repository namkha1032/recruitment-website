import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";
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
        const reponse = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Cv/${action.payload}`)
        yield put({ type: 'application/setApplication', payload: reponse.data })
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
function* applicationSaga() {
    yield all([
        takeEvery('saga/submitCv', submitCv),
        takeEvery('saga/getApplication', getApplication),
    ])
}

export default applicationSaga;
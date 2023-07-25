import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import host from "../host";
function* getApplication(action) {
    const reponse = yield call(axios.get, `${host.name}/data/applicationList.json`)
    yield put({ type: 'application/setApplication', payload: reponse.data })

}


function* postCv(action) {
    const reponse = yield call(axios.post, `${host.name}/data/applicationList.json`)
    yield put({ type: 'submitcv/setSubmitcv', payload: reponse.data })

}
function* applicationSaga() {
    yield all([
        takeEvery('saga/getApplication', getApplication),
        
    ])
}

export default applicationSaga;
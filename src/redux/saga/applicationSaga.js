import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* getApplication(action) {
    const reponse = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Candidate/GetAllApplications')
    
    yield put({ type: 'application/setApplication', payload: reponse.data })
}

function* applicationSaga() {
    yield all([
        takeEvery('saga/getApplication', getApplication)
    ])
}

export default applicationSaga;
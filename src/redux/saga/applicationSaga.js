import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* getApplication(action) {
    const reponse = yield call(axios.get, 'http://localhost:3000/data/applicationList.json')
    yield put({ type: 'application/setApplication', payload: reponse.data })

}


function* postCv(action) {
    const reponse = yield call(axios.post, 'http://localhost:3000/data/applicationList.json')
    yield put({ type: 'submitcv/setSubmitcv', payload: reponse.data })

}
function* applicationSaga() {
    yield all([
        takeEvery('saga/getApplication', getApplication),
        takeEvery('saga/postCv', getApplication)
    ])
}

export default applicationSaga;
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function* getPosition(action) {
    const reponse = yield call(axios.get, 'http://localhost:3000/data/detailposition.json')

    yield put({ type: 'position/setPosition', payload: reponse.data })
}

function* positionSaga() {
    yield all([
        takeEvery('saga/getPosition', getPosition)
    ])
}

export default positionSaga
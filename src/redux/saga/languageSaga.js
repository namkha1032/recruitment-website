import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getLanguage(action) {
    const response = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Language')
    yield put({ type: "language/setLanguage", payload: response.data })
}

function* languageSaga() {
    yield all([
        takeEvery("saga/getLanguage", getLanguage)
    ])
}

export default languageSaga














































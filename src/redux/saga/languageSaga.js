import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getLanguage(action) {
    // const response = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Language')
    const response = yield call(axios.get, `${host.name}/data/languageList.json`)
    yield put({ type: "language/setLanguage", payload: response.data })
}

function* languageSaga() {
    yield all([
        takeEvery("saga/getLanguage", getLanguage)
    ])
}

export default languageSaga














































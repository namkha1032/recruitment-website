import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getLanguage(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/languageList.json')
    yield put({ type: "language/setLanguage", payload: response.data })
}

function* LanguageSaga() {
    yield all([
        takeEvery("saga/getLanguage", getLanguage)
    ])
}

export default LanguageSaga














































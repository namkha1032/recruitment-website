import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getSkill(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/skillList.json') 
    yield put({ type: "skill/setSkill", payload: response.data })
    
}

function* skillSaga() {
    yield all([
        takeEvery("saga/getSkill", getSkill)
    ])
}

export default skillSaga
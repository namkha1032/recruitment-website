import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getRecruitmentList() {
    const response = yield call(axios.get, 'http://localhost:3000/data/recruitmentList.json')
    yield put({ type: "recruitment/setRecruitment", payload: response.data })
}

function* recruitmentSaga() {
    yield all([
        takeLatest("saga/getRecruitmentList", getRecruitmentList)
    ])
}

export default recruitmentSaga
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"

function* getRecruitmentList() {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    const response = yield call(axios.get, 'http://localhost:3000/data/recruitmentList.json')
    yield put({ type: "recruitment/setRecruitment", payload: response.data })
    yield put({type: "loading/offLoading"})
}

function* getRecruitmentListWithDepartment(action) {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    console.log(action.payload)
    const response = yield call(axios.get, 'http://localhost:3000/data/recruitmentListD.json')
    yield put({type: "recruitment/setRecruitment", payload: response.data })
    yield put({type: "loading/offLoading"})
}

function* getRecruitmentListWithLanguage(action) {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    console.log(action.payload)
    const response = yield call(axios.get, 'http://localhost:3000/data/recruitmentListL.json')
    yield put({type: "recruitment/setRecruitment", payload: response.data })
    yield put({type: "loading/offLoading"})
}

function* getRecruitmentListWithStatus(action) {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    console.log(action.payload)
    const response = yield call(axios.get, 'http://localhost:3000/data/recruitmentListS.json')
    yield put({type: "recruitment/setRecruitment", payload: response.data })
    yield put({type: "loading/offLoading"})
}

function* updateRecruitmentList(action) {
    const response = yield call(axios.put, "", action.payload)
    yield put({type: "recruitment/setRecruitment", payload: response.data})
}

function* recruitmentSaga() {
    yield all([
        takeLatest("saga/getRecruitmentList", getRecruitmentList),
        takeLatest("saga/updateRecruitmentList", updateRecruitmentList),
        takeLatest("saga/getRecruitmentListWithDepartment", getRecruitmentListWithDepartment),
        takeLatest("saga/getRecruitmentListWithLanguage", getRecruitmentListWithLanguage),
        takeLatest("saga/getRecruitmentListWithStatus", getRecruitmentListWithStatus)
    ])
}

export default recruitmentSaga
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getDepartment(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/departmentList.json')
    console.log(response)
    yield put({ type: "department/setDepartment", payload: response.data })
}

function* departmentSaga() {
    yield all([
        takeEvery("saga/getDepartment", getDepartment)
    ])
}

export default departmentSaga
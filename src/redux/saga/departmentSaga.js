import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getDepartment(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/departmentList.json')
    yield put({ type: "department/setDepartment", payload: response.data })
}

function* DepartmentSaga() {
    yield all([
        takeEvery("saga/getDepartment", getDepartment)
    ])
}

export default DepartmentSaga
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getDepartment(action) {
    const response = yield call(axios.get, `${host.name}/data/departmentList.json`)
    yield put({ type: "department/setDepartment", payload: response.data })
}

function* departmentSaga() {
    yield all([
        takeEvery("saga/getDepartment", getDepartment)
    ])
}

export default departmentSaga
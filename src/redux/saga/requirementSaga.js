import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getRequiment(action) {
    
    const response = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Requirement') 
    yield put({ type: "requirement/setRequirement", payload: response.data })

}

function* requirementSaga() {
    yield all([
        takeEvery("recruitmentSaga/getRequirement", getRequiment)
    ])
}

export default requirementSaga
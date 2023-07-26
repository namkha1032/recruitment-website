import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import host from "../host"
function* getSkill(action) {
    //http://leetun2k2-001-site1.gtempurl.com/api/Skill
    //http://localhost:3000/data/skillList.json
    const response = yield call(axios.get, 'http://leetun2k2-001-site1.gtempurl.com/api/Skill') 
    yield put({ type: "skill/setSkill", payload: response.data })

}

function* skillSaga() {
    yield all([
        takeEvery("saga/getSkill", getSkill)
    ])
}

export default skillSaga
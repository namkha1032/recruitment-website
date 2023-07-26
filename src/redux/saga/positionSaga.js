import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { delay } from "../../utils/delay"
import host from "../host";

function* getPositionList() {
    yield put({ type: "loading/onLoading" })
    yield call(delay, 1500)
    const response = yield call(axios.get, `${host.name}/data/positionList.json`)
    yield put({ type: "positionList/setPositionList", payload: response.data })
    yield put({ type: "loading/offLoading" })
}

function* getPositionListWithFilter(action) {
    console.log(action.payload)
    yield put({ type: "loading/onLoading" })
    yield call(delay, 1500)
    const response = yield call(axios.get, `${host.name}/data/positionListD.json`)
    yield put({ type: "positionList/setPositionList", payload: response.data })
    yield put({ type: "loading/offLoading" })
}

function* updatePositionList(action) {
    const response = yield call(axios.put, "", action.payload)
    yield put({ type: "positionList/setPositionList", payload: response.data })
}


function* getPosition(action) {
    const reponse = yield call(axios.get, `${host.name}/data/detailposition.json`)
    yield put({ type: 'position/setPosition', payload: reponse.data })
}
// function *getDetailPosition(action){
//     const reponse = yield call(axios.get, 'http://localhost:3001/positions?PositionId=${act}')
//     yield put({ type: 'detail/setDetail', payload: reponse.data})

// }
function* positionSaga() {
    yield all([
        takeEvery('saga/getPosition', getPosition),
        takeLatest("saga/getPositionList", getPositionList),
        takeLatest("saga/updatePositionList", updatePositionList),
        takeLatest("saga/getPositionListWithFilter", getPositionListWithFilter),
    ])
}

export default positionSaga
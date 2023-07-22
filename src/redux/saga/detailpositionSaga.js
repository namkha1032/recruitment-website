import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function *getDetailposition(action){
    const reponse = yield call(axios.get, 'http://localhost:3000/data/detailposition.json')
    yield put({type: 'detailposition/setDetailposition', payload: reponse.data})
}

function *DetailpositionSaga(){
    yield all([
        takeEvery('saga/getDetailposition', getDetailposition)
    ])
}

export default DetailpositionSaga
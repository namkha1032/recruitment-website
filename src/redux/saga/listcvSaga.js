import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function *getListcv(action){
    const reponse = yield call(axios.get, 'http://localhost:3000/data/CVList.json')
    yield put({type: 'listcv/setListcv', payload: reponse.data})
}

function *ListcvSaga(){
    yield all ([
        takeEvery("saga/getListcv", getListcv)
    ])
}

export default ListcvSaga
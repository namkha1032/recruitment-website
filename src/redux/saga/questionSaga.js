// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getInterviewQuestion(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/questionlist.json')
    yield put({ type: "question/setInterviewQuestion", payload: response.data })
}

function* getQuestion(action) {
    yield put({ type: "question/setQuestion", action: action.payload })
}


function* questionSaga() {
    yield all([
        takeEvery("saga/getInterviewQuestion", getInterviewQuestion),
        takeEvery("saga/getQuestion", getQuestion)
    ])
}

export default questionSaga
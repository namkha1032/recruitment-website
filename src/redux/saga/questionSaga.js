// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { delay } from "../../utils/delay"

function* getAllQuestion() {
    yield put({type: "loading/onLoading"})
    yield call(delay, 1500)
    const response = yield call(axios.get, 'http://localhost:3000/data/questionlist.json')
    yield put({ type: "questionList/setQuestionList", payload: response.data })
    console.log(response.data)
    yield put({type: "loading/offLoading"})
}

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
        takeEvery("saga/getQuestion", getQuestion),
        takeEvery("saga/getAllQuestion", getAllQuestion)
    ])
}

export default questionSaga
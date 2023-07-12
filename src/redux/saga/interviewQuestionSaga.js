// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getAllRelatedQuestion(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/relatedquestion.json')
    yield put({ type: "interviewQuestion/setInterviewQuestionArray", payload: response.data })

}

function* interviewQuestionSaga() {
    yield all([
        takeEvery("saga/getAllRelatedQuestion", getAllRelatedQuestion)
    ])
}

export default interviewQuestionSaga
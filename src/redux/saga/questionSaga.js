// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects"
import axios from 'axios'

function* getAllRelatedQuestion(action) {
    const response = yield call(axios.get, 'http://localhost:3000/data/relatedquestion.json')
    yield put({ type: "question/setQuestionArray", payload: response.data })

}

function* questionSaga() {
    yield all([
        takeEvery("saga/getAllRelatedQuestion", getAllRelatedQuestion)
    ])
}

export default questionSaga
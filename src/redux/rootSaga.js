// import sagas
import userSaga from "./saga/userSaga";
import interviewSaga from "./saga/interviewSaga";
import interviewerSaga from "./saga/interviewerSaga";
import roomSaga from "./saga/roomSaga";
import shiftSaga from "./saga/shiftSaga";
import interviewQuestionSaga from "./saga/interviewQuestionSaga";

// import libraries
import { all } from "redux-saga/effects"

function* rootSaga() {
    yield all([
        userSaga(),
        interviewSaga(),
        interviewerSaga(),
        roomSaga(),
        shiftSaga(),
        interviewQuestionSaga()
    ])
}

export default rootSaga

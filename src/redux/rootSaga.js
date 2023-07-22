// import sagas
import userSaga from "./saga/userSaga";
import interviewSaga from "./saga/interviewSaga";
import interviewerSaga from "./saga/interviewerSaga";
import roomSaga from "./saga/roomSaga";
import shiftSaga from "./saga/shiftSaga";
import questionSaga from "./saga/questionSaga";
import cvSaga from "./saga/cvSaga";
import candidateSaga from "./saga/candidateSaga";
// import libraries
import { all } from "redux-saga/effects"

function* rootSaga() {
    yield all([
        userSaga(),
        interviewSaga(),
        interviewerSaga(),
        roomSaga(),
        shiftSaga(),
        questionSaga(),
        cvSaga(),
        candidateSaga()
    ])
}

export default rootSaga

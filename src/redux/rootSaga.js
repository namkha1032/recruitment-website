// import sagas
import userSaga from "./saga/userSaga";
import interviewSaga from "./saga/interviewSaga";
import interviewerSaga from "./saga/interviewerSaga";
import roomSaga from "./saga/roomSaga";
import shiftSaga from "./saga/shiftSaga";
import questionSaga from "./saga/questionSaga";
import departmentSaga from "./saga/departmentSaga"
import languageSaga from "./saga/languageSaga"
import skillSaga from "./saga/skillSaga"
import testSaga from "./saga/testSaga";
// import recruitmentSaga from "./saga/recruitmentSaga";
import cvSaga from "./saga/cvSaga";
import candidateSaga from "./saga/candidateSaga";
// import libraries
import { all } from "redux-saga/effects"
import positionSaga from "./saga/positionSaga";
import eventSaga from "./saga/eventSaga";
import applicationSaga from "./saga/applicationSaga";
import interviewCandidateSaga from "./saga/interviewCandidateSaga";
import adminSaga from "./saga/adminSaga";
import applicationCandidateSaga from "./saga/applicationCandidateSaga";
import eventCandidateSaga from "./saga/eventCandidateSaga";
import cvCandidateSaga from "./saga/cvCandidateSaga";
function* rootSaga() {
    yield all([
        adminSaga(),
        userSaga(),
        interviewSaga(),
        interviewerSaga(),
        roomSaga(),
        shiftSaga(),
        questionSaga(),
        departmentSaga(),
        languageSaga(),
        skillSaga(),
        cvSaga(),
        candidateSaga(),
        positionSaga(),
        eventSaga(),
        applicationSaga(),
        interviewCandidateSaga(),
        testSaga(),
        applicationCandidateSaga(),
        eventCandidateSaga(),
        cvCandidateSaga()
    ])
}

export default rootSaga

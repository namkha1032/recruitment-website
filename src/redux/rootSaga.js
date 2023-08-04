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
import cvInforSaga from "./saga/cvInforSaga";
import positionInforSaga from "./saga/positionInforSaga";
import requirementSaga from "./saga/requirementSaga";
import createCvSaga from "./saga/cvCreateSaga";
import updateCvSaga from "./saga/cvUpdateSaga";
import positionCreateSaga from "./saga/positionCreateSaga";
import positionUpdateSaga from "./saga/positionUpdateSaga";
import reportSaga from "./saga/reportSaga";

import cvCandidateSaga from "./saga/cvCandidateSaga";
import profileSaga from "./saga/profileSaga";
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
        cvInforSaga(),
        interviewCandidateSaga(),
        applicationCandidateSaga(),
        eventCandidateSaga(),
        positionInforSaga(),
        requirementSaga(),
        createCvSaga(),
        testSaga(),
        cvCandidateSaga(),
        profileSaga(),
        updateCvSaga(),
        positionCreateSaga(),
        positionUpdateSaga(),
        reportSaga()
    ])
}

export default rootSaga

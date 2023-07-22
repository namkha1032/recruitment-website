// import sagas
import userSaga from "./saga/userSaga";
import interviewSaga from "./saga/interviewSaga";
import interviewerSaga from "./saga/interviewerSaga";
import roomSaga from "./saga/roomSaga";
import shiftSaga from "./saga/shiftSaga";
import questionSaga from "./saga/questionSaga";
import DepartmentSaga from "./saga/departmentSaga"
import LanguageSaga from "./saga/languageSaga"
import skillSaga from "./saga/skillSaga"
import recruitmentSaga from "./saga/recruitmentSaga";
import cvSaga from "./saga/cvSaga";
import candidateSaga from "./saga/candidateSaga";
// import libraries
import { all } from "redux-saga/effects"
import ListcvSaga from "./saga/listcvSaga";
import DetailpositionSaga from "./saga/detailpositionSaga";

function* rootSaga() {
    yield all([
        userSaga(),
        interviewSaga(),
        interviewerSaga(),
        roomSaga(),
        shiftSaga(),
        questionSaga(),
        DepartmentSaga(),
        LanguageSaga(),
        skillSaga(),
        recruitmentSaga(),
        ListcvSaga(),
        cvSaga(),
        candidateSaga(),
        DetailpositionSaga()
    ])
}

export default rootSaga

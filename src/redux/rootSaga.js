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
        DepartmentSaga(),
        LanguageSaga(),
        skillSaga(),
        recruitmentSaga(),
    ])
}

export default rootSaga

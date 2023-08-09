// import libraries
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import reducers
import userSlice from "./reducer/userReducer";
import interviewSlice from "./reducer/interviewReducer";
import roomSlice from "./reducer/roomReducer";
import shiftSlice from "./reducer/shiftReducer";
import interviewerSlice from "./reducer/interviewerReducer";
import questionSlice from "./reducer/questionReducer";
import adminSlice from "./reducer/adminReducer";
// import recruitmentSlice from './reducer/recruitmentReducer'
import departmentSlice from "./reducer/departmentReducer";
import skillSlice from "./reducer/skillReducer";
import languageSlice from "./reducer/languageReducer";
import errorSlice from "./reducer/errorReducer";
import cvListSlice from "./reducer/cvListReducer";
import candidateSlice from "./reducer/candidateReducer";
import cvSlice from "./reducer/cvReducer";
// import rootSaga
import rootSaga from "./rootSaga";
import positionSlice from "./reducer/positionReducer";
import loadingSlice from "./reducer/loadingReducer";
import interviewListSlice from "./reducer/interviewListReducer";
import positionListSlice from "./reducer/positionListReducer";
import eventListSlice from "./reducer/eventListReducer";
import questionListSlice from "./reducer/questionListReducer";

import applicationSlice from "./reducer/applicationReducer";
import submitcvSlice from "./reducer/submitcvReducer";
import eventSlice from "./reducer/eventReducer";
import interviewCandidateSlice from "./reducer/interviewCandidateReducer";
import applicationCandidateSlice from "./reducer/applicationCandidateReducer";
import eventCandidateSlice from "./reducer/eventCandidateReducer";
import cvHasSkillSlice from "./reducer/cvHasSkillReducer";
import cvInforSlice from "./reducer/cvInforReducer";
import cvHasCertificateSlice from "./reducer/cvHasCertificateReducer";
import positionInforSlice from "./reducer/positionInforReducer";
import positionRequireSlice from "./reducer/positionRequireReducer";

import candidateJoinEventSlice from './reducer/candidateJoinEventReducer'
import interviewidInfoSlice from './reducer/interviewidInfoReducer'
import requirementSlice from "./reducer/requirementReducer";
import statusSlice from "./reducer/statusReducer";
import interviewListCandidateSlice from "./reducer/interviewCandidateReducer";
import cvCandidateSlice from './reducer/cvCandidateReducer'
import eventFooterSlice from "./reducer/eventFooterReducer";
import profileSlice from "./reducer/profileReducer";
import eventNavigateSlice from "./reducer/eventNavigateReducer";
import candidateIdRegisterEventSlice from "./reducer/candidateIdRegisterEvent";
import infoApplicationSlice from "./reducer/infoApplicationReducer";
import interviewerListSlice from "./reducer/interviewerListReducer";
import interviewResultSlice from "./reducer/interviewResultReducer";
import positionSkillSlice from "./reducer/positionSkillReducer";
import interviewShiftSlice from "./reducer/interviewShiftReducer";
import interviewRoomSlice from "./reducer/interviewRoomReducer";
import interviewInterviewerSlice from "./reducer/interviewInterviewerReducer";
import interviewSkillSlice from "./reducer/interviewSkillReducer";
import interviewDepartmentSlice from "./reducer/interviewDepartmentReducer";
import interviewPositionSlice from "./reducer/interviewPositionReducer";
import reportSlice from "./reducer/reportReducer";
import recruiterIdCreateEventSlice from "./reducer/recruiterIdCreateEvent";
import eventIdStatusSlice from "./reducer/eventIdStatusReducer";
import eventRegisteredSlice from "./reducer/eventRegisteredReducer";
import applicationStatusSlice from "./reducer/applicationStatusReducer";

import positionErrorSlice from "./reducer/positionErrorReducer";
import interviewErrorSlice from "./reducer/interviewErrorReducer";
import updatesubmitcvSlice from "./reducer/updatesubmitCvReducer";
import applicationErrorSlice from "./reducer/applicationErrorReducer";
import submitNotifySlice from "./reducer/submitNotifyReducer";
import candidateInfoSlice from "./reducer/candidateInfoReducer";
import statusApplicationSlice from "./reducer/statusApplicationReducer";
import interviewStartSlice from "./reducer/interviewStartReducer";
import cvListErrorSlice from "./reducer/cvListErrorReducer";
import applicationStatusErrorSlice from "./reducer/applicationStatusErrorReducer";
import eventErrorSlice from "./reducer/eventErrorReducer";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        admin: adminSlice.reducer,
        user: userSlice.reducer,
        interview: interviewSlice.reducer,
        room: roomSlice.reducer,
        shift: shiftSlice.reducer,
        interviewer: interviewerSlice.reducer,
        question: questionSlice.reducer,
        department: departmentSlice.reducer,
        skill: skillSlice.reducer,
        language: languageSlice.reducer,
        error: errorSlice.reducer,
        cvlist: cvListSlice.reducer,
        candidate: candidateSlice.reducer,
        cv: cvSlice.reducer,
        position: positionSlice.reducer,
        loading: loadingSlice.reducer,
        interviewList: interviewListSlice.reducer,
        positionList: positionListSlice.reducer,
        eventList: eventListSlice.reducer,
        questionList: questionListSlice.reducer,
        application: applicationSlice.reducer,
        submitcv: submitcvSlice.reducer,
        event: eventSlice.reducer,
        interviewCandidate: interviewCandidateSlice.reducer,
        applicationCandidate: applicationCandidateSlice.reducer,
        eventCandidate: eventCandidateSlice.reducer,
        cvInfor: cvInforSlice.reducer,
        cvHasCertificate: cvHasCertificateSlice.reducer,
        cvHasSkill: cvHasSkillSlice.reducer,
        positionInfor: positionInforSlice.reducer,
        positionRequire: positionRequireSlice.reducer,
        candidateJoinEvent: candidateJoinEventSlice.reducer,
        interviewidInfo: interviewidInfoSlice.reducer,
        requirement: requirementSlice.reducer,
        status: statusSlice.reducer,
        cvCandidate: cvCandidateSlice.reducer,
        eventFooter: eventFooterSlice.reducer,
        profile: profileSlice.reducer,
        eventNavigate: eventNavigateSlice.reducer,
        candidateIdRegisterEvent: candidateIdRegisterEventSlice.reducer,
        recruiterIdCreateEvent: recruiterIdCreateEventSlice.reducer,
        infoApplication: infoApplicationSlice.reducer,
        interviewerList: interviewerListSlice.reducer,
        interviewResult: interviewResultSlice.reducer,
        positionskill: positionSkillSlice.reducer,
        interviewshift: interviewShiftSlice.reducer,
        interviewroom: interviewRoomSlice.reducer,
        interviewinterviewer: interviewInterviewerSlice.reducer,
        interviewskill: interviewSkillSlice.reducer,
        interviewdepartment: interviewDepartmentSlice.reducer,
        interviewposition: interviewPositionSlice.reducer,
        interviewListCandidate: interviewCandidateSlice.reducer,
        report: reportSlice.reducer,
        eventIdStatus: eventIdStatusSlice.reducer,
        eventRegistered: eventRegisteredSlice.reducer,
        applicationStatus: applicationStatusSlice.reducer,
        positionError: positionErrorSlice.reducer,
        interviewError: interviewErrorSlice.reducer,
        applicationError: applicationErrorSlice.reducer,
        updatesubmitcv: updatesubmitcvSlice.reducer,
        submitNotify: submitNotifySlice.reducer,
        candidateInfo: candidateInfoSlice.reducer,
        interviewStart: interviewStartSlice.reducer,
        cvListError: cvListErrorSlice.reducer,
        applicationStatusError: applicationStatusErrorSlice.reducer,
        eventError: eventErrorSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    // middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)
export default store
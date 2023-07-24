// import libraries
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
// import reducers
import userSlice from './reducer/userReducer'
import interviewSlice from './reducer/interviewReducer'
import roomSlice from './reducer/roomReducer'
import shiftSlice from './reducer/shiftReducer'
import interviewerSlice from './reducer/interviewerReducer'
import questionSlice from './reducer/questionReducer'
import recruitmentSlice from './reducer/recruitmentReducer'
import departmentSlice from './reducer/departmentReducer'
import skillSlice from "./reducer/skillReducer"
import languageSlice from './reducer/languageReducer'
import errorSlice from './reducer/errorReducer'
import cvListSlice from './reducer/cvListReducer'
import candidateSlice from './reducer/candidateReducer'
import cvSlice from './reducer/cvReducer'
// import rootSaga
import rootSaga from './rootSaga'
import positionSlice from './reducer/positionReducer'
import applicationSlice from './reducer/applicationReducer'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        interview: interviewSlice.reducer,
        room: roomSlice.reducer,
        shift: shiftSlice.reducer,
        interviewer: interviewerSlice.reducer,
        question: questionSlice.reducer,
        recruitment: recruitmentSlice.reducer,
        department: departmentSlice.reducer,
        skill: skillSlice.reducer,
        language: languageSlice.reducer,
        error: errorSlice.reducer,
        cvlist: cvListSlice.reducer,
        candidate: candidateSlice.reducer,
        cv: cvSlice.reducer,
        position: positionSlice.reducer,
        application: applicationSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    // middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
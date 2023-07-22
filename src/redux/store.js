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

import listcvSlice from './reducer/cvListReducer'
import candidateSlice from './reducer/candidateReducer'
import cvSlice from './reducer/cvReducer'
// import rootSaga
import rootSaga from './rootSaga'
import listcvSlice from './reducer/listcvReducer'
import detailpositionSlice from './reducer/detailpositionReducer'


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
        listcv: listcvSlice.reducer,
        candidate: candidateSlice.reducer,
        cv: cvSlice.reducer,
        detailposition: detailpositionSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    // middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
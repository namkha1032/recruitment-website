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
import recruitmentsSlice from './reducer/recruitmentReducer'
// import rootSaga
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        interview: interviewSlice.reducer,
        room: roomSlice.reducer,
        shift: shiftSlice.reducer,
        interviewer: interviewerSlice.reducer,
        question: questionSlice.reducer,
        recruitments: recruitmentsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    // middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
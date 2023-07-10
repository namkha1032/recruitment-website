// import libraries
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
// import reducers
import userSlice from './reducer/userReducer'
// import rootSaga
import rootSaga from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    // middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export default store
// import sagas
import userSaga from "./userSaga";
// import libraries
import { all } from "redux-saga/effects"

function* rootSaga() {
    yield all([
        userSaga()
    ])
}

export default rootSaga

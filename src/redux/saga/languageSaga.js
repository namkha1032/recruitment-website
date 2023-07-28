import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
function* getLanguage(action) {
  try {
    // const response = yield call(
    //   axios.get,
    //   "http://leetun2k2-001-site1.gtempurl.com/api/Language"
    // );
    const response = yield call(
      axios.get,
      `${host.name}/data/languageList.json`
    );
    yield put({ type: "language/setLanguage", payload: response.data });
    yield put({
      type: "error/setError",
      payload: {
        status: "no",
        message: "",
      },
    });
  } catch (error) {
    yield put({
      type: "error/setError",
      payload: {
        status: "yes",
        message: "message" in error ? "Language - " + error.message : error.response.data,
      },
    });
  }
}

function* languageSaga() {
  yield all([takeEvery("saga/getLanguage", getLanguage)]);
}

export default languageSaga;

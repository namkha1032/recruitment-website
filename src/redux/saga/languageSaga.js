import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
import { filterIsDeleted } from "../../utils/filterIsDeleted";

function* getLanguage(action) {
  try {
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language"
    );
    // const response = yield call(
    //   axios.get,
    //   `${host.name}/data/languageList.json`
    // );
    const data = filterIsDeleted(response.data);
    yield put({ type: "language/setLanguage", payload: data });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "no",
    //     message: "",
    //   },
    // });
  } catch (error) {
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "yes",
    //     message: "message" in error ? "Language - " + error.message : error.response.data,
    //   },
    // });
  }
}

function* languageSaga() {
  yield all([takeEvery("saga/getLanguage", getLanguage)]);
}

export default languageSaga;

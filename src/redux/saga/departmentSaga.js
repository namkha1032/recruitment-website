import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
//http://leetun2k2-001-site1.gtempurl.com/api/Department
//http://localhost:3000/data/departmentList.json
function* getDepartment(action) {
  try {
    const response = yield call(
      axios.get,
      "http://leetun2k2-001-site1.gtempurl.com/api/Department"
    );
    yield put({ type: "department/setDepartment", payload: response.data });
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
        message: "message" in error ? error.message : error.response.data,
      },
    });
  }
}

function* departmentSaga() {
  yield all([takeEvery("saga/getDepartment", getDepartment)]);
}

export default departmentSaga;

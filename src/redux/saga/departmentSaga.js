import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
//http://leetun2k2-001-site1.gtempurl.com/api/Department
//http://localhost:3000/data/departmentList.json
function* getDepartment(action) {
  try {
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Department", {
        headers: { Authorization: action.payload.token },
      }
    );
    // const response = yield call(
    //   axios.get,
    //   `${host.name}/data/departmentList.json`
    // );
    yield put({ type: "department/setDepartment", payload: response.data });
    
  } catch (error) {
    
  }
}

function* departmentSaga() {
  yield all([takeEvery("departmentSaga/getDepartment", getDepartment)]);
}

export default departmentSaga;

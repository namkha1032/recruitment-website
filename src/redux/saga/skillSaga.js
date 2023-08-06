import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
function* getSkill(action) {
  //http://leetun2k2-001-site1.gtempurl.com/api/Skill
  ///data/skillList.json
  try {
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill"
    );
    // const response = yield call(
    //   axios.get,
    //   `/data/skillList.json`
    // );
    yield put({ type: "skill/setSkill", payload: response.data });
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
    //     message: "message" in error ? "Skill - " + error.message : error.response.data,
    //   },
    // });
  }
}

function* skillSaga() {
  yield all([takeEvery("skillSaga/getSkill", getSkill)]);
}

export default skillSaga;

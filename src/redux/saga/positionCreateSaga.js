// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
import { delay } from "../../utils/delay";

function* createPosition(action) {
  try {
    const {
      positionName,
      description,
      salary,
      maxHiringQty,
      startDate,
      endDate,
      departmentId,
      languageId,
      recruiterId,
      requirement,
    } = action.payload;
    const token = action.payload.token
    const config = {
      headers: { Authorization: token },
    };
    const removeField = (certificatesArray, fieldToRemove) => {
      return certificatesArray.map(
        ({ [fieldToRemove]: removedField, ...rest }) => rest
      );
    };
    const updatedRequired = removeField(requirement, "skillname");
    const updatedRequired2 = removeField(updatedRequired, "requirementId");
    const changeField = (certificatesArray, fieldToChange, newValue) => {
      return certificatesArray.map((certificate) => ({
        ...certificate,
        [fieldToChange]: newValue,
      }));
    };
    // console.log("positionName: ", positionName);
    // console.log("description: ", description);
    // console.log("salary: ", salary);
    // console.log("maxHiringQty: ", maxHiringQty);
    // console.log("startDate: ", startDate);
    // console.log("endDate: ", endDate);
    // console.log("departmentId: ", departmentId);
    // console.log("languageId: ", languageId);
    // console.log("recruiterId: ", recruiterId);
    // console.log("requirement: ", updatedRequired2);

    const response = yield call(
      axios.post,
      `https://leetun2k2-001-site1.gtempurl.com/api/Position`,
      {
        positionName: positionName,
        description: description,
        salary: salary,
        maxHiringQty: maxHiringQty,
        startDate: startDate,
        endDate: endDate,
        departmentId: departmentId,
        languageId: languageId,
        recruiterId: recruiterId,
      },config
    );
    // console.log(response.data);
    const positionId = response.data.positionId;
    const updatedRequired3 = changeField(
      updatedRequired2,
      "positionId",
      positionId
    );
    // console.log(updatedRequired3);
    for (let require of updatedRequired3) {
      const newrequire = {
        positionId: require.positionId,
        skillId: require.skillId,
        experience: require.experience,
        notes: require.notes,
        isDeleted: false,
      };
      const response2 = yield call(
        axios.post,
        "https://leetun2k2-001-site1.gtempurl.com/api/Requirement",
        newrequire,config
      );
      // console.log(response2);
    }
    yield call(delay, 1000);
    yield put({
      type: "error/setError",
      payload: { status: "no", message: positionId },
    });
  } catch (err) {
    yield put({ type: "error/setError", payload: { status: "yes", message: err.response.data.error } })
    // console.log("err: ", err)
  }
}

function* positionCreateSaga() {
  yield all([
    takeEvery("createPositionsaga/getCreatePosition", createPosition),
  ]);
}

export default positionCreateSaga;

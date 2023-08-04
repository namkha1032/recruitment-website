// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
import { delay } from "../../utils/delay";

function* updatePosition(action) {
  try {
    const {
      positionId,
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
      delRequire,
      addRequire,
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
    const changeField = (certificatesArray, fieldToChange, newValue) => {
      return certificatesArray.map((certificate) => ({
        ...certificate,
        [fieldToChange]: newValue,
      }));
    };
    const updatedAddRequired = removeField(addRequire, "skillname");
    const updatedAddRequired2 = removeField(
      updatedAddRequired,
      "requirementId"
    );
    const updatedAddRequired3 = changeField(
      updatedAddRequired2,
      "positionId",
      positionId
    );
    // console.log("positionName: ", positionName);
    // console.log("description: ", description);
    // console.log("salary: ", salary);
    // console.log("maxHiringQty: ", maxHiringQty);
    // console.log("startDate: ", startDate);
    // console.log("endDate: ", endDate);
    // console.log("departmentId: ", departmentId);
    // console.log("languageId: ", languageId);
    // console.log("recruiterId: ", recruiterId);
    // console.log("delRequire: ", delRequire);
    // console.log("addRequire: ", addRequire);
  
    const response = yield call(
      axios.put,
      `https://leetun2k2-001-site1.gtempurl.com/api/Position/${positionId}`,
      {
        positionId: positionId,
        positionName: positionName,
        description: description,
        salary: salary,
        maxHiringQty: maxHiringQty,
        startDate: startDate,
        endDate: endDate,
        departmentId: departmentId,
        languageId: languageId,
        recruiterId: recruiterId,
        isDeleted: false,
      },config
    );
    // console.log(response)
    for (let require of updatedAddRequired3) {
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
    for (let require of delRequire){
      // console.log(require.requirementId)
      const response2 = yield call(
        axios.delete,
        `https://leetun2k2-001-site1.gtempurl.com/api/Requirement/${require.requirementId}`,config
      );
      // console.log(response2);
    }
    yield call(delay, 1000)
    yield put({ type: "error/setError", payload: { status: "no", message: positionId } })
  } catch (err) {
    yield put({ type: "error/setError", payload: { status: "yes", message: err.response.data.error } })
    // console.log("err: ", err)
  }
}

function* positionUpdateSaga() {
  yield all([takeEvery("positionUpdatesaga/getUpdatePosition", updatePosition)]);
}

export default positionUpdateSaga;

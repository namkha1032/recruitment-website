// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
function* updateProfile(action) {
  try {
    const { data, token, userid } = action.payload;
    const response1 =  yield call (axios.get, data.ImageFile!== '' ? data.ImageFile : "http://localhost:3000/data/avatar.png", { responseType: "blob" });
    const blob = new Blob([response1.data], { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("FullName", data.FullName);
    formData.append("DateOfBirth", "1411-11-11T00:00:00");
    formData.append("Address", data.Address);
    formData.append("ImageFile", blob);
    formData.append("PhoneNumber", data.PhoneNumber);
    const response = yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Update-Profile`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const responseUserInformation = yield call(
      axios.get,
      `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Profile/${action.payload.userid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data1 = {
      token: action.payload.token,
      userid: userid,
      name: responseUserInformation.data.fullName,
      email: responseUserInformation.data.email,
      birth: responseUserInformation.data.dateOfBirth,
      phone: responseUserInformation.data.phoneNumber,
      address: responseUserInformation.data.address,
      image: responseUserInformation.data.imageURL,
    };
    yield put({ type: "user/setUser", payload: data1 });
    const item = window.localStorage.getItem("user");
    if (item) window.localStorage.setItem("user", JSON.stringify(data1));
    else window.sessionStorage.setItem("user", JSON.stringify(data1));
  } catch {}
}

function* profileSaga() {
  yield all([takeEvery("profileSaga/updateProfile", updateProfile)]);
}

export default profileSaga;

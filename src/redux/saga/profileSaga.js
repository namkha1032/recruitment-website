// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import host from "../host";
function* updateProfile(action) {
  try {
    const { data, token, userid } = action.payload;
    const response1 =  yield call (axios.get, data.ImageFile!== '' ? data.ImageFile : "/data/avatar.png", { responseType: "blob" });
    const blob = new Blob([response1.data], { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("FullName", data.FullName);
    formData.append("DateOfBirth", data.DateOfBirth);
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
    yield put({ type: "profile/updateProfile", payload: {
      fullName:data1.name,
      dateOfBirth:data1.birth,
      address:data1.address,
      phoneNumber:data1.phone,
      imageURL:data1.image
    } });
    const item = window.localStorage.getItem("user");
    if (item) window.localStorage.setItem("user", JSON.stringify(data1));
    else window.sessionStorage.setItem("user", JSON.stringify(data1));
  } catch {}
}
function* getProfile(action) {
  try {
    const {token, userid } = action.payload;
    const res = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Profile/All`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
    const list = res.data.filter(item => item.id === userid)
    if (list.length === 0) {
      yield put({ type: "profile/setProfile", payload: 'none' })
    }else{
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Authentication/Profile/${userid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
    if (response.status!==200) {
      // Nếu mã trạng thái không thành công (khác 200)
      yield put({ type: "profile/setProfile", payload: 'none' })
      if (response.status === 404) {
        throw new Error('Không tìm thấy dữ liệu.');
      } else if (response.status === 500) {
        throw new Error('Lỗi máy chủ.');
      }else if (response.status === 400) {
        throw new Error('This user is not on the System'); 
      }else {
        throw new Error('Lỗi không xác định từ API.');
      }

    }else{
    yield put({ type: "profile/setProfile", payload: response.data })}
  }
  } catch {}
}
function* profileSaga() {
  yield all([
    takeEvery("profileSaga/updateProfile", updateProfile),
    takeEvery("profileSaga/getProfile", getProfile),
]);
}

export default profileSaga;

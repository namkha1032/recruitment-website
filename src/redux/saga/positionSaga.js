import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatPositionList } from "../../utils/formatPositionList";
import { filterPositionList } from "../../utils/filterPositionList";

function* getPositionList() {
  console.log("Get All Position");
  // yield call(delay, 1500)
  // const response = yield call(axios.get, `${host.name}/data/positionList.json`)
  try {
    yield put({ type: "loading/onLoading" });
    // const response = yield call(axios.get, `${host.name}/data/positionList.json`)
    // const response = yield call(axios.get, `${host.name}/data/positionList.json`)
    // yield put({ type: "positionList/setPositionList", payload: response.data });
    
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Position"
    );

    const candidatesPosition = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Application"
    )
    const data = formatPositionList(response.data, candidatesPosition.data);
    yield put({ type: "positionList/setPositionList", payload: data });
    yield put({ type: "loading/offLoading" });
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
    //     message: "message" in error ? "Position - " + error.message : error.response.data,
    //   },
    // });
  }
}

function* getPositionListWithFilter(action) {
  console.log("Filter by: ", action.payload);
  try {
    yield put({ type: "loading/onLoading" });
    yield call(delay, 1500)

    // const response = yield call(axios.get, `${host.name}/data/positionListD.json`)
    // yield put({ type: "positionList/setPositionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Position"
    );
    const candidatesPosition = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Application"
    )
    const draft = filterPositionList(response.data, action.payload);
    const data = formatPositionList(draft, candidatesPosition.data);
    yield put({ type: "positionList/setPositionList", payload: data });
    yield put({ type: "loading/offLoading" });
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
    //     message: "message" in error ? error.message : error.response.data,
    //   },
    // });
  }
}

function* updatePositionList(action) {
  try {
    const response = yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Position/${action.payload.id}`, action.payload.value);
    yield call(getPositionList)
  }
  catch (error) {

  }
  
  // yield put({ type: "positionList/setPositionList", payload: response.data });
}

function* getPosition(action) {
  try {
    console.log(action.payload)
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload}`)
    // const response2 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Language?languageId=${response1.data.languageId}`)
    console.log("response1", response1.data);
    // console.log("deinresponse1", response1.data.departmentId)
    // const response3 =  yield call(axios.get, `http://leetun2k2-001-site1.gtempurl.com/api/Requirement`)
    // const requirementid = response3.data.filte r((prop) => prop.requirementId === response1.data.requirementId);
    // console.log("requirefull", response3.data);
    // console.log("requiresaga", requirementid);
    // const response3 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Department');
    // let department = response3.data.filter((prop) => prop.departmentId === response1.data.departmentId);
    // console.log("response3", response3.data);
    // console.log("departmentinsaga", department);
    // const response4 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Requirement');
    // const requirementid = response4.data.filter((prop) => prop.positionId === response1.data.positionId);
    /* KO LAY DONG NAY */
    // const skilllist = requirementid.filter((prop) => prop.skillId === response5.data.skillId);
    /* */
    // let skilllist = [];
    // console.log("type", typeof (requirementid[0]));
    // console.log("skilltest", skilllist);
    // console.log("requiresaga", requirementid);
    // console.log('response5', response5.data);
    // console.log("length", requirementid.length);
    // for (let i = 0; i < requirementid.length; i++) {
    //   for (let j = 0; j < response5.data.length; j++) {
    //     if (requirementid[i].skillId === response5.data[j].skillId) {
    //       skilllist.push(response5.data[j].skillName);
    //     }
    //   }
    // }
    // const mainskill = skilllist.reduce((acc, curr) => {
    //   if (!acc.includes(curr)) {
    //     acc.push(curr);
    //   }
    //   return acc;
    // }, [])

    // console.log("mainskill", mainskill);
    // console.log("skill", skilllist);
    // console.log("full", response1.data);
    // console.log("language", response2.data);
    // yield put({
    //   type: 'position/setPosition', payload: {
    //     ...response1.data,
    //     description1: "<h3>About Soft skill</h3><p>Lorem <strong><em><u>ipsum dolo</u></em></strong>r sit amet consectetur adip<em>isicing elit. D</em>oloremque facere nesciunt iusto dolor <strong>voluptatem</strong> corrupti ullam magni expedita ea, accusantium laboriosa<u>m illum a minus repudiandae </u>similique, sed nulla repellendus at!</p><h3>About Language</h3><ol><li>oloremque facere nesciunt iusto dolor <strong>voluptatem</strong> corrupti ullam magni expedita ea, </li><li>boriosa<u>m illum a minus repudiandae </u>similique, sed nulla repellendus at!</li><li>orem <strong><em><u>ipsum dolo</u></em></strong>r sit amet consectetur a</li></ol><h3>About Technology</h3><ul><li><u> illum a minus repudiandae </u>similique, sed nulla repellendus at!</li><li>ctetur adip<em>isicing elit. D</em>oloremque facere nesciunt iusto dolor <strong>voluptatem</strong> corrupti ullam magni expedita ea, accusantium laboriosa<u>m illum a minus repudiandae </u>si</li><li>Lorem <strong><em><u>ipsum dolo</u></em></strong>r sit amet consectetur adip<em>isicing elit. D</em>oloremque f</li></ul>",
    //     departmentName: "IT ROOM",
    //     departmentAddress: "G Floor, F-Town 1 Building, High-tech Park, Tan Phu Ward, District 9, Ho Chi Minh City, Vietnam",
    //     departmentPhone: 123456789,
    //     departmentEmail: "ITroomFSOFT@ftp.com",
    //     departmentWebsite: "https://fpt.com.vn/en",
    //   }
    // })
    // yield put({ type: 'skill/setSkill', payload: mainskill })
    // yield put({ type: 'language/setLanguage', payload: response2.data })
    // yield put({ type: 'department/setDepartment', payload: department })
    // const response1 = yield call(axios.get, `${host.name}/data/detailposition.json`)
    let skilllist = []
    const response2 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Skill');
    console.log('response2', response2.data);
    console.log('skillid', response1.data.requirements)
    for (let i = 0; i < response1.data.requirements.length; i++) {
      for (let j = 0; j < response2.data.length; j++) {
        if (response1.data.requirements[i].skillId === response2.data[j].skillId) {
          skilllist.push(response2.data[i]);
        }
      }
    }
    console.log('skillinsaga', skilllist);
    yield put({ type: 'position/setPosition', payload: response1.data })
    yield put({type: 'skill/setSkill', payload: skilllist})
  } catch (error) {
    console.log(error)
  }

}
// function* getDetailPosition(action){
//     const reponse = yield call(axios.get, `http://localhost:3001/positions?PositionId=${action.payload}`)
//     yield put({ type: 'detail/setDetail', payload: reponse.data})
// }

function* positionSaga() {
  yield all([
    takeEvery("saga/getPosition", getPosition),
    takeLatest("saga/getPositionList", getPositionList),
    takeLatest("saga/updatePositionList", updatePositionList),
    takeLatest("saga/getPositionListWithFilter", getPositionListWithFilter),
  ]);
}

export default positionSaga;

// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatInterviewList } from "../../utils/formatInterviewList";
// const fs = require("fs");
// let data_draft = [];
// for (let element of response.data) {
//   const applicationResponse = yield call(axios.get, `${element.applicationId}`);
//   let temp = {
//     ...element,
//     candidateId: applicationResponse.data.cv.candidateId
//   }
//   data_draft = data_draft.concat(temp)
// }

function* getAllInterview() {
  console.log("Get All Interview");
  try {
    yield put({ type: "loading/onLoading" });
    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Interview"
    );

    const applications = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Application");
    const itrsinterviews = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview");
    const rooms = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Room");
    const shifts = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Shift");
    const recruiters = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Recruiter");
    const interviewers = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Interviewer");
    const candidates = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Candidate");

    const data = yield call(formatInterviewList, response.data, applications.data, itrsinterviews.data, rooms.data, shifts.data, recruiters.data, interviewers.data, candidates.data);

    yield put({
      type: "interviewList/setInterviewList",
      payload: data,
    });
    yield put({ type: "loading/offLoading" });
  } catch (error) { }
}

function* getInterviewWithFilter(action) {
  yield put({ type: "loading/onLoading" });
  console.log("Payload:", action.payload);
  yield call(delay, 1500);
  const response = yield call(axios.get, `${host.name}/data/interviewAll.json`);
  yield put({ type: "interviewList/setInterviewList", payload: response.data });
  yield put({ type: "loading/offLoading" });
}

function* getUpcomingInterview(action) {
  try {
    const response = yield call(
      axios.get,
      `${host.name}/data/interviewlist.json`
    );
    yield put({ type: "interview/setInterview", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getInterviewResult(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    const responseInterview = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload.interviewid}`, config)
    const responsePosition = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${responseInterview.data.application.position.positionId}`, config)
    const responseQSList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill`, config);

    const responseAllQuestion = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question`, config)

    const responseCategoryList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion`, config)
    const responseSkillList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Skill`, config)
    const responseRoundList = yield call(axios.get, `${host.name}/data/roundfake.json`, config)

    console.log("responseInterview: ", responseInterview.data)
    console.log("responsePosition: ", responsePosition.data)
    console.log("responseQSList: ", responseQSList.data)
    console.log("responseAllQuestion: ", responseAllQuestion.data)
    console.log("responseCategoryList: ", responseCategoryList.data)
    console.log("responseSkillList: ", responseSkillList.data)
    console.log("responseRoundList: ", responseRoundList.data)

    let interStruc = {
      interviewid: action.payload.interviewid,
      note: responseInterview.data.notes,
      round: []
    };
    // Soft Skill
    for (let cate of responseCategoryList.data) {
      if (cate.categoryQuestionName == "Soft Skill") {
        let newCate = {
          categoryid: cate.categoryQuestionId,
          categoryname: cate.categoryQuestionName,
          questions: []
        }
        interStruc.round.push(newCate)
        for (let softRo of responseRoundList.data) {
          let findQues = null
          findQues = responseAllQuestion.data.find((item) => {
            return item.questionId == softRo.questionId && item.categoryQuestionId == cate.categoryQuestionId
          })
          if (findQues) {
            const newRo = {
              questionid: softRo.questionId,
              questionstring: findQues.questionString,
              score: softRo.score
            }
            interStruc.round[0].questions.push(newRo)
          }
        }

      }
    }
    // Language
    for (let cate of responseCategoryList.data) {
      if (cate.categoryQuestionName == "Language") {
        let newCate = {
          categoryid: cate.categoryQuestionId,
          categoryname: cate.categoryQuestionName,
          languages: []
        }
        interStruc.round.push(newCate)
        let newLang = {
          languageid: responsePosition.data.language.languageId,
          languagename: responsePosition.data.language.languageName,
          questions: []
        }
        interStruc.round[1].languages.push(newLang)
        let prefix = ""
        if (responsePosition.data.language.languageName == "English") {
          prefix = "$eng$"
        }
        else if (responsePosition.data.language.languageName == "Chinese") {
          prefix = "$chi$"
        }
        else if (responsePosition.data.language.languageName == "Italian") {
          prefix = "$ita$"
        }
        else if (responsePosition.data.language.languageName == "Spanish") {
          prefix = "$spa$"
        }
        else if (responsePosition.data.language.languageName == "French") {
          prefix = "$fre$"
        }
        else if (responsePosition.data.language.languageName == "Russian") {
          prefix = "$rus$"
        }
        else if (responsePosition.data.language.languageName == "Japanese") {
          prefix = "$rus$"
        }
        else if (responsePosition.data.language.languageName == "Korean") {
          prefix = "$kor$"
        }
        else if (responsePosition.data.language.languageName == "German") {
          prefix = "$ger$"
        }
        else if (responsePosition.data.language.languageName == "Portuguese") {
          prefix = "$por$"
        }
        else if (responsePosition.data.language.languageName == "Hindi") {
          prefix = "$hin$"
        }

        for (let langRo of responseRoundList.data) {
          let findLangQues = null
          findLangQues = responseAllQuestion.data.find((item) => {
            return langRo.questionId == item.questionId && item.categoryQuestionId == cate.categoryQuestionId
          })
          if (findLangQues) {
            const newLangQues = {
              questionid: langRo.questionId,
              questionstring: findLangQues.questionString.slice(5),
              score: langRo.score,
            }
            interStruc.round[1].languages[0].questions.push(newLangQues)
          }
        }

      }
    }
    // Technology
    for (let cate of responseCategoryList.data) {
      if (cate.categoryQuestionName == "Technology") {
        let newCate = {
          categoryid: cate.categoryQuestionId,
          categoryname: cate.categoryQuestionName,
          skills: []
        }
        interStruc.round.push(newCate)
        for (let skill of responseSkillList.data) {
          for (let skillRequired of responsePosition.data.requirements) {
            if (skill.skillId == skillRequired.skillId) {
              let newSkill = {
                skillid: skillRequired.skillId,
                skillname: skill.skillName,
                questions: []
              }
              interStruc.round[2].skills.push(newSkill)
              for (let QS of responseQSList.data) {
                if (QS.skillId == skillRequired.skillId)
                  for (let techRo of responseRoundList.data) {
                    let findTechQues = null
                    findTechQues = responseAllQuestion.data.find((item) => {
                      return techRo.questionId == item.questionId && item.categoryQuestionId == cate.categoryQuestionId && item.questionId == QS.questionId
                    })
                    if (findTechQues) {
                      const newTechRo = {
                        questionid: techRo.questionId,
                        questionstring: findTechQues.questionString,
                        score: techRo.score,
                      }
                      interStruc.round[2].skills[interStruc.round[2].skills.length - 1].questions.push(newTechRo)
                    }
                  }
              }
            }
          }
        }

      }
    }
    yield put({ type: "interviewResult/setInterviewResult", payload: interStruc });
  }
  catch (error) {
    console.log("error: ", error)
  }
  // const response = yield call(axios.get, `${host.name}/data/interviewid.json`);
}

function* scoreInterview(action) {
  // const abc = yield call(axios.post, "http://localhost:3001/api/interview", action.payload)
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    console.log("input: ", JSON.stringify(action.payload))
    // yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/PostQuestionInterviewResult/${action.payload.interviewid}`, action.payload.result, config)
    // yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/UpdateStatusInterview/${action.payload.interviewid}?Candidate_Status=Finished&Company_Status=Pending`, null, config)
    yield put({ type: "error/setError", payload: { status: "no", message: action.payload.interviewid } })
  }
  catch (error) {
    console.log("err: ", error)
    yield put({ type: "error/setError", payload: { status: "yes", message: "Cannot end interview" } })
  }
}

function* createInterview(action) {
  try {
    let token = `Bearer ${action.payload.token}`
    const config = {
      headers: { Authorization: token },
    }
    yield call(axios.post, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/${action.payload.newInter.interview.applicationId}`, action.payload.newInter, config)
    // update Application status
    yield call(axios.put, `https://leetun2k2-001-site1.gtempurl.com/api/Application/UpdateStatusApplication/${action.payload.newInter.interview.applicationId}?Candidate_Status=Pending&Company_Status=Accepted`, null, config)
    const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview/GetInterviewsByInterviewer/${action.payload.newInter.interview.interviewerId}`, config)
    const findInterview = responseInterviewList.data.find((item) => {
      return item.recruiter.recruiterId == action.payload.newInter.interview.recruiterId
        && item.application.applicationId == action.payload.newInter.interview.applicationId
        && item.interviewer.interviewerId == action.payload.newInter.interview.interviewerId
        && item.itrsinterview.room.roomId == action.payload.newInter.itrs.roomId
        && item.itrsinterview.shift.shiftId == action.payload.newInter.itrs.shiftId
    })
    yield put({ type: "error/setError", payload: { status: "no", message: findInterview.interviewId } })
  }
  catch (err) {
    yield put({ type: "error/setError", payload: { status: "yes", message: "Conflict" } })
    console.log("err: ", err)
  }
}

function* getInterviewInfo(action) {
  try {
    const response = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload}`)
    const response1 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview/?id=${response.data.itrsinterviewId}`);
    const response2 = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Room");
    const room = response2.data.filter((prop) => prop.roomId === response1.data.roomId);
    const response3 = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Shift");
    console.log("room", room);
    const shift = response3.data.filter((prop) => prop.shiftId === response1.data.shiftId);
    console.log("shift", shift);
    const response4 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`);
    const interviewer = response4.data.filter((prop) => prop.itrsinterviewId === response1.data.itrsinterviewId);
    const response5 = yield call(axios.get, ` https://leetun2k2-001-site1.gtempurl.com/api/Interviewer?id=${interviewer[0].interviewerId}`);
    const response6 = yield call(axios.get, "https://leetun2k2-001-site1.gtempurl.com/api/Department");
    const department = response6.data.filter((props) => props.departmentId === response5.data.departmentId);
    // console.log("interviwer", interviewer);
    console.log("departsaga", department);
    const response7 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application`);
    const application = response7.data.filter((prop) => prop.applicationId === response.data.applicationId);
    const response8 = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${application[0].position.positionId}`)
    console.log("appinsaga", application);
    let skilllist = []
    console.log("reponse8", response8.data);
    const response9 = yield call(axios.get, 'https://leetun2k2-001-site1.gtempurl.com/api/Skill');
    console.log('response8', response8.data);
    console.log('reponse9', response9.data)
    console.log('skillid', response8.data.requirements)
    for (let i = 0; i < response8.data.requirements.length; i++) {
      for (let j = 0; j < response9.data.length; j++) {
        if (response8.data.requirements[i].skillId === response9.data[j].skillId) {
          skilllist.push(response9.data[j]);
        }
      }
    }

    console.log('skillinsaga', skilllist);
    console.log("appinsaga", application);
    // yield put({ type: "department/setDepartment", payload: department });
    // yield put({ type: "interviewer/setInterviewer", payload: response5.data });
    // yield put({ type: "shift/setShift", payload: shift });
    // yield put({ type: "room/setRoom", payload: room });
    // yield put({type: "interviewidInfo/setInterviewidInfo",payload: response1.data});
    // yield put({type: "position/setPosition", payload: response8.data});
    // yield put({type: 'skill/setSkill', payload: skilllist})
    yield put({ type: "interviewdepartment/setInterviewDepartment", payload: department });
    yield put({ type: "interviewinterviewer/setInterviewInterviewer", payload: response5.data });
    yield put({ type: "interviewshift/setInterviewShift", payload: shift });
    yield put({ type: "interviewroom/setInterviewRoom", payload: room });
    yield put({ type: "interviewidInfo/setInterviewidInfo", payload: response1.data });
    yield put({ type: "interviewposition/setInterviewPosition", payload: response8.data });
    yield put({ type: 'interviewskill/setInterviewSkill', payload: skilllist })
  } catch (error) {
    console.log(error);
  }
}

function* getDataForInterview(action) {
  // const responseApplication = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload}`)
  // --------hàng tạm thời------------
  // get application infor
  let token = `Bearer ${action.payload.token}`
  const config = {
    headers: { Authorization: token },
  }
  // const responseApp = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Application/${action.payload.applicationid}`, config)
  // const appItem = responseApp.data
  const responsePosition = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${action.payload.recruitmentid}`, config)
  const findPosition = responsePosition.data
  // const findDepartment = findPosition.department
  // get upcoming interview
  // sửa lại chỗ này
  const responseInterviewList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview`, config)
  let interviewList = []
  for (let resInter of responseInterviewList.data) {
    // const responseItrsList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Itrsinterview?id=${resInter.itrsinterviewId}`)
    // const responseRoomList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Room`)
    // const findRoom = responseRoomList.data.find((item) => item.roomId == responseItrsList.data.roomId)
    const newInter = {
      interviewid: resInter.interviewId,
      departmentid: resInter.application.position.department.departmentId,
      departmentname: resInter.application.position.department.departmentName,
      candidateid: resInter.application.cv.candidateId,
      candidatename: resInter.application.cv.candidate.user.fullName,
      interviewerid: resInter.interviewer.interviewerId,
      interviewername: resInter.interviewer.user.fullName,
      interviewdate: resInter.itrsinterview.dateInterview.slice(0, 11) + "17" + resInter.itrsinterview.dateInterview.slice(13) + ".000Z",
      shiftid: resInter.itrsinterview.shift.shiftId,
      roomid: resInter.itrsinterview.room.roomId,
      roomname: resInter.itrsinterview.room.roomName
    }
    interviewList.push(newInter)
  }
  // get department interviewer
  const responseDepartInterviewerList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interviewer?departmentId=${findPosition.department.departmentId}`, config)
  let interviewerList = []
  for (let filterInter of responseDepartInterviewerList.data) {
    let newInterviewer = {
      departmentid: filterInter.departmentId,
      interviewerid: filterInter.interviewerId,
      userid: filterInter.userId,
      user: filterInter.user,
    }
    interviewerList.push(newInterviewer)
  }
  // Get room
  const responseRoomList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Room`, config)
  let roomList = responseRoomList.data.map((item) => {
    const newRoomObj = {
      roomid: item.roomId,
      roomname: item.roomName
    }
    return newRoomObj
  })
  // Get shift
  const responseShiftList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Shift`, config)
  let shiftList = responseShiftList.data.map((item) => {
    let newShiftObj = {
      shiftid: item.shiftId,
      shiftstart: item.shiftTimeStart,
      shiftend: item.shiftTimeEnd
    }
    return newShiftObj
  })
  shiftList.sort((a, b) => {
    return a.shiftstart - b.shiftstart;
  });
  // ---------------------------------
  // -----------------------------------FAKE---------------------------------------

  // -----------------------------------FAKE---------------------------------------
  // yield put({ type: "application/setApplication", payload: appItem })
  yield put({ type: "interviewList/setInterviewList", payload: interviewList })
  yield put({ type: "interviewerList/setInterviewerList", payload: interviewerList })
  yield put({ type: "room/setRoom", payload: roomList })
  yield put({ type: "shift/setShift", payload: shiftList })
}

function* interviewSaga() {
  yield all([
    takeEvery("interviewSaga/getInterviewInfo", getInterviewInfo),
    takeEvery("interviewSaga/getUpcomingInterview", getUpcomingInterview),
    takeEvery("interviewSaga/scoreInterview", scoreInterview),
    takeEvery("interviewSaga/getInterviewResult", getInterviewResult),
    takeEvery("interviewSaga/createInterview", createInterview),
    takeLatest("interviewSaga/getAllInterview", getAllInterview),
    takeLatest("interviewSaga/getInterviewWithFilter", getInterviewWithFilter),
    takeEvery('interviewSaga/getDataForInterview', getDataForInterview),
  ]);
}

export default interviewSaga;

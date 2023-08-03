// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatQuestionList } from "../../utils/formatQuestionList";
import { filterQuestionList } from "../../utils/filterQuestionList";
import { createQuestionDraft } from "../../utils/createQuestionDraft";
import { getQuestionSkillInfo } from "../../utils/getQuestionSkillInfo";

function* getAllQuestion() {
  console.log("GET ALL Question");
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/questionListR.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question"
    );
    console.log("0: ", response.data);
    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion"
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill"
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language"
    );
    const data = yield call(
      formatQuestionList,
      response.data,
      categorys.data,
      skillsQ.data,
      skills.data,
      languages.data
    );
    console.log(data);
    yield put({ type: "questionList/setQuestionList", payload: data });
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
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

function* getQuestionListWithFilter(action) {
  console.log("FILTER BY: ", action.payload);
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/questionlist.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question"
    );

    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion"
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill"
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language"
    );
    const draft = yield call(
      formatQuestionList,
      response.data,
      categorys.data,
      skillsQ.data,
      skills.data,
      languages.data
    );

    // --- FILTER
    const data = yield call(filterQuestionList, draft, action.payload);

    yield put({ type: "questionList/setQuestionList", payload: data });
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
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

// action.payload: {
//   QuestionName: value.question,
//   Category: value.category,
//   TypeId: value.typeId,
//   TypeName: value.typeName,
// }

function* postQuestion(action) {
  console.log("POST: ", action.payload);
  try {
    yield put({
      type: "status/onLoading",
    });
    const techId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology"
    );
    const langId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Language"
    );
    const softId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Soft%20Skill"
    );

    const ques_draft = yield call(
      createQuestionDraft,
      action.payload,
      techId.data,
      langId.data,
      softId.data
    );

    const quesId = yield call(
      axios.post,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question",
      {
        questionString: ques_draft.QuestionName,
        categoryQuestionId: ques_draft.CategoryId,
      }
    );

    if (quesId.data.categoryQuestionId === techId.data[0].categoryQuestionId) {
      const ques = yield call(
        axios.post,
        "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
        {
          questionId: quesId.data.questionId,
          skillId: ques_draft.TypeId,
        }
      );
    }
    yield put({
      type: "status/onSuccess",
      payload: "Create question",
    });
    yield call(getAllQuestion);
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "no",
    //     message: "",
    //   },
    // });
  } catch (error) {
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

// action.payload: {
//   QuestionId: value.QuestionId,
//   QuestionName: value.QuestionName,
//   Category: value.CategoryName,
//   TypeId: value.TypeId,
//   TypeName: value.TypeName,
// }
// -> PUT Question:
//   {
//     "questionId": "00000000-0000-0000-0000-000000000001",
//     "questionString": "Java",
//     "categoryQuestionId": "6a454d2b-2668-444e-b36a-566d3e732b4d"
//   }

function* putQuestion(action) {
  console.log("PUT: ", action.payload);
  try {
    yield put({
      type: "status/onLoading",
    });
    const techId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology"
    );
    const langId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Language"
    );
    const softId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Soft%20Skill"
    );

    const ques_draft = yield call(
      createQuestionDraft,
      action.payload,
      techId.data,
      langId.data,
      softId.data
    );

    const ques_old = yield call(
      axios.get,
      `https://leetun2k2-001-site1.gtempurl.com/api/Question?questionId=${action.payload.QuestionId}`
    );

    // Category Not Change
    if (ques_old.data[0].categoryQuestionId === ques_draft.CategoryId) {
      const quesId = yield call(
        axios.put,
        `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`,
        {
          questionId: action.payload.QuestionId,
          questionString: ques_draft.QuestionName,
          categoryQuestionId: ques_draft.CategoryId,
        }
      );
      if (ques_draft.CategoryId === techId.data[0].categoryQuestionId) {
        // Get Question Skills
        const questionSkills = yield call(
          axios.get,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
        );

        // Get Question Skill Info
        const quesSkil = yield call(
          getQuestionSkillInfo,
          action.payload.QuestionId,
          questionSkills.data
        );

        // Question Skill change
        if (quesSkil.skillId !== ques_draft.TypeId) {
          const ques = yield call(
            axios.put,
            `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`,
            {
              questionSkillsId: quesSkil.questionSkillsId,
              questionId: action.payload.QuestionId,
              skillId: ques_draft.TypeId,
            }
          );
        }
      }
    }
    // Category Change
    else {
      const quesId = yield call(
        axios.put,
        `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`,
        {
          questionId: action.payload.QuestionId,
          questionString: ques_draft.QuestionName,
          categoryQuestionId: ques_draft.CategoryId,
        }
      );
      if (ques_draft.CategoryId === techId.data[0].categoryQuestionId) {
        const ques = yield call(
          axios.post,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
          {
            questionId: action.payload.QuestionId,
            skillId: ques_draft.TypeId,
          }
        );
      } else if (
        ques_old.data[0].categoryQuestionId ===
        techId.data[0].categoryQuestionId
      ) {
        const questionSkills = yield call(
          axios.get,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
        );
        const quesSkil = yield call(
          getQuestionSkillInfo,
          action.payload.QuestionId,
          questionSkills.data
        );
        yield call(
          axios.delete,
          `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`
        );
      }
    }
    yield put({
      type: "status/onSuccess",
      payload: "Update question",
    });
    yield call(getAllQuestion);
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
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

// action.payload: {
//   QuestionId: "",
//   CategoryId: "",
// }

function* deleteQuestion(action) {
  console.log("DELETE: ", action.payload);
  try {
    // Delete QuestionSkill (if have)
    yield put({
      type: "status/onLoading",
    });
    const techId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology"
    );
    if (action.payload.CategoryId === techId.data[0].categoryQuestionId) {
      const questionSkills = yield call(
        axios.get,
        "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill"
      );
      const quesSkil = yield call(
        getQuestionSkillInfo,
        action.payload.QuestionId,
        questionSkills.data
      );

      // Don't in QuestionSkills
      if (quesSkil !== null) {
        yield call(
          axios.delete,
          `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`
        );
      }
    }

    // Delete Question
    yield call(
      axios.delete,
      `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`
    );
    yield put({
      type: "status/onSuccess",
      payload: "Delete question",
    });
    yield call(getAllQuestion);
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
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

function* getInterviewQuestion(action) {
  // const response = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/Question`
  // );
  // const response1 = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion`
  // );
  // const response2 = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/Skill`
  // );
  // const response3 = yield call(
  //   axios.get,
  //   `http://leetun2k2-001-site1.gtempurl.com/api/Language`
  // );
  // const resList = response.data;
  // const res1List = response1.data;
  // const res2List = response2.data;
  // const res3List = response3.data;
  // let quesStruc = [];
  // // Soft skill
  // for (let res1 of res1List) {
  //   if (res1.categoryQuestionName == "Soft Skill") {
  //     let newCate = {
  //       categoryid: res1.categoryQuestionId,
  //       categoryname: res1.categoryQuestionName,
  //       questions: [],
  //     };
  //     quesStruc.push(newCate);
  //     for (let res of resList) {
  //       if (res.categoryQuestionId == res1.categoryQuestionId) {
  //         let newQues = {
  //           questionid: res.questionId,
  //           questionstring: res.questionString,
  //         };
  //         quesStruc[0].questions.push(newQues);
  //       }
  //     }
  //     break;
  //   }
  // }
  // // Language
  // for (let res1 of res1List) {
  //   if (res1.categoryQuestionName == "Language") {
  //     let newCate = {
  //       categoryid: res1.categoryQuestionId,
  //       categoryname: res1.categoryQuestionName,
  //       languages: [],
  //     };
  //     quesStruc.push(newCate);
  //     for (let res3 of res3List) {
  //       if (res3.languageName == "English") {
  //         const newObj = {
  //           languageid: res3.languageId,
  //           languagename: res3.languageName,
  //           questions: [],
  //         };
  //         quesStruc[1].languages.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString.slice(5),
  //             };
  //             quesStruc[1].languages[0].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     break;
  //   }
  // }
  // // Technology
  // for (let res1 of res1List) {
  //   if (res1.categoryQuestionName == "Technology") {
  //     let newCate = {
  //       categoryid: res1.categoryQuestionId,
  //       categoryname: res1.categoryQuestionName,
  //       skills: [],
  //     };
  //     quesStruc.push(newCate);
  //     for (let res2 of res2List) {
  //       if (res2.skillName == "React") {
  //         const newObj = {
  //           skillid: res2.skillId,
  //           skillname: res2.skillName,
  //           questions: [],
  //         };
  //         quesStruc[2].skills.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString,
  //             };
  //             quesStruc[2].skills[0].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     for (let res2 of res2List) {
  //       if (res2.skillName == "C#") {
  //         const newObj = {
  //           skillid: res2.skillId,
  //           skillname: res2.skillName,
  //           questions: [],
  //         };
  //         quesStruc[2].skills.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString,
  //             };
  //             quesStruc[2].skills[1].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     for (let res2 of res2List) {
  //       if (res2.skillName == "Java") {
  //         const newObj = {
  //           skillid: res2.skillId,
  //           skillname: res2.skillName,
  //           questions: [],
  //         };
  //         quesStruc[2].skills.push(newObj);
  //         for (let res of resList) {
  //           if (res.categoryQuestionId == res1.categoryQuestionId) {
  //             let newQues = {
  //               questionid: res.questionId,
  //               questionstring: res.questionString,
  //             };
  //             quesStruc[2].skills[2].questions.push(newQues);
  //           }
  //         }
  //       }
  //     }
  //     break;
  //   }
  // }
  // yield put({ type: "question/setInterviewQuestion", payload: quesStruc });
  const responsefake = yield call(
    axios.get,
    `${host.name}/data/questionlist.json`
  );
  yield put({
    type: "question/setInterviewQuestion",
    payload: responsefake.data,
  });
}

function* getQuestion(action) {
  yield put({ type: "question/setQuestion", action: action.payload });
}

function* questionSaga() {
  yield all([
    takeEvery("questionSaga/getInterviewQuestion", getInterviewQuestion),
    takeEvery("saga/getQuestion", getQuestion),
    takeEvery("questionSaga/getAllQuestion", getAllQuestion),
    takeLatest("questionSaga/getQuestionListWithFilter", getQuestionListWithFilter),
    takeEvery("questionSaga/putQuestion", putQuestion),
    takeEvery("questionSaga/postQuestion", postQuestion),
    takeEvery("questionSaga/deleteQuestion", deleteQuestion),
  ]);
}

export default questionSaga;

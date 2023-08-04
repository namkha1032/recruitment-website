// import libraries
import { takeEvery, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { delay } from "../../utils/delay";
import host from "../host";
import { formatQuestionList } from "../../utils/formatQuestionList";
import { filterQuestionList } from "../../utils/filterQuestionList";
import { createQuestionDraft } from "../../utils/createQuestionDraft";
import { getQuestionSkillInfo } from "../../utils/getQuestionSkillInfo";

// action.payload: {
//   token: `Bearer ${user.token}`
// }
function* getAllQuestion(action) {
  console.log("GET ALL Question");
  try {
    yield put({ type: "loading/onLoading" });
    // yield call(delay, 1500)
    // const response = yield call(axios.get, `${host.name}/data/questionListR.json`)
    // yield put({ type: "questionList/setQuestionList", payload: response.data });

    const response = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Question",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language",
      {
        headers: { Authorization: action.payload.token },
      }
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
    yield put({ type: "loading/offLoading" });
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
      "https://leetun2k2-001-site1.gtempurl.com/api/Question",
      {
        headers: { Authorization: action.payload.token },
      }
    );

    // --- GET NAME

    const categorys = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skillsQ = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
      {
        headers: { Authorization: action.payload.token },
      }
    );
    const skills = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Skill", {
        headers: { Authorization: action.payload.token },
      }
    );
    const languages = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/Language", {
        headers: { Authorization: action.payload.token },
      }
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
    yield put({ type: "loading/offLoading" });
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
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology", {
        headers: { Authorization: action.payload.token },
      }
    );
    const langId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Language", {
        headers: { Authorization: action.payload.token },
      }
    );
    const softId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Soft%20Skill", {
        headers: { Authorization: action.payload.token },
      }
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
      }, {
        headers: { Authorization: action.payload.token },
      }
    );

    if (quesId.data.categoryQuestionId === techId.data[0].categoryQuestionId) {
      const ques = yield call(
        axios.post,
        "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
        {
          questionId: quesId.data.questionId,
          skillId: ques_draft.TypeId,
        }, {
          headers: { Authorization: action.payload.token },
        }
      );
    }
    yield put({
      type: "status/onSuccess",
      payload: "Create question",
    });

    // Load with filter
    yield put({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: action.payload.categoryName,
        skillId: action.payload.skillId,
        skillName: action.payload.skillName,
        languageId: action.payload.languageId,
        languageName: action.payload.languageName,
        softskill: action.payload.softskill,
        token: action.payload.token
      },
    });
    // yield put({
    //   type: "error/setError",
    //   payload: {
    //     status: "no",
    //     message: "",
    //   },
    // });
  } catch (error) {
    yield put({ type: "loading/offLoading" });
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
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology", {
        headers: { Authorization: action.payload.token },
      }
    );
    const langId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Language", {
        headers: { Authorization: action.payload.token },
      }
    );
    const softId = yield call(
      axios.get,
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Soft%20Skill", {
        headers: { Authorization: action.payload.token },
      }
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
      `https://leetun2k2-001-site1.gtempurl.com/api/Question?questionId=${action.payload.QuestionId}`, {
        headers: { Authorization: action.payload.token },
      }
    );

    // Category Not Change
    if (ques_old.data[0].categoryQuestionId === ques_draft.CategoryId) {
      const quesId = yield call(
        axios.put,
        `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`,
        {
          // questionId: action.payload.QuestionId,
          questionString: ques_draft.QuestionName,
          categoryQuestionId: ques_draft.CategoryId,
        }, {
          headers: { Authorization: action.payload.token },
        }
      );
      if (ques_draft.CategoryId === techId.data[0].categoryQuestionId) {
        // Get Question Skills
        const questionSkills = yield call(
          axios.get,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", {
            headers: { Authorization: action.payload.token },
          }
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
            }, {
              headers: { Authorization: action.payload.token },
            }
          );
        }
      }
    }
    // Category Change
    else {
      console.log("HELLLOOOOO")
      const quesId = yield call(
        axios.put,
        `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`,
        {
          // questionId: action.payload.QuestionId,
          questionString: ques_draft.QuestionName,
          categoryQuestionId: ques_draft.CategoryId,
        }, {
          headers: { Authorization: action.payload.token },
        }
      );
      if (ques_draft.CategoryId === techId.data[0].categoryQuestionId) {
        const ques = yield call(
          axios.post,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill",
          {
            questionId: action.payload.QuestionId,
            skillId: ques_draft.TypeId,
          }, {
            headers: { Authorization: action.payload.token },
          }
        );
      } else if (
        ques_old.data[0].categoryQuestionId ===
        techId.data[0].categoryQuestionId
      ) {
        const questionSkills = yield call(
          axios.get,
          "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", {
            headers: { Authorization: action.payload.token },
          }
        );
        const quesSkil = yield call(
          getQuestionSkillInfo,
          action.payload.QuestionId,
          questionSkills.data
        );
        yield call(
          axios.delete,
          `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`, {
            headers: { Authorization: action.payload.token },
          }
        );
      }
    }
    yield put({
      type: "status/onSuccess",
      payload: "Update question",
    });
    // Load with filter
    yield put({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: action.payload.categoryName,
        skillId: action.payload.skillId,
        skillName: action.payload.skillName,
        languageId: action.payload.languageId,
        languageName: action.payload.languageName,
        softskill: action.payload.softskill,
        token: action.payload.token
      },
    });
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
    yield put({ type: "loading/offLoading" });
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
      "https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion?name=Technology", {
        headers: { Authorization: action.payload.token },
      }
    );
    if (action.payload.CategoryId === techId.data[0].categoryQuestionId) {
      const questionSkills = yield call(
        axios.get,
        "https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill", {
          headers: { Authorization: action.payload.token },
        }
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
          `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${quesSkil.questionSkillsId}`, {
            headers: { Authorization: action.payload.token },
          }
        );
      }
    }

    // Delete Question
    yield call(
      axios.delete,
      `https://leetun2k2-001-site1.gtempurl.com/api/Question/${action.payload.QuestionId}`, {
        headers: { Authorization: action.payload.token },
      }
    );
    yield put({
      type: "status/onSuccess",
      payload: "Delete question",
    });
    // Load with filter
    yield put({
      type: "questionSaga/getQuestionListWithFilter",
      payload: {
        categoryName: action.payload.categoryName,
        skillId: action.payload.skillId,
        skillName: action.payload.skillName,
        languageId: action.payload.languageId,
        languageName: action.payload.languageName,
        softskill: action.payload.softskill,
        token: action.payload.token
      },
    });
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
    yield put({ type: "loading/offLoading" });
    yield put({
      type: "status/onError",
      payload: error.message,
    });
  }
}

function* getInterviewQuestion(action) {
  let token = `Bearer ${action.payload.token}`
  const config = {
    headers: { Authorization: token },
  }
  const responseInterview = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Interview?id=${action.payload.interviewid}`, config)
  const responsePosition = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Position/GetPositionById?positionId=${responseInterview.data.application.position.positionId}`, config)
  const responseSoftList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question/GetAllSoftSkillQuestions/SoftSkill`, config);
  const responseLangList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question/GetAllLanguageQuestions/Language`, config);
  const responseTechList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question/GetAllTechnologyQuestions/Technology`, config);
  const responseQSList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill`, config);

  const responseAllQuestion = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Question`, config)

  const responseCategoryList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/CategoryQuestion`, config)
  const responseSkillList = yield call(axios.get, `https://leetun2k2-001-site1.gtempurl.com/api/Skill`, config)
  console.log("quessoft: ", responseSoftList)
  let quesStruc = [];
  // Soft Skill
  for (let cate of responseCategoryList.data) {
    if (cate.categoryQuestionName == "Soft Skill") {
      let newCate = {
        categoryid: cate.categoryQuestionId,
        categoryname: cate.categoryQuestionName,
        questions: []
      }
      quesStruc.push(newCate)
      for (let softQues of responseAllQuestion.data) {
        if (softQues.categoryQuestionId == cate.categoryQuestionId) {
          let newQuesObj = {
            questionid: softQues.questionId,
            questionstring: softQues.questionString
          }
          quesStruc[0].questions.push(newQuesObj)
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
      quesStruc.push(newCate)
      let newLang = {
        languageid: responsePosition.data.language.languageId,
        languagename: responsePosition.data.language.languageName,
        questions: []
      }
      quesStruc[1].languages.push(newLang)
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
      for (let langQues of responseLangList.data) {
        if (langQues.questionString.slice(0, 5) == prefix) {
          let newQuesObj = {
            questionid: langQues.questionId,
            questionstring: langQues.questionString.slice(5)
          }
          quesStruc[1].languages[0].questions.push(newQuesObj)
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
      quesStruc.push(newCate)
      for (let skill of responseSkillList.data) {
        for (let skillRequired of responsePosition.data.requirements) {
          if (skill.skillId == skillRequired.skillId) {
            let newSkill = {
              skillid: skillRequired.skillId,
              skillname: skill.skillName,
              questions: []
            }
            quesStruc[2].skills.push(newSkill)
            for (let QS of responseQSList.data) {
              if (QS.skillId == skillRequired.skillId)
                for (let techQues of responseTechList.data) {
                  if (techQues.questionId == QS.questionId) {
                    let newQues = {
                      questionid: techQues.questionId,
                      questionstring: techQues.questionString
                    }
                    quesStruc[2].skills[quesStruc[2].skills.length - 1].questions.push(newQues)
                  }
                }
            }
          }
        }
      }

    }
  }
  yield put({ type: "question/setInterviewQuestion", payload: quesStruc });

  // const responsefake = yield call(
  //   axios.get,
  //   `${host.name}/data/questionlist.json`
  // );
  // yield put({
  //   type: "question/setInterviewQuestion",
  //   payload: responsefake.data,
  // });
}

function* getQuestion(action) {
  yield put({ type: "question/setQuestion", action: action.payload });
}

function* questionSaga() {
  yield all([
    takeEvery("questionSaga/getInterviewQuestion", getInterviewQuestion),
    takeEvery("saga/getQuestion", getQuestion),
    takeEvery("questionSaga/getAllQuestion", getAllQuestion),
    takeLatest(
      "questionSaga/getQuestionListWithFilter",
      getQuestionListWithFilter
    ),
    takeEvery("questionSaga/putQuestion", putQuestion),
    takeEvery("questionSaga/postQuestion", postQuestion),
    takeEvery("questionSaga/deleteQuestion", deleteQuestion),
  ]);
}

export default questionSaga;

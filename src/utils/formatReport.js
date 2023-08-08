// -> interview
// <- { "InterviewId": "10",
// "CandidateId": 2,
// "CandidateName": "Nguyễn Văn B",
// "InterviewerId": 2,
// "InterviewerName": "Trần Thị Y",
// "ApplyDate": "21/07/2023",
// "InterviewDate": "25/07/2023",
// "Status": "Pending",
// "Score": 9,
// "TechnologyScore": 8,
// "LanguageScore": 9.25,
// "SoftSkillScore": 10 }

// input: rounds
function getTechnologyScore(input, categorys) {
  if (input === null) {
    return 0;
  }
  let sum = 0;
  let count = 0;
  const techId = categorys.filter(
    (element) => element.categoryQuestionName === "Technology"
  )[0].categoryQuestionId;
  for (let i = 0; i < input.length; i++) {
    if (input[i].question.categoryQuestionId === techId) {
      sum = sum + input[i].score;
      count = count + 1;
    }
  }
  return count === 0 ? sum : sum / count;
}

// input: rounds
function getLanguageScore(input, categorys) {
  if (input === null) {
    return 0;
  }
  let sum = 0;
  let count = 0;
  const langId = categorys.filter(
    (element) => element.categoryQuestionName === "Language"
  )[0].categoryQuestionId;
  for (let i = 0; i < input.length; i++) {
    if (input[i].question.categoryQuestionId === langId) {
      sum = sum + input[i].score;
      count = count + 1;
    }
  }
  return count === 0 ? sum : sum / count;
}

// input: rounds
function getSoftSkillScore(input, categorys) {
  if (input === null) {
    return 0;
  }
  let sum = 0;
  let count = 0;
  const softId = categorys.filter(
    (element) => element.categoryQuestionName === "Soft Skill"
  )[0].categoryQuestionId;
  for (let i = 0; i < input.length; i++) {
    if (input[i].question.categoryQuestionId === softId) {
      sum = sum + input[i].score;
      count = count + 1;
    }
  }
  return count === 0 ? sum : sum / count;
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

export function formatReport(input, categorys) {
//   const output_draft = input.map((element) => {
//     return {
//       InterviewId: element.interviewId,
//       InterviewerName: element.interviewer.user.fullName,
//       InterviewerId: element.interviewer.interviewerId,
//       InterviewerUserId: element.interviewer.userId,
//       CandidateName: element.application.cv.candidate.user.fullName,
//       CandidateId: element.application.cv.candidateId,
//       CandidateUserId: element.application.cv.candidate.userId,
//       ApplyDate: element.application.dateTime,
//       InterviewDate: element.itrsinterview.dateInterview,
//       Status: element.company_Status,
//     };
//   });

  const output = input.map((element) => {
    const techScore = getTechnologyScore(element.rounds, categorys);
    const langScore = getLanguageScore(element.rounds, categorys);
    const softScore = getSoftSkillScore(element.rounds, categorys);
    const totalScore = techScore * 0.5 + langScore * 0.3 + softScore * 0.2;
    return {
      InterviewId: element.interviewId,
      InterviewerName: element.interviewer.user.fullName,
      InterviewerId: element.interviewer.interviewerId,
      InterviewerUserId: element.interviewer.userId,
      CandidateName: element.application.cv.candidate.user.fullName,
      CandidateId: element.application.cv.candidateId,
      CandidateUserId: element.application.cv.candidate.userId,
      ApplyDate: element.application.dateTime,
      InterviewDate: element.itrsinterview.dateInterview,
      Status: element.company_Status,
      Score: element.candidate_Status === "Not start" ? null : roundToTwo(totalScore),
      TechnologyScore: roundToTwo(techScore),
      LanguageScore: roundToTwo(langScore),
      SoftSkillScore: roundToTwo(softScore),
      Sts: element.candidate_Status,
    };
  });
  return output;
}

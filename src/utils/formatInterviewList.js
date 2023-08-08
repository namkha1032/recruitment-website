// input: {
//     "interviewId": "00000000-0000-0000-0000-000000000001",
//     "recruiterId": "00000000-0000-0000-0000-000000000001",
//     "interviewerId": "00000000-0000-0000-0000-000000000001",
//     "applicationId": "00000000-0000-0000-0000-000000000001",
//     "itrsinterviewId": "00000000-0000-0000-0000-000000000001",
//     "company_Status": "00000000-0000-0000-0000-000000000001",
//     "candidate_Status": "00000000-0000-0000-0000-000000000001",
//     "notes": "00000000-0000-0000-0000-000000000001",
//     "priority": "00000000-0000-0000-0000-000000000001",
//     "isDeleted": false
//   }
// itrsinterviews: {
//     "itrsinterviewId": "00000000-0000-0000-0000-000000000001",
//     "dateInterview": "2023-07-06T00:00:00",
//     "shiftId": "00000000-0000-0000-0000-000000000001",
//     "roomId": "00000000-0000-0000-0000-000000000001"
// }
// applications: {
//     "applicationId": "00000000-0000-0000-0000-000000000001",
//     "cv": {
//       "cvid": "00000000-0000-0000-0000-000000000001",
//       "candidateId": "00000000-0000-0000-0000-000000000001",
//       "experience": "string",
//       "cvPdf": "string",
//       "cvName": "string",
//       "introduction": "string",
//       "education": "string",
//       "isDeleted": true,
//       "skills": [],
//       "certificates": []
//     },
//     "position": {
//       "positionId": "00000000-0000-0000-0000-000000000001",
//       "positionName": "Junior",
//       "description": "no",
//       "requirementId": "00000000-0000-0000-0000-000000000000",
//       "requirement": null,
//       "salary": 100,
//       "maxHiringQty": 10,
//       "startDate": "2001-01-01T00:00:00",
//       "endDate": "2009-09-09T00:00:00",
//       "departmentId": "00000000-0000-0000-0000-000000000001",
//       "department": null,
//       "languageId": "00000000-0000-0000-0000-000000000001",
//       "language": null,
//       "isDeleted": false
//     },
//     "dateTime": "2005-05-05T00:00:00",
//     "company_Status": "afafs",
//     "candidate_Status": "00000000-0000-0000-0000-000000000001",
//     "priority": "0"
//   }
// shifts: {
//     "shiftId": "00000000-0000-0000-0000-000000000001",
//     "shiftTimeStart": 1,
//     "shiftTimeEnd": 2
//   },
// rooms: {
//     "roomId": "00000000-0000-0000-0000-000000000001",
//     "roomName": "F1-Yale"
//   },
// {
//     "recruiterId": "13b849af-bea9-49a4-a9e4-316d13b3a08a",
//     "userId": "f95c92e2-20b3-43e2-80f1-91e1c8e2090a",
//     "departmentId": "00000000-0000-0000-0000-000000000001",
//     "user": {
//       "id": "f95c92e2-20b3-43e2-80f1-91e1c8e2090a",
//       "fullName": "team_FE",
//       "dateOfBirth": "0001-01-01T00:00:00",
//       "imageURL": null,
//       "userName": "recruiter1",
//       "email": "recruiter1@example.com"
//     },
//     "isDeleted": false
//   }
// interviewers: {
//     "interviewerId": "24cbb8bd-9194-46c0-a15a-520d7ba84046",
//     "userId": "3c6159f6-35b2-47e1-a758-d0dccd1796b7",
//     "departmentId": "00000000-0000-0000-0000-000000000001",
//     "user": {
//       "id": "3c6159f6-35b2-47e1-a758-d0dccd1796b7",
//       "fullName": "team4",
//       "dateOfBirth": "0001-01-01T00:00:00",
//       "imageURL": null,
//       "userName": "interviewer1",
//       "email": "interviewer1@example.com"
//     },
//     "isDeleted": false
//   }
// candidates: {
//     "candidateId": "e7a70c01-ece1-43fe-883f-2018e75fc2a0",
//     "userId": "e669407a-193c-4d36-8790-def94fb5660a",
//     "experience": "",
//     "isDeleted": false,
//     "user": {
//       "id": "e669407a-193c-4d36-8790-def94fb5660a",
//       "fullName": "Chad Giga",
//       "dateOfBirth": "0001-01-01T00:00:00",
//       "imageURL": null,
//       "userName": "gigachad1",
//       "email": "gigachad@example.com"
//     }
//   },
import { formatDate } from "./formatDate";

// export function formatInterviewList(input, applications, itrsinterviews, rooms, shifts, recruiters, interviewers, candidates) {
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < applications.length; j++) {
//             if (input[i].applicationId === applications[j].applicationId) {
//                 input[i] = {
//                     ...input[i],
//                     candidateId: applications[j].cv.candidateId,
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < itrsinterviews.length; j++) {
//             if (input[i].itrsinterviewId === itrsinterviews[j].itrsinterviewId) {
//                 input[i] = {
//                     ...input[i],
//                     dateInterview: itrsinterviews[j].dateInterview,
//                     shiftId: itrsinterviews[j].shiftId,
//                     roomId: itrsinterviews[j].roomId,
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < shifts.length; j++) {
//             if (input[i].roomId === rooms[j].roomId) {
//                 input[i] = {
//                     ...input[i],
//                     roomName: rooms[j].roomName,
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < shifts.length; j++) {
//             if (input[i].shiftId === shifts[j].shiftId) {
//                 input[i] = {
//                     ...input[i],
//                     shiftTimeStart: shifts[j].shiftTimeStart,
//                     shiftTimeEnd: shifts[j].shiftTimeStart,
//                 }
//             }
//         }
//     }
//     // for (let i = 0; i < input.length; i++) {
//     //     for (let j = 0; j < recruiters.length; j++) {
//     //         if (input[i].recruiterId === recruiters[j].recruiterId) {
//     //             input[i] = {
//     //                 ...input[i],
//     //                 recruiterName: recruiters[j].user.fullName,
//     //             }
//     //         }
//     //     }
//     // }
//     // console.log(input)
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < interviewers.length; j++) {
//             if (input[i].interviewerId === interviewers[j].interviewerId) {
//                 input[i] = {
//                     ...input[i],
//                     interviewerName: interviewers[j].user.fullName,
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < candidates.length; j++) {
//             if (input[i].candidateId === candidates[j].candidateId) {
//                 input[i] = {
//                     ...input[i],
//                     candidateName: candidates[j].user.fullName,
//                 }
//             }
//         }
//     }
//     const output = input.map((element) => {
//         return {
//             InterviewId: element.interviewId,
//             InterviewerName: element.interviewerName,
//             InterviewerId: element.interviewerId,
//             CandidateName: element.candidateName,
//             CandidateId: element.candidateId,
//             StartTime: element.dateInterview,
//             Shift: element.shiftTimeStart,
//             Room: element.roomName,
//             Status: element.candidate_Status,
//             Priority: element.company_Status,
//         }
//     })
//     return output
// }

export function formatInterviewList(input) {
  const output = input.map((element) => {
    return {
      InterviewId: element.interviewId,
      InterviewerName: element.interviewer.user.fullName,
      InterviewerId: element.interviewer.interviewerId,
      InterviewerUserId: element.interviewer.userId,
      CandidateName: element.application.cv.candidate.user.fullName,
      CandidateId: element.application.cv.candidateId,
      CandidateUserId: element.application.cv.candidate.userId,
      StartTime: element.itrsinterview.dateInterview,
      Shift: element.itrsinterview.shift.shiftTimeStart,
      Room: element.itrsinterview.room.roomName,
      Status: element.candidate_Status,
      Priority: element.company_Status,
      DepartmentId: element.application.position.department.departmentId,
      PositionId: element.application.position.positionId,
    };
  });
  return output;
}

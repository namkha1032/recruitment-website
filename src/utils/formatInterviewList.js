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

import { formatDate } from "./formatDate"

export function formatInterviewList(input, applications, itrsinterviews, rooms, shifts) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < applications.length; j++) {
            if (input[i].applicationId === applications[j].applicationId) {
                input[i] = {
                    ...input[i],
                    candidateId: applications[j].cv.candidateId,
                }
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < itrsinterviews.length; j++) {
            if (input[i].itrsinterviewId === itrsinterviews[j].itrsinterviewId) {
                input[i] = {
                    ...input[i],
                    dateInterview: itrsinterviews[j].dateInterview,
                    shiftId: itrsinterviews[j].shiftId,
                    roomId: itrsinterviews[j].roomId,
                }
            }
        }
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < shifts.length; j++) {
            if (input[i].roomId === rooms[j].roomId) {
                input[i] = {
                    ...input[i],
                    roomName: rooms[j].roomName,
                }
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < shifts.length; j++) {
            if (input[i].shiftId === shifts[j].shiftId) {
                input[i] = {
                    ...input[i],
                    shiftTimeStart: shifts[j].shiftTimeStart,
                    shiftTimeEnd: shifts[j].shiftTimeStart,
                }
            }
        }
    }
    // console.log(input)
    const output = input.map((element) => {
        return {
            InterviewId: element.interviewId,
            InterviewerName: "CONG PHAM QUOC VIET",
            InterviewerId: element.interviewerId,
            CandidateName: "CAO TRAN ANH KHOA",
            CandidateId: element.candidateId,
            StartTime: formatDate(element.dateInterview),
            Shift: element.shiftTimeStart,
            Room: element.roomName,
            Status: element.candidate_Status,
            Priority: element.company_Status,
        }
    })
    return output
}
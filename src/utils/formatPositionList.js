// JSON <- getPositionList
// {
//   "PositionId": 0, !!!
//   "PositionName": "",
//   "Description": "",
//   "MaxHiringQty": 0,
//   "HiredQty": 0,
//   "StartDate": "11/09/2023",
//   "EndDate": "11/12/2023",
//   "Status": [true, false] ~ ["Active", "Inactive"] // Backend không có -> Bỏ
// }
// input: {
//   "positionId": "00000000-0000-0000-0000-000000000001",
//   "positionName": "Junior",
//   "description": "no",
//   "salary": 100,
//   "maxHiringQty": 10,
//   "startDate": "2001-01-01T00:00:00",
//   "endDate": "2009-09-09T00:00:00",
//   "department": {
//     "departmentId": "00000000-0000-0000-0000-000000000001",
//     "departmentName": "IT",
//     "address": "f1",
//     "email": "a@a.a",
//     "phone": "00",
//     "website": "a",
//     "isDeleted": true
//   },
//   "language": {
//     "languageId": "00000000-0000-0000-0000-000000000001",
//     "languageName": "js",
//     "isDeleted": true
//   },
//   "recruiter": {
//     "recruiterId": "00000000-0000-0000-0000-000000000001",
//     "userId": "c79f77b6-7832-4368-aa88-68f8e39c295f",
//     "departmentId": "00000000-0000-0000-0000-000000000001",
//     "user": null,
//     "isDeleted": false
//   },
//   "isDeleted": false,
//   "requirements": [
//     {
//       "requirementId": "00000000-0000-0000-0000-000000000001",
//       "positionId": "00000000-0000-0000-0000-000000000001",
//       "skillId": "00000000-0000-0000-0000-000000000001",
//       "experience": "10",
//       "notes": "10",
//       "isDeleted": false
//     }
//   ]
// }
// slice(a,b) -> from a to b - 1

import { formatDate } from "./formatDate";
import { getNumOfCandidatePosition } from "./getNumOfCandidatePosition";

export function formatPositionList(input, candidatesPosition) {
  const output_draft = input.map((element) => {
    return {
      PositionId: element.positionId,
      PositionName: element.positionName,
      Description: element.description,
      Salary: element.salary,
      MaxHiringQty: element.maxHiringQty,
      StartDate: element.startDate,
      EndDate: element.endDate,
      DepartmentId: element.department.departmentId,
      LanguageId: element.language.languageId,
      RecruiterId: element.recruiter.recruiterId,
      Status: element.isDeleted
    };
  });
  let output = []
  for (let i = 0; i < output_draft.length; i++) {
    output.push({
      ...output_draft[i],
      HiredQty: getNumOfCandidatePosition(output_draft[i].PositionId, candidatesPosition),
    })
  }
  return output;
}

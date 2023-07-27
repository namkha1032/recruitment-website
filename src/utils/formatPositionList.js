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
// slice(a,b) -> from a to b - 1

import { formatDate } from "./formatDate";

export function formatPositionList(input) {
  const output = input.map((element) => {
    return {
      PositionId: element.positionId,
      PositionName: element.positionName,
      Description: element.description,
      MaxHiringQty: element.maxHiringQty,
      HiredQty: 0,
      StartDate: formatDate(element.startDate.slice(0, 10)),
      EndDate: formatDate(element.endDate.slice(0, 10)),
      Status: element.isDeleted
    };
  });
  console.log(output);
  return output;
}

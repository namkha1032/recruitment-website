// JSON <- Event
// {
//   "EventId": 0,
//   "EventCampus": "",
//   "EventName": "",
//   "EventDatetime: "",
//   "CreatedById": 0,
//   "CreatedByName": "",
//   "NumOfJoined": 0,
//   "Status": [true, false] ~ ["Upcoming", "Finished"]
// }

import { formatDatetime } from "./formatDate";

export function formatEventList(input) {
  const output = input.map((element) => {
    return {
      EventId: element.eventId,
      EventCampus: element.place,
      EventDescription: element.description,
      EventName: element.eventName,
      CreatedById: element.recruiterId,
      CreatedByName: element.recruiterId,
      EventDateTime: formatDatetime(element.datetimeEvent),
      NumOfJoined: 0,
      Status: element.isDeleted
    };
  });
  console.log(output)
  return output
}

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
import { getEventStatus } from "./getEventStatus";
import { getNumOfCandidateEvent } from "./getNumOfCandidateEvent";

export function formatEventList(input, candidatesEvent,image) {
  let i = -1; 
  const n = image.length
  console.log("------------------------")
  const output_draft = input.map((element) => {
    i = i + 1
    if (i === n) i =0
    return {
      EventId: element.eventId,
      EventCampus: element.place,
      EventDescription: element.description,
      EventName: element.eventName,
      CreatedById: element.recruiterId,
      CreatedByName: element.recruiterId,
      EventDateTime: element.datetimeEvent,
      Status: getEventStatus(element.datetimeEvent),
      Image:`/${image[i]}`
    };
  });
  let output = []
  for (let i = 0; i < output_draft.length; i++) {
    output.push({
      ...output_draft[i],
      NumOfJoined: getNumOfCandidateEvent(output_draft[i].EventId, candidatesEvent),
    })
  }
  return output
}

// JSON <- Event
// {
//   "EventId": 0,
//   "EventCampus": "",
//   "EventName": "",
//   "CreatedById": 0,
//   "CreatedByName": "",
//   "NumOfJoined": 0,
//   "Status": [true, false] ~ ["Upcoming", "Finished"]
// }

export function formatEventList(input) {
  const output = input.map((element) => {
    return {
      EventId: element.eventId,
      EventCampus: element.place,
      EventDescription: element.description,
      EventName: element.eventName,
      CreatedById: element.recruiterId,
      CreatedByName: "Khoa Cao Tran Anh",
      NumOfJoined: 0,
      Status: element.isDeleted
    };
  });
  return output
}

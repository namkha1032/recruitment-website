// candidatesEvent: {
//  "eventName": null,
//  "candidateJoinEventId": "00000000-0000-0000-0000-000000000001",
//  "candidateId": "00000000-0000-0000-0000-000000000001",
//  "eventId": "00000000-0000-0000-0000-000000000001"
// }

export function getNumOfCandidateEvent(input, candidatesEvent) {
    const output = candidatesEvent.filter(element => element.eventId === input)
    return output.length
}
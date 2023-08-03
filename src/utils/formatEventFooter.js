

import { getEventStatus } from "./getEventStatus";


export function formatEventFooter(input) {
    const output_draft = input.map((element) => {
      return {
        EventId: element.eventId,
        EventCampus: element.place,
        EventDescription: element.description,
        EventName: element.eventName,
        CreatedById: element.recruiterId,
        CreatedByName: element.recruiterId,
        EventDateTime: element.datetimeEvent,
        Status: getEventStatus(element.datetimeEvent),
      };
    });
 
    return output_draft
  }
  
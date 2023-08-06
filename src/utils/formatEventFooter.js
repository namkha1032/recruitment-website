

import { useSelector } from "react-redux";
import { getEventStatus } from "./getEventStatus";


export function formatEventFooter(input,image) {
    let i = -1; 
    const n = image.length
    const output_draft = input.map((element) => {
      i = i+1
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
 
    return output_draft
  }
  
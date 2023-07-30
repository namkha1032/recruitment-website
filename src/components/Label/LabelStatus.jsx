import { Chip } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import SportsScoreRoundedIcon from "@mui/icons-material/SportsScoreRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { CloseRounded, DoneRounded } from "@mui/icons-material";

export function NullString() {
  return <Chip icon={<PriorityHighIcon />} label="Unavailable" />;
}

export function NotStart() {
  return (
    <Chip
      label="Not start"
      variant="outlined"
      style={{
        color: "#1565C0",
        backgroundColor: "white",
        borderColor: "#1565C0",
      }}
      
      icon={
        <EventNoteRoundedIcon
          style={{
            color: "#1565C0",
            
          }}
        />
      }
    />
  );
}

export function Pending() {
  return (
    <Chip
      label="Pending"
      variant="outlined"
      style={{
        // color: "#E0E0E0",
        color: "black.400",
        backgroundColor: "white",
        borderColor: "black.400",
      }}
      icon={
        <MoreHorizRoundedIcon
          style={{
            color: "black.400",
          }}
        />
      }
    />
  );
}

export function Completed() {
  return (
    <Chip
      label="Finished"
      variant="outlined"
      style={{
        // color: "#E0E0E0",
        color: "black.400",
        backgroundColor: "white",
        // borderColor: "#E0E0E0",
        borderColor: "black.400"
      }}
      icon={
        <SportsScoreRoundedIcon
          style={{
            color: "black.400",
          }}
        />
      }
    />
  );
}




export function Upcoming() {
  return (
    <Chip
      label="Upcoming"
      variant="outlined"
      style={{
        color: "#E0E0E0",
        backgroundColor: "white",
        borderColor: "#E0E0E0",
      }}
      icon={
        <EventNoteRoundedIcon
          style={{
            color: "#E0E0E0",
          }}
        />
      }
    />
  );
}

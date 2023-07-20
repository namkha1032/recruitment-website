import { Chip } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import FlightLandRoundedIcon from '@mui/icons-material/FlightLandRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SportsScoreRoundedIcon from '@mui/icons-material/SportsScoreRounded';

export function NullString() {
  return <Chip icon={<PriorityHighIcon />} label="Unavailable" />;
}

export function NotStart() {
  return (
    <Chip
      label="Not start"
      variant="outlined"
      style={{
        color: "#008631",
        backgroundColor: "white",
        borderColor: "#008631",
      }}
      icon={
        <EventNoteRoundedIcon
          style={{
            color: "#008631",
          }}
        />
      }
    />
  );
}

export function Pending() {
  return (
    <Chip
      label="Going"
      variant="outlined"
      style={{
        color: "#1565C0",
        backgroundColor: "white",
        borderColor: "#1565C0",
      }}
      icon={
        <RocketLaunchRoundedIcon
          style={{
            color: "#1565C0",
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
        color: "#E0E0E0",
        backgroundColor: "white",
        borderColor: "#E0E0E0",
      }}
      
      icon={<SportsScoreRoundedIcon style={{
        color: "#E0E0E0",
      }}/>}
    />
  );
}

export function Postpone() {
  return (
    <Chip
      label="Postponed"
      variant="outlined"
      style={{
        color: "#cc3300",
        backgroundColor: "white",
        borderColor: "#cc3300",
      }}
      icon={
        <DoNotDisturbOnRoundedIcon
          style={{
            color: "#cc3300",
          }}
        />
      }
    />
  );
}

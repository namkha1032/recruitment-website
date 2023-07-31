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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


export function NullString() {
  // return <Chip icon={<PriorityHighIcon />} label="" />;
  return <PriorityHighIcon />
}

export function NotStart() {
  return (
    <Chip
      label="Not start"
      variant="outlined"
      style={{
        // color: "#E0E0E0",
        color: "black.400",
        backgroundColor: "white",
        // borderColor: "#E0E0E0",
        borderColor: "black.400"
      }}
      icon={
        <EventNoteRoundedIcon
          style={{
            color: "black.400",
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
        color: "#1565C0",
        backgroundColor: "white",
        borderColor: "#1565C0",
      }}
      icon={
        <SportsScoreRoundedIcon
          style={{
            color: "#1565C0",
          }}
        />
      }
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

export function Technology() {
  return (
    <Chip
      label="Technology"
      variant="outlined"
      style={{
        color: "#1565C0",
        backgroundColor: "white",
        borderColor: "#1565C0",
      }}
      icon={
        <SchoolRoundedIcon
          style={{
            color: "#1565C0",
          }}
        />
      }
    />
  );
}

export function Language() {
  return (
    <Chip
      label="Language"
      variant="outlined"
      style={{
        color: "#008631",
        backgroundColor: "white",
        borderColor: "#008631",
      }}
      icon={
        <LanguageRoundedIcon
          style={{
            color: "#008631",
          }}
        />
      }
    />
  );
}

export function SoftSkill() {
  return (
    <Chip
      label="Soft Skills"
      variant="outlined"
      style={{
        color: "#AA336A",
        backgroundColor: "white",
        borderColor: "#AA336A",
      }}
      icon={
        <PsychologyRoundedIcon
          style={{
            color: "#AA336A",
          }}
        />
      }
    />
  );
}

export function Active() {
  return (
    <Chip
      label="Active"
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

export function Inactive() {
  return (
    <Chip
      label="Inactive"
      variant="outlined"
      style={{
        // color: "#E0E0E0",
        color: "black.400",
        backgroundColor: "white",
        // borderColor: "#E0E0E0",
        color: "black.400",
      }}
      icon={
        <DoNotDisturbOnRoundedIcon
          style={{
            // color: "#E0E0E0",
            color: "black.400",
          }}
        />
      }
    />
  );
}

export function Pass() {
  return (
    <Chip
      label="Passed"
      variant="outlined"
      style={{
        color: "#008631",
        backgroundColor: "white",
        borderColor: "#008631",
      }}
      icon={
        <DoneRounded
          style={{
            color: "#008631",
          }}
        />
      }
    />
  );
}

export function Fail() {
  return (
    <Chip
      label="Failed"
      variant="outlined"
      style={{
        color: "#cc3300",
        backgroundColor: "white",
        borderColor: "#cc3300",
      }}
      icon={
        <CloseRounded
          style={{
            color: "#cc3300",
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

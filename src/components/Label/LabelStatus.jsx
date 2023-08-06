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

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export function NullString() {
  return <Chip icon={<PriorityHighIcon />} label="Unavailable" />;
}

export function NotStart() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {isSm ? (
        <Chip
          label="Not start"
          variant="outlined"
          sx={{
            color: 'black.400',
            backgroundColor: 'white',
            borderColor: 'black.400',
          }}
          icon={
            <EventNoteRoundedIcon
              style={{ color: 'black.400' }}
            />
          }
        />
      ) : (
        <EventNoteRoundedIcon
          style={{ color: 'black.400' }}
        />
      )}
    </>
  );
}
export function Pending() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      {isSm ? (
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
      ) : (
        <MoreHorizRoundedIcon
          style={{
            color: "black.400",
          }}
        />
      )
      }
    </>

  );
}

export function Completed() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>{
      isSm ? (
        <Chip
          label="Finished"
          variant="outlined"
          style={{
            // color: "#E0E0E0",
            color: "1565C0 ",
            backgroundColor: "white",
            // borderColor: "#E0E0E0",
            borderColor: "1565C0 "
          }}
          icon={
            <SportsScoreRoundedIcon
              style={{
                color: "1565C0 ",
              }}
            />
          }
        />
      ) :
        (
          <SportsScoreRoundedIcon
            style={{
              color: "1565C0 ",
            }}
          />
        )
    }
    </>

  );
}


export function Pass() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>{
      isSm ? (
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
      ) :
        (
          <DoneRounded
            style={{
              color: "#008631",
            }}
          />
        )
    }
    </>

  );
}


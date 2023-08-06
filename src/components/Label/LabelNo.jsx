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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    // return <Chip icon={<PriorityHighIcon />} label="" />;
    return <PriorityHighIcon />;
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
                borderColor: "black.400",
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <DoNotDisturbOnRoundedIcon
                style={{
                    color: "#cc3300",
                }}
            />
        );
    }
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <SchoolRoundedIcon
                style={{
                    color: "#1565C0",
                }}
            />
        );
    }
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <LanguageRoundedIcon
                style={{
                    color: "#008631",
                }}
            />
        );
    }
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <PsychologyRoundedIcon
                style={{
                    color: "#AA336A",
                }}
            />
        );
    }
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <RocketLaunchRoundedIcon
                style={{
                    color: "#1565C0",
                }}
            />
        );
    }
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <DoNotDisturbOnRoundedIcon
                style={{
                    // color: "#E0E0E0",
                    color: "black.400",
                }}
            />
        );
    }
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
            variant="filled"
            size="large"
            color="success"
            icon={
                <DoneRounded
                />
            }
        />
    );
}

export function Fail() {
    return (
        <Chip
            label="Failed"
            variant="filled"
            size="large"
            color="error"
            icon={
                <CloseRounded
                />
            }
        />
    );
}

export function Accepted() {
    return (
        <Chip
            label="Accepted"
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

export function Rejected() {
    return (
        <Chip
            label="Rejected"
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
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    if (isXs) {
        return (
            <EventNoteRoundedIcon
                style={{
                    color: "#E0E0E0",
                }}
            />
        );
    }
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

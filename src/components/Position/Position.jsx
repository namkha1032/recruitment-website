import { Chip } from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';

export function Candidate() {
    return (
        <Chip
            label="Candidate"
            variant="outlined"
            style={{
                color: "#008631",
                backgroundColor: "white",
                borderColor: "#008631",
            }}
            icon={
                <PersonRoundedIcon
                    style={{
                        color: "#008631",
                    }}
                />
            }
        />
    );
}

export function Interviewer() {
    return (
        <Chip
            label="Interviewer"
            variant="outlined"
            style={{
                color: "#1565C0",
                backgroundColor: "white",
                borderColor: "#1565C0",
            }}
            icon={
                <RecordVoiceOverRoundedIcon
                    style={{
                        color: "#1565C0",
                    }}
                />
            }
        />
    );
}

export function Recruiter() {
    return (
        <Chip
            label="Recruiter"
            variant="outlined"
            style={{
                color: "#ff784e",
                backgroundColor: "white",
                borderColor: "#ff784e",
            }}
            icon={
                <PersonSearchRoundedIcon
                    style={{
                        color: "#ff784e",
                    }}
                />
            }
        />
    );
}

export function Admin() {
    return (
        <Chip
            label="Admin"
            variant="outlined"
            style={{
                color: "#ff1744",
                backgroundColor: "white",
                borderColor: "#ff1744",
            }}
            icon={
                <ManageAccountsRoundedIcon
                    style={{
                        color: "#ff1744",
                    }}
                />
            }
        />
    );
}
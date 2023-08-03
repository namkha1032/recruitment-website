import { useState } from "react";
import {
    IconButton,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    Box
} from "@mui/material";
import Grid from "@mui/material/Grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CategoryIcon from '@mui/icons-material/Category';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import SourceIcon from '@mui/icons-material/Source';
import Divider from "@mui/material/Divider";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import { Global } from "@emotion/react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LanguageIcon from '@mui/icons-material/Language';
import TungstenIcon from '@mui/icons-material/Tungsten';
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import utils
import transformDateOnly from "../../../utils/transformDateOnly";
const InterviewerDialog = (props) => {
    // --------------------------------------
    const params = props.params
    const cate = props.cate
    const skillname = props.skillname
    const languagename = props.languagename
    // --------------------------------------
    const interviewerid = params.row.interviewerid
    const interviewername = params.row.interviewername
    const dob = params.row.dob
    const email = params.row.email
    const departmentname = params.row.departmentname
    const avatar = params.row.avatar


    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    let left = isSm ? 4 : 5
    let right = isSm ? 7 : 6
    let gap = 1
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    let categoryName
    let categoryIcon
    let chipColor
    if (cate == 0) {
        categoryName = "Soft Skills"
        categoryIcon = <HandshakeIcon />
        chipColor = "secondary"
    }
    else if (cate == 1) {
        categoryName = "Language"
        categoryIcon = <LanguageIcon />
        chipColor = "success"
    }
    else if (cate == 2) {
        categoryName = "Technology"
        categoryIcon = <TungstenIcon />
        chipColor = "warning"
    }
    let [open, setOpen] = useState(false)
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} sx={{ borderRadius: 4 }}>
                <DialogTitle>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", columnGap: 3 }}>
                        <Avatar sx={{ width: 100, height: 100 }} src={avatar}>
                            K
                        </Avatar>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                {interviewername}
                            </Typography>
                            <Typography variant="button" sx={{ color: "grey.700" }}>
                                Interviewer
                            </Typography>
                        </Box>
                    </Box>
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Box sx={{ display: "flex" }}>
                        <Box>
                            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <Grid3x3Icon />
                                <TextField
                                    size="small"
                                    label="ID"
                                    defaultValue={interviewerid}
                                    sx={{ width: "100%" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <CalendarTodayIcon />
                                <TextField
                                    size="small"
                                    label="Date of birth"
                                    defaultValue={transformDateOnly(dob)}
                                    sx={{ width: "100%" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <AlternateEmailIcon />
                                <TextField
                                    size="small"
                                    label="Email"
                                    defaultValue={email}
                                    sx={{ width: "100%" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Box>
                        </Box>
                        <Divider orientation="vertical" />
                    </Box>
                </DialogContent>
            </Dialog>
            <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30, cursor: "pointer" }} src={avatar}>
                K
            </Avatar>
        </>
    )
}

export default InterviewerDialog
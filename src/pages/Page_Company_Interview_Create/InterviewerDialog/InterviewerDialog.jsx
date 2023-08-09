import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Typography,
    Box
} from "@mui/material";
import Grid from "@mui/material/Grid";

import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import Divider from "@mui/material/Divider";
import { useTheme } from '@mui/material/styles';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LanguageIcon from '@mui/icons-material/Language';
import TungstenIcon from '@mui/icons-material/Tungsten';
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import BlackOutlinedButton from "../../../components/BlackOutlinedButton/BlackOutlinedButton";
// import utils
import transformDateOnly from "../../../utils/transformDateOnly";
const InterviewerDialog = (props) => {
    // --------------------------------------
    const params = props.params
    const cate = props.cate
    // --------------------------------------
    const interviewerid = params.row.interviewerid
    const userid = params.row.userid
    const interviewername = params.row.interviewername
    const dob = params.row.dob
    const email = params.row.email
    const departmentname = params.row.departmentname
    const departmentaddress = params.row.departmentaddress
    const departmentemail = params.row.departmentemail
    const departmentphone = params.row.departmentphone
    const departmentwebsite = params.row.departmentwebsite
    const avatar = params.row.avatar


    
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
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <a href={`/profile/${userid}`} target="_blank">
                                <BlackOutlinedButton handleClick={() => { console.log("") }}>
                                    View profile
                                </BlackOutlinedButton>
                            </a>
                        </Box>
                    </Box>
                </DialogTitle>
                <Divider />
                <DialogContent sx={{ width: "600px" }}>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Profile
                            </Typography>
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
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                {departmentname}
                            </Typography>
                            <MenuList>
                                <MenuItem sx={{ paddingX: 0 }}>
                                    <ListItemIcon>
                                        <BusinessIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>{departmentaddress}</ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ paddingX: 0 }}>
                                    <ListItemIcon>
                                        <EmailIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>{departmentemail}</ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ paddingX: 0 }}>
                                    <ListItemIcon>
                                        <LocalPhoneIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>{departmentphone}</ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ paddingX: 0 }}>
                                    <ListItemIcon>
                                        <LanguageIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>{departmentwebsite}</ListItemText>
                                </MenuItem>
                            </MenuList>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ columnGap: 4 }}>
                </DialogActions>
            </Dialog>
            <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30, cursor: "pointer" }} src={avatar}>
                K
            </Avatar>
        </>
    )
}

export default InterviewerDialog

// import MUI components
import {
    Typography,
    Chip,
    Divider,
    Avatar
} from "@mui/material";
import Grid from "@mui/material/Grid";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DomainIcon from '@mui/icons-material/Domain';
const TableResult = (props) => {
    const {
        chosenDate, setChosenDate,
        chosenShift, setChosenShift,
        chosenInterviewer, setChosenInterviewer,
        chosenRoom, setChosenRoom,
        setBusyInterviewer, setBusyRoom
    } = props
    let shiftStart = ""
    let shiftEnd = ""
    if (chosenShift) {
        let startSmallTen = "0" + chosenShift.shiftstart + ":00:00"
        let startLargeTen = chosenShift.shiftstart + ":00:00"
        let endSmallTen = "0" + chosenShift.shiftend + ":00:00"
        let endLargeTen = chosenShift.shiftend + ":00:00"
        shiftStart = chosenShift.shiftstart < 10 ? startSmallTen : startLargeTen
        shiftEnd = chosenShift.shiftend < 10 ? endSmallTen : endLargeTen
    }
    return (
        <>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    <Typography variant="h6">Interviewer: </Typography>
                </Grid>
                <Grid item xs={8}>
                    {chosenInterviewer &&
                        <Chip
                            label={chosenInterviewer.interviewername}
                            variant="outlined"
                            avatar={<Avatar alt="Natacha" src={chosenInterviewer.avatar} />}
                            onDelete={() => { setChosenInterviewer(null) }}
                        />}
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">Date: </Typography>
                </Grid>
                <Grid item xs={8}>
                    {chosenDate &&
                        <Chip
                            label={new Date(chosenDate).toLocaleDateString()}
                            icon={<EventAvailableIcon />}
                            variant="outlined"
                            onDelete={() => {
                                setChosenDate(null)
                                setChosenShift(null)
                                setBusyInterviewer([])
                                setBusyRoom([])
                            }}
                        />}
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">Time: </Typography>
                </Grid>
                <Grid item xs={8}>
                    {chosenShift &&
                        <Chip
                            label={`${shiftStart} to ${shiftEnd}`}
                            variant="outlined"
                            icon={<AccessTimeIcon />}
                            onDelete={() => {
                                setChosenShift(null)
                                setBusyInterviewer([])
                                setBusyRoom([])
                            }}
                        />}
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">Room: </Typography>
                </Grid>
                <Grid item xs={8}>
                    {chosenRoom &&
                        <Chip
                            label={chosenRoom.roomname}
                            icon={<DomainIcon />}
                            variant="outlined"
                            onDelete={() => {
                                setChosenRoom(null)
                            }}
                        />}
                </Grid>
            </Grid>
        </>
    )
}

export default TableResult
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Chip, Box, Stack } from "@mui/material"
import RadarIcon from '@mui/icons-material/Radar';
import RecommendIcon from '@mui/icons-material/Recommend';
import LanguageIcon from '@mui/icons-material/Language';
import ScheduleIcon from '@mui/icons-material/Schedule';
import RoomIcon from '@mui/icons-material/Room';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import './Page_Interview_Id.css'
import Divider from "@mui/material/Divider";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import ArticleIcon from '@mui/icons-material/Article';
import DetailsIcon from '@mui/icons-material/Details';
// import gigacard
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssistantIcon from '@mui/icons-material/Assistant';
// import Page_Profile_Id_Cv_Id from "../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv"
import CV from "../../components/CV/CV"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { formatDate } from "../../utils/formatDate";
import cleanStore from "../../utils/cleanStore";

const Page_Interview_Id = ({ cvid }) => {
    let { interviewid } = useParams();
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    const interviewidinfo = useSelector(state => state.interviewidInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'saga/getInterviewInfo', payload: interviewid })
        return () => {
            cleanStore(dispatch);
        }
    }, [])
    const shift = useSelector(state => state.shift);
    console.log("interviewid", interviewidinfo);
    let left = 5
    let right = 6
    let gap = 2
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    const room = useSelector(state => state.room);
    const interviewer = useSelector(state => state.interviewer);
    const department = useSelector(state => state.department);
    console.log("intermain", interviewer);
    console.log("shiftmain", shift);
    console.log("roommain", room);
    console.log('departmain', department);
    // const requirements = interviewidinfo ? interviewidinfo[0].requirement : [];

    const date = interviewidinfo ? formatDate(interviewidinfo.dateInterview.slice(0,10)) : [];
    console.log("interview", interviewid);
    return (
        interviewidinfo && room && shift && department &&
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                        Detail of the interview
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <GigaCard>
                                <GigaCardHeader color={"black"} headerIcon={<ArticleIcon sx={{ fontSize: "inherit" }} />}>
                                    General information
                                </GigaCardHeader>
                                <GigaCardBody >
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left}  sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <ScheduleIcon />
                                                <Typography variant="h6">
                                                    Date time
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                                {/* 14:00 25/07/2023 */}
                                                {/* {`${interviewidinfo[0].date}${' '}${interviewidinfo[0].time}`} */}
                                                {`${date}${' '}${shift[0].shiftTimeStart}${'h'}${' - '}${shift[0].shiftTimeEnd}${'h'}`}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <RoomIcon />
                                                <Typography variant="h6">
                                                    Room
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                                {/* {interviewidinfo[0].room} */}
                                                {/* 202B4 */}
                                                {room[0].roomName}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Divider sx={{ marginY: 3 }} />
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <RadarIcon />
                                                <Typography variant="h6">
                                                    Position
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                Front-end Development 
                                                {/* {interviewidinfo[0].positionName} */}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <RecommendIcon />
                                                <Typography variant="h6">
                                                    Requirement
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                                {/* {requires.map((require) => (

                                                    <Chip key={require.skillId} sx={{ margin: "0px 0px 5px 8px" }} value={require.skillName} label={require.skillName} variant='outlined' size='medium' color="warning" />

                                                ))} */}
                                                {requires.map((require) => (

                                                    <Chip key={require.id} sx={{ margin: "0px 0px 5px 8px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />

                                                ))}
                                            </Stack>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <LanguageIcon />
                                                <Typography variant="h6">
                                                    Language
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>

                                                <Chip sx={{ margin: "0px 0px 5px 8px" }} label="Japanese" variant='outlined' size='medium' color="success" />

                                            </Stack>
                                        </Grid>
                                    </Box>
                                </GigaCardBody>
                            </GigaCard>
                        </Grid>
                        <Grid item md={6} xs ={12}>
                            <GigaCard>
                                <GigaCardHeader color={"black"} headerIcon={<AssignmentIndIcon sx={{ fontSize: "inherit" }} />}>
                                    Interviewer
                                </GigaCardHeader>
                                <GigaCardBody>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <AccountBoxIcon />
                                                <Typography variant="h6">
                                                    Name
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                Cong Pham Quoc Viet
                                                {/* {interviewidinfo[0].interviewername} */}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <EmailIcon />
                                                <Typography variant="h6">
                                                    Email
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                                                vietcpq@fpt.com
                                                {/* {interviewidinfo[0].intervieweremail} */}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <PhoneIphoneIcon />
                                                <Typography variant="h6">
                                                    Phone
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                {/* {interviewidinfo[0].interviewerphone} */}
                                                123456789
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <LocationCityIcon />
                                                <Typography variant="h6">
                                                    Department
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Typography variant="h6" sx={{ marginLeft: "8px" }} >
                                                {/* {interviewidinfo[0].departmentName} */}
                                                {/* ITROOM */}
                                                {department[0].departmentName}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Box sx={gridSx}>
                                                <AssistantIcon />
                                                <Typography variant="h6">
                                                    Status
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                            <Typography variant="h6">
                                                :
                                            </Typography>
                                        </Grid>
                                        <Grid item md={right} sx={gridSx}>
                                            <Chip variant='outlined' color="info" sx={{ display: "flex", margin: "0px 0px 5px 8px" }} label="Pending" />
                                        </Grid>
                                    </Box> */}

                                </GigaCardBody>
                            </GigaCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <GigaCard>
                        <GigaCardBody>
                            <CV cvid={cvid} />
                        </GigaCardBody>
                    </GigaCard>
                </Grid>
            </Grid >

        </>
    )
}

export default Page_Interview_Id
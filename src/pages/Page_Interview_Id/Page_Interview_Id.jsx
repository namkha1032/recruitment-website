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
import CakeIcon from '@mui/icons-material/Cake';
// import Page_Profile_Id_Cv_Id from "../Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv"
import CV from "../../components/CV/CV"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import cleanStore from "../../utils/cleanStore";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { convertDate } from "../../utils/convertDate";
import dayjs from 'dayjs';
import CircularProgress from '@mui/material/CircularProgress';
import MissingPage from "../../components/MissingPage/MissingPage";
const Page_Interview_Id = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    let { interviewid } = useParams();
    const requires = require('../../data/View_recruitment/requires.json');
    const languages = require('../../data/View_recruitment/languages.json');
    const interviewidinfo = useSelector(state => state.interviewidInfo);
    const dispatch = useDispatch();
    const interviewerror = useSelector(state => state.interviewError)
    const [page, setPage] = useState(true);
    useEffect(() => {

        dispatch({
            type: 'interviewSaga/getInterviewInfo', payload: {
                interviewid: interviewid,
                token: "haha"
            }
        })

        return () => {
            cleanStore(dispatch);
        }
    }, [])
    useEffect(() => {
        if (interviewerror.status === 'error') {
            if (interviewerror.message === 400 || interviewerror.message === 404) {

                setPage(false);
                dispatch({ type: 'interviewError/onReset' })
            }
        }
    }, [interviewerror])
    const shift = useSelector(state => state.interviewshift);
    console.log("interviewid", interviewidinfo);
    let left = 5
    let right = 6
    let gap = 2
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    //const room = useSelector(state => state.interviewroom);
    //const interviewer = useSelector(state => state.interviewinterviewer);
    //const department = useSelector(state => state.interviewdepartment);
    const position = useSelector(state => state.interviewposition)
    const skill_list = useSelector(state => state.interviewskill);
    console.log("skillinmain", skill_list);
    console.log("interid", interviewidinfo) 
    console.log("positionmain", position);
    // const requirements = interviewidinfo ? interviewidinfo[0].requirement : [];
    const birthdate = interviewidinfo ? dayjs(convertDate(interviewidinfo.interviewer.user.dateOfBirth)).format('DD/MM/YYYY') : [];
    const date = interviewidinfo ? dayjs(convertDate(interviewidinfo.itrsinterview.dateInterview)).format('DD/MM/YYYY') : [];
    // console.log("interview", interviewid);

    return (

        page === true ?
            <>
                {interviewidinfo && skill_list ?
                    (
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
                                                        <Grid xs={4} item md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <ScheduleIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Date Time
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6" >
                                                                        Date
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "6px" }}>
                                                                {/* 14:00 25/07/2023 */}
                                                                {/* {`${interviewidinfo[0].date}${' '}${interviewidinfo[0].time}`} */}
                                                                {`${date}${' '}${interviewidinfo.itrsinterview.shift.shiftTimeStart}${'h'}${' - '}${interviewidinfo.itrsinterview.shift.shiftTimeEnd}${'h'}`}
                                                                {/* {`${date}`} */}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <RoomIcon />
                                                                <Typography variant="h6">
                                                                    Room
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "6px" }}>
                                                                {/* {interviewidinfo[0].room} */}
                                                                {/* 202B4 */}
                                                                {interviewidinfo.itrsinterview.room.roomName}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                    <Divider sx={{ marginY: 3 }} />
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <RadarIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Position
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6" >
                                                                        Pos
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "6px" }} >
                                                                {/* Front-end Development  */}
                                                                {interviewidinfo.application.position.positionName}
                                                                {/* {interviewidinfo[0].positionName} */}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <RecommendIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Requirement
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6" >
                                                                        Req
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                                                {skill_list.map((skill) => (

                                                                    <Chip key={skill.skillId} sx={{ margin: "0px 0px 5px 6px" }} value={skill.skillName} label={skill.skillName} variant='outlined' size='medium' color="warning" />

                                                                ))}
                                                                {/* {requires.map((require) => (

                                                    <Chip key={require.id} sx={{ margin: "0px 0px 5px 8px" }} value={require.name} label={require.name} variant='outlined' size='medium' color="warning" />

                                                ))} */}
                                                            </Stack>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <LanguageIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Language
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6"  >
                                                                        Lang
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>

                                                                <Chip sx={{ margin: "0px 0px 5px 8px" }} label={position.language.languageName} variant='outlined' size='medium' color="success" />

                                                            </Stack>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <AssistantIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Status
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6"  >
                                                                        Sta
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                                                                {interviewidinfo.candidate_Status === "Not start" &&
                                                                    <>
                                                                        <Typography variant="h6" sx={{ marginLeft: "6px", color: 'grey' }} >
                                                                            Not start
                                                                        </Typography>
                                                                    </>
                                                                }
                                                                {interviewidinfo.candidate_Status === "Finished" &&
                                                                    <>
                                                                        <Typography variant="h6" sx={{ marginLeft: "6px", color: 'blue' }} >
                                                                            Finished
                                                                        </Typography>
                                                                    </>
                                                                }



                                                            </Stack>
                                                        </Grid>
                                                    </Box>
                                                </GigaCardBody>
                                            </GigaCard>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <GigaCard>
                                                <Box sx={{ paddingX: isMd ? 4 : 2, paddingTop: 4, paddingBottom: isMd ? 0 : 4 }}>
                                                    <Box sx={{ color: "black", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                                                        {/* <Avatar sx={{ backgroundColor: props.color }}> */}
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                borderRadius: "50%",
                                                                border: "1px solid #ccc",
                                                                width: "150px",
                                                                height: "150px",
                                                            }}
                                                            src={interviewidinfo.interviewer.user.imageUrl}
                                                            alt=""
                                                        />
                                                        {/* </Avatar> */}
                                                        <Typography variant={isMd ? "h4" : "h5"} sx={{ fontWeight: "bold" }}>
                                                            Interviewer
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                <GigaCardBody>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <AccountBoxIcon />
                                                                <Typography variant="h6">
                                                                    Name
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "6px" }} >
                                                                {/* Cong Pham Quoc Viet */}
                                                                {/* {interviewidinfo[0].interviewername} */}
                                                                {interviewidinfo.interviewer.user.fullName}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <EmailIcon />
                                                                <Typography variant="h6">
                                                                    Email
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "5px", wordBreak: "break-word" }}>
                                                                {/* vietcpq@fpt.com */}
                                                                {/* {interviewidinfo[0].intervieweremail} */}
                                                                {interviewidinfo.interviewer.user.email}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <CakeIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Date Birth
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6" >
                                                                        Birth
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "6px" }} >
                                                                {/* {interviewidinfo[0].interviewerphone} */}
                                                                {/* 123456789 */}
                                                                {birthdate}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                                        <Grid item xs={4} md={left} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Box sx={gridSx}>
                                                                <LocationCityIcon />
                                                                {isMd ? (
                                                                    <Typography variant="h6" >
                                                                        Department
                                                                    </Typography>
                                                                ) : (
                                                                    <Typography variant="h6" >
                                                                        Office
                                                                    </Typography>
                                                                )}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={1} md={1} sx={{ display: "flex", alignItems: "flex-start", columnGap: gap }}>
                                                            <Typography variant="h6">
                                                                :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={7} md={right} sx={gridSx}>
                                                            <Typography variant="h6" sx={{ marginLeft: "6px" }} >
                                                                {/* {interviewidinfo[0].departmentName} */}
                                                                {/* {interviewidinfo.position.department.departmentName} */}
                                                                {/* {department[0].departmentName} */}
                                                                {interviewidinfo.application.position.department.departmentName}
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

                                    <CV cvid={interviewidinfo.application.cv.cvid} />

                                </Grid>
                            </Grid >
                        </>
                    ) :
                    (

                        <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CircularProgress color="inherit" />
                        </Box>
                    )}
            </>
            :
            <>
                <MissingPage />
            </>


    )
}

export default Page_Interview_Id
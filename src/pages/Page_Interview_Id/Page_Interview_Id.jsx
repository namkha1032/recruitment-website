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
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './Page_Interview_Id.css'
import Divider from "@mui/material/Divider";
import ArticleIcon from '@mui/icons-material/Article';
import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import AssistantIcon from '@mui/icons-material/Assistant';
import CakeIcon from '@mui/icons-material/Cake';
import CV from "../../components/CV/CV"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import cleanStore from "../../utils/cleanStore";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { convertDate } from "../../utils/convertDate";
import dayjs from 'dayjs';
import CircularProgress from '@mui/material/CircularProgress';
import MissingPage from "../../components/MissingPage/MissingPage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Unauthorized from "../../components/Unauthorized/Unauthorized";
import useGetRole from '../../hooks/useGetRole';
const Page_Interview_Id = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    let { interviewid } = useParams();
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
            if (interviewerror.message === 400 || interviewerror.message === 404 || interviewerror.message === 'Not found') {

                setPage(false);
                dispatch({ type: 'interviewError/onReset' })
            }
        }
    }, [interviewerror])
    const shift = useSelector(state => state.interviewshift);
    let left = 5
    let right = 6
    let gap = 2
    let gridSx = {
        display: "flex", alignItems: "center", columnGap: gap
    }
    const position = useSelector(state => state.interviewposition)
    const skill_list = useSelector(state => state.interviewskill);
    const birthdate = interviewidinfo ? dayjs(convertDate(interviewidinfo.interviewer.user.dateOfBirth)).format('DD/MM/YYYY') : [];
    const date = interviewidinfo ? dayjs(convertDate(interviewidinfo.itrsinterview.dateInterview)).format('DD/MM/YYYY') : [];
    const canid = interviewidinfo ? interviewidinfo.application.cv.candidate.userId : '';
    const idviewer = interviewidinfo ? interviewidinfo.interviewer.userId : '';
    const userid = user ? user.userid : '';
    const checkuserid = canid === userid;
    const checkinterviwerid = idviewer === userid
    let role = useGetRole();
    return (

        page === true ?
        <>
            {interviewidinfo && skill_list  ? (
                <>
                    {checkuserid === true || checkinterviwerid === true || role === "admin" || role === "recruiter" ? (
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
                                                                {`${date}${' '}${interviewidinfo.itrsinterview.shift.shiftTimeStart}${'h'}${' - '}${interviewidinfo.itrsinterview.shift.shiftTimeEnd}${'h'}`}
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
                                                                {interviewidinfo.application.position.positionName}
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
                                                        <Box
                                                            component="img"
                                                            sx={{
                                                                borderRadius: "50%",
                                                                border: "1px solid #ccc",
                                                                width: "150px",
                                                                height: "150px",
                                                            }}
                                                            src={interviewidinfo.interviewer.user.imageURL}
                                                            alt=""
                                                        />
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
                                                                {interviewidinfo.application.position.department.departmentName}
                                                            </Typography>
                                                        </Grid>
                                                    </Box>
                                                </GigaCardBody>
                                            </GigaCard>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={12}>

                                    <CV cvid={interviewidinfo.application.cv.cvid} />

                                </Grid>
                            </Grid >
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover={false}
                                theme="colored"
                            />

                        </>
                    ) : (
                        <>
                            <Unauthorized />
                        </>
                    )}
                </>
            ) : (
                <>
                
                    <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CircularProgress color="inherit" />
                    </Box>
                </>
            )}


        </>
        :
        <>
            <MissingPage />
        </>

    )
}

export default Page_Interview_Id

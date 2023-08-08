// import MUI components
import {
    Box,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Page_Event_Id.scss";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
// import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import DeleteIcon from "@mui/icons-material/Delete";

import GigaCard from "../../components/GigaCard/GigaCard";
import GigaCardHeader from "../../components/GigaCardHeader/GigaCardHeader";
import GigaCardBody from "../../components/GigaCardBody/GigaCardBody";

import { useDispatch, useSelector } from "react-redux";
import cleanStore from "../../utils/cleanStore";
import useGetRole from "../../hooks/useGetRole";
import { useParams } from "react-router-dom";
import { transferDatetimeBack } from "../../utils/transferDatetime";
import AlertDialog from "../../components/AlertDialog/AlertDialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
// import picture from "../../assets/img/event1.png";
// import picture from "../../assets/img/eventcandidate.jpg";
import NoteField from "../../pages/Page_Company_Interview_Id/NoteField/NoteField";
import picture from "../../assets/img/Autumn-Arena-WEB.png";
import MissingPage from "../../components/MissingPage/MissingPage";



const Page_Event_Id = () => {

    const [openAlertRegister, setOpenAlertRegister] = useState(false);
    const [openAlertRemove, setOpenAlertRemove] = useState(false);

    const [page, setPage] = useState(true);

    // const [isRegistered, setIsRegistered] = useState(false)

    const role = useGetRole();
    const user = useSelector((state) => state.user);
    const newError = useSelector((state) => state.error);
    const dispatch = useDispatch();

    const userId = user ? user.userid : "";
    const candidateId = user ? user.candidateId : "";
    const { eventid } = useParams();

    const isRegistered = useSelector((state) => state.eventRegistered);

    const event = useSelector((state) => state.event);
    const note = event ? event.content : "";
    // const contentRef = useRef();

    const row_drafts = useSelector((state) => state.candidateJoinEvent);
    const rows = row_drafts ? row_drafts : [];

    const status = useSelector((state) => state.eventIdStatus);

    // useEffect(() => {
    //     if (role === "candidate") {
    //         dispatch({
    //             type: "eventSaga/getCandidateIdRegisterEvent",
    //             payload: {
    //                 userId: userId,
    //                 token: user.token
    //             }
    //         })
    //     }
    // }, [role])

    // console.log("Debug3: ", candidateId)
    // console.log('event id: ', eventid);

    useEffect(() => {
        dispatch({
            type: "eventSaga/getEvent",
            payload: {
                eventid: eventid,
                token: "abcdef",
            },
        });
        dispatch({
            type: "eventSaga/getAllCandidateOfEvent",
            payload: {
                eventid: eventid,
                token: "abcdef",
            },
        });
        // dispatch({ type: "eventSaga/getAllCandidateOfEvent", payload: eventid })
        return () => {
            cleanStore(dispatch);
        };
    }, []);

    useEffect(() => {
        if (role) {
            dispatch({
                type: "eventSaga/checkCandidateJoinEvent",
                payload: {
                    eventId: eventid,
                    candidateId: candidateId,
                    token: user.token,
                },
            });
        }
    }, [role]);

    // useEffect(() => {
    //     if (note) {
    //         // console.log(note);
    //         contentRef.current.innerHTML = note;
    //     }
    // }, [note]);

    useEffect(() => {
        if (newError.status == "no") {
            setTimeout(() => {
                dispatch({
                    type: "error/setError",
                    payload: { status: "idle", message: "" },
                });
            }, 2200);
        }
    }, [newError]);

    //   useEffect(() => {
    //     if (status.status === "success") {
    //       // setIsRegistered(true)
    //       dispatch({ type: "eventIdStatus/onReset" });
    //     }
    //   }, [status]);

    // handle events

    const error = useSelector(state => state.eventError)
    useEffect(() => {
        if (error.status === 'error') {
            if (error.message === 400 || error.message === 404) {
                setPage(false);
                dispatch({ type: 'eventError/onReset' })
            }
        }
    }, [error])

    const handleRegister = () => {
        dispatch({
            type: "eventSaga/postCandidateJoinEvent",
            payload: {
                candidateId: candidateId,
                eventId: event.eventId,
                token: user.token,
            },
        });
        // alert("Register successfully!")
        // setIsRegistered(true)
        // alert(new Date())
        // setOpenAlert(true)
    };

    const handleRemoveRegister = () => {
        dispatch({
            type: "eventSaga/deleteCandidateJoinEvent",
            payload: {
                candidateId: candidateId,
                eventId: event.eventId,
                token: user.token,
            },
        });
        // setIsRegistered(false)
        // setOpenAlert(true)
    };

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isSm = useMediaQuery(theme.breakpoints.down("md"));
    // console.log("page: ", page)

    return (
        page === true ?
            <>
                {event &&
                    <>
                        {isMd && (
                            <>
                                <Box
                                    sx={{
                                        fontSize: 50,
                                        fontWeight: 600,
                                        // color: '#1565C0',
                                        color: "black",
                                        display: "flex",
                                        justifyContent: "start",
                                        // justifyContent: 'center'
                                        display: "inline-block",
                                        marginBottom: 1,
                                    }}
                                >
                                    {/* Chi tiết sự kiện */}
                                    Event Details
                                </Box>

                                <Divider sx={{ borderColor: "lightgray" }}></Divider>

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ mb: 2 }}>
                                        <img
                                            src={picture}
                                            alt="..."
                                            style={{
                                                width: "100%",
                                                objectFit: "cover",
                                                border: "5px solid #555",
                                                borderRadius: "5px",
                                            }}
                                        />
                                    </Box>
                                    <GigaCard>
                                        {/* <GigaCardHeader headerIcon={<PsychologyAltRoundedIcon fontSize='large'></PsychologyAltRoundedIcon>}>
                          How To Think Critically and Avoid Fallacies
                      </GigaCardHeader>
                  <GigaCardHeader headerIcon={<CelebrationRoundedIcon fontSize='large'></CelebrationRoundedIcon>}>
                      How To Think Critically and Avoid Fallacies
                  </GigaCardHeader> */}
                                        <Box sx={{ paddingLeft: 4, paddingTop: 4 }}>
                                            <Box
                                                sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                                            >
                                                <Box
                                                    sx={{ fontSize: 40, display: "flex", alignItems: "center" }}
                                                >
                                                    <CelebrationRoundedIcon
                                                        fontSize="large"
                                                        sx={{
                                                            color: "#3f51b5",
                                                            // color: '#1565C0'
                                                        }}
                                                    ></CelebrationRoundedIcon>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        fontSize: 40,
                                                        fontWeight: 600,
                                                        color: "#3f51b5",
                                                        // color: '#1565C0',
                                                        display: "flex",
                                                        justifyContent: "start",
                                                        // justifyContent: 'center'
                                                        display: "inline-block",
                                                        // marginBottom: 1
                                                    }}
                                                >
                                                    {event.eventName}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <GigaCardBody>
                                            <Box
                                                sx={{
                                                    fontSize: "18px",
                                                    fontStyle: "italic",
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    marginBottom: 3,
                                                }}
                                            >
                                                {/* <TodayRoundedIcon
                                              sx={{ marginRight: 0.5, color: "darkgray" }}
                                          ></TodayRoundedIcon> */}
                                                <EditCalendarRoundedIcon
                                                    sx={{ marginRight: 0.5, color: "darkgray" }}
                                                ></EditCalendarRoundedIcon>
                                                <span style={{ color: "darkgray", fontSize: "18px" }}>
                                                    {event.createdTime}
                                                </span>
                                            </Box>

                                            {/* <div> cannot appear as a descendant of <p> */}
                                            {/* ---------------------------------------------------------------------- */}
                                            {/* <p align='justify'>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae sapiente deserunt sequi rerum animi eaque illo excepturi. Iusto saepe cumque ipsa cupiditate ab accusantium dolor soluta veritatis ex hic?<br />
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae modi rerum enim voluptatibus voluptatem! Alias eum velit, animi harum at vitae! Atque, eum. Eos iste soluta vitae quidem itaque saepe?<br />
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rerum libero cupiditate voluptatem, doloremque quaerat culpa soluta! Soluta assumenda at sint et fugit quo natus id beatae! Et, saepe? Ratione!<br />
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum mollitia asperiores quis quos, ut fugiat harum. Voluptates vero animi alias sapiente odit cumque esse culpa, repudiandae error inventore, autem commodi!<br />
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum esse quisquam distinctio animi iure possimus omnis tempore dicta consectetur perspiciatis atque in, cupiditate nostrum numquam accusamus blanditiis velit libero!<br />
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laborum, ullam necessitatibus harum distinctio similique itaque corrupti qui possimus incidunt quisquam, optio hic molestias et accusantium rem ipsum. Commodi, consequatur.<br />
                          </p> */}
                                            {/* <Box sx={{ fontSize: '18px' }} ref={contentRef}></Box> */}
                                            <Box sx={{ fontSize: '18px' }}><NoteField note={note}></NoteField></Box>
                                            {/* ---------------------------------------------------------------------- */}

                                            <Grid container sx={{ marginTop: 8 }}>
                                                <Grid item md={3} sm={4} xs={6}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            // alignItems: 'center',
                                                            // marginTop: 6
                                                        }}
                                                    >
                                                        <PeopleAltRoundedIcon
                                                            fontSize="large"
                                                            sx={{
                                                                marginRight: 2,
                                                                color: "#3f51b5",
                                                                // color: '#1565C0'
                                                            }}
                                                        ></PeopleAltRoundedIcon>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontSize: 25,
                                                                    fontWeight: 600,
                                                                    color: "#3f51b5",
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                                {/* Số lượng */}
                                                                Quantity
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 20,
                                                                    fontWeight: 600,
                                                                    // color: "#FF9933"
                                                                    // color: "#00838f"
                                                                }}
                                                            >
                                                                {/* {event.quantity} / {event.maxQuantity} */}
                                                                {rows.length} / {event.maxQuantity}
                                                            </Box>
                                                        </Box>
                                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>500/1000</p> */}
                                                    </Box>
                                                </Grid>

                                                <Grid item md={4} sm={4} xs={6}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            // alignItems: 'center',
                                                            // marginTop: 3
                                                            // justifyContent: 'center'
                                                        }}
                                                    >
                                                        <AccessTimeRoundedIcon
                                                            fontSize="large"
                                                            sx={{
                                                                marginRight: 2,
                                                                color: "#3f51b5",
                                                                // color: '#1565C0'
                                                            }}
                                                        ></AccessTimeRoundedIcon>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontSize: 25,
                                                                    fontWeight: 600,
                                                                    color: "#3f51b5",
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                                {/* Thời gian */}
                                                                Time
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 20,
                                                                    fontWeight: 600,
                                                                    // color: "#FF9933"
                                                                    // color: "#00838f"
                                                                }}
                                                            >
                                                                {transferDatetimeBack(event.time)}
                                                            </Box>
                                                        </Box>
                                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>21/07/2023</p> */}
                                                    </Box>
                                                </Grid>

                                                <Grid item md={5} sm={4} xs={12}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            // alignItems: 'center',
                                                            // marginTop: 3
                                                            // justifyContent: 'flex-end'
                                                        }}
                                                    >
                                                        <LocationOnRoundedIcon
                                                            fontSize="large"
                                                            sx={{
                                                                marginRight: 2,
                                                                color: "#3f51b5",
                                                                // color: '#1565C0'
                                                            }}
                                                        ></LocationOnRoundedIcon>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontSize: 25,
                                                                    fontWeight: 600,
                                                                    color: "#3f51b5",
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                                {/* Địa điểm */}
                                                                Location
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 20,
                                                                    fontWeight: 600,
                                                                    // color: "#FF9933"
                                                                    // color: "#00838f"
                                                                }}
                                                            >
                                                                {event.location}
                                                            </Box>
                                                        </Box>
                                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>268 Lý Thường Kiệt, phường 14, quận 10</p> */}
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            {role === "candidate" ? (
                                                <Grid item xs={12} align="right" sx={{ marginTop: 8 }}>
                                                    {isRegistered ? (
                                                        <Button
                                                            variant="contained"
                                                            size="large"
                                                            // className='btnregister'
                                                            // sx={{ mx: 3 }}
                                                            sx={{
                                                                //   backgroundColor: "black",
                                                                backgroundColor: "red",
                                                                "&:hover": {
                                                                    backgroundColor: "grey",
                                                                },
                                                            }}
                                                            onClick={() => {
                                                                setOpenAlertRemove(true);
                                                            }}
                                                        >
                                                            {/* <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon> */}
                                                            {/* Đăng ký */}
                                                            <DeleteIcon sx={{ marginRight: 1 }}></DeleteIcon>
                                                            Remove Registration
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="contained"
                                                            size="large"
                                                            className="btnregister"
                                                            // sx={{ mx: 3 }}
                                                            sx={{
                                                                backgroundColor: "black",
                                                                "&:hover": {
                                                                    backgroundColor: "grey",
                                                                },
                                                            }}
                                                            onClick={() => {
                                                                setOpenAlertRegister(true);
                                                            }}
                                                        >
                                                            {/* <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon> */}
                                                            {/* Đăng ký */}
                                                            <ArrowForwardIcon
                                                                sx={{ marginRight: 1 }}
                                                            ></ArrowForwardIcon>
                                                            Register Now
                                                        </Button>
                                                    )}
                                                </Grid>
                                            ) : null}
                                        </GigaCardBody>
                                    </GigaCard>
                                </Box>
                                <AlertDialog
                                    openAlert={openAlertRegister}
                                    setOpenAlert={setOpenAlertRegister}
                                    alertMessage={"Are you sure you want to register this event?"}
                                    successfulMessage={"Remove register successfully"}
                                    handleSubmit={handleRegister}
                                />
                                <AlertDialog
                                    openAlert={openAlertRemove}
                                    setOpenAlert={setOpenAlertRemove}
                                    alertMessage={"Are you sure you want to remove register?"}
                                    successfulMessage={"Remove register successfully"}
                                    handleSubmit={handleRemoveRegister}
                                />
                            </>
                        )}

                        {isSm && (
                            <>
                                <Box
                                    sx={{
                                        fontSize: 30,
                                        fontWeight: 600,
                                        // color: '#1565C0',
                                        color: "black",
                                        display: "flex",
                                        justifyContent: "start",
                                        // justifyContent: 'center'
                                        display: "inline-block",
                                        // marginBottom: 1,
                                    }}
                                >
                                    {/* Chi tiết sự kiện */}
                                    Event Details
                                </Box>

                                <Divider sx={{ borderColor: "lightgray" }}></Divider>

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ mb: 2 }}>
                                        <img
                                            src={picture}
                                            alt="..."
                                            style={{
                                                width: "100%",
                                                objectFit: "cover",
                                                border: "5px solid #555",
                                                borderRadius: "5px",
                                            }}
                                        />
                                    </Box>
                                    <GigaCard>
                                        {/* <GigaCardHeader headerIcon={<PsychologyAltRoundedIcon fontSize='large'></PsychologyAltRoundedIcon>}>
                          How To Think Critically and Avoid Fallacies
                      </GigaCardHeader>
                  <GigaCardHeader headerIcon={<CelebrationRoundedIcon fontSize='large'></CelebrationRoundedIcon>}>
                      How To Think Critically and Avoid Fallacies
                  </GigaCardHeader> */}
                                        <Box sx={{
                                            paddingLeft: 1,
                                            paddingTop: 1
                                            // paddingLeft: 4,
                                            // paddingTop: 4
                                        }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    columnGap: 1
                                                    // columnGap: 2
                                                }}>
                                                <Box
                                                    sx={{
                                                        fontSize: 20,
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }}>
                                                    <CelebrationRoundedIcon
                                                        fontSize='medium'
                                                        // fontSize='large'
                                                        sx={{
                                                            color: "#3f51b5",
                                                            // color: '#1565C0'
                                                        }}
                                                    ></CelebrationRoundedIcon>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: "#3f51b5",
                                                        // color: '#1565C0',
                                                        display: "flex",
                                                        justifyContent: "start",
                                                        // justifyContent: 'center'
                                                        display: "inline-block",
                                                        // marginBottom: 1
                                                    }}
                                                >
                                                    {event.eventName}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <GigaCardBody>
                                            <Box
                                                sx={{
                                                    fontSize: "18px",
                                                    fontStyle: "italic",
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    marginBottom: 1
                                                    // marginBottom: 3
                                                }}
                                            >
                                                {/* <TodayRoundedIcon sx={{
                                              marginRight: 0.5,
                                              color: "darkgray"
                                          }}
                                              fontSize='small'>
                                          </TodayRoundedIcon> */}
                                                <EditCalendarRoundedIcon sx={{
                                                    marginRight: 0.5,
                                                    color: "darkgray"
                                                }}
                                                    fontSize='small'
                                                >
                                                </EditCalendarRoundedIcon>
                                                <span style={{ color: "darkgray", fontSize: "13px" }}>{event.createdTime}</span>
                                            </Box>

                                            {/* <div> cannot appear as a descendant of <p> */}
                                            {/* ---------------------------------------------------------------------- */}
                                            {/* <p align='justify'>
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae sapiente deserunt sequi rerum animi eaque illo excepturi. Iusto saepe cumque ipsa cupiditate ab accusantium dolor soluta veritatis ex hic?<br />
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae modi rerum enim voluptatibus voluptatem! Alias eum velit, animi harum at vitae! Atque, eum. Eos iste soluta vitae quidem itaque saepe?<br />
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rerum libero cupiditate voluptatem, doloremque quaerat culpa soluta! Soluta assumenda at sint et fugit quo natus id beatae! Et, saepe? Ratione!<br />
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum mollitia asperiores quis quos, ut fugiat harum. Voluptates vero animi alias sapiente odit cumque esse culpa, repudiandae error inventore, autem commodi!<br />
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum esse quisquam distinctio animi iure possimus omnis tempore dicta consectetur perspiciatis atque in, cupiditate nostrum numquam accusamus blanditiis velit libero!<br />
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laborum, ullam necessitatibus harum distinctio similique itaque corrupti qui possimus incidunt quisquam, optio hic molestias et accusantium rem ipsum. Commodi, consequatur.<br />
                          </p> */}
                                            {/* <Box sx={{ fontSize: '15px' }} ref={contentRef}></Box> */}
                                            <Box sx={{ fontSize: '15px' }}><NoteField note={note}></NoteField></Box>
                                            {/* ---------------------------------------------------------------------- */}

                                            <Grid container sx={{
                                                marginTop: 5
                                                // marginTop: 8
                                            }}>
                                                <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            // alignItems: 'center',
                                                            // marginTop: 6
                                                        }}
                                                    >
                                                        <PeopleAltRoundedIcon
                                                            fontSize='medium'
                                                            // fontSize='large'
                                                            sx={{
                                                                marginRight: 1,
                                                                // marginRight: 2,
                                                                color: "#3f51b5",
                                                                // color: '#1565C0'
                                                            }}
                                                        ></PeopleAltRoundedIcon>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontSize: 18,
                                                                    fontWeight: 600,
                                                                    color: "#3f51b5",
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                                {/* Số lượng */}
                                                                Quantity
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 15,
                                                                    fontWeight: 600,
                                                                    // color: "#00838f"
                                                                }}
                                                            >
                                                                {/* {event.quantity} / {event.maxQuantity} */}
                                                                {rows.length} / {event.maxQuantity}
                                                            </Box>
                                                        </Box>
                                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>500/1000</p> */}
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            // alignItems: 'center',
                                                            // marginTop: 3
                                                            // justifyContent: 'center'
                                                        }}
                                                    >
                                                        <AccessTimeRoundedIcon
                                                            fontSize='medium'
                                                            // fontSize='large'
                                                            sx={{
                                                                marginRight: 1,
                                                                // marginRight: 2,
                                                                color: "#3f51b5",
                                                                // color: '#1565C0'
                                                            }}
                                                        ></AccessTimeRoundedIcon>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontSize: 18,
                                                                    fontWeight: 600,
                                                                    color: "#3f51b5",
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                                {/* Thời gian */}
                                                                Time
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 15,
                                                                    fontWeight: 600,
                                                                    // color: "#00838f"
                                                                }}
                                                            >
                                                                {transferDatetimeBack(event.time)}
                                                            </Box>
                                                        </Box>
                                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>21/07/2023</p> */}
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            // alignItems: 'center',
                                                            // marginTop: 3
                                                            // justifyContent: 'flex-end'
                                                        }}
                                                    >
                                                        <LocationOnRoundedIcon
                                                            fontSize='medium'
                                                            // fontSize='large'
                                                            sx={{
                                                                marginRight: 1,
                                                                // marginRight: 2,
                                                                color: "#3f51b5",
                                                                // color: '#1565C0'
                                                            }}
                                                        ></LocationOnRoundedIcon>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                justifyContent: "center",
                                                            }}>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 18,
                                                                    fontWeight: 600,
                                                                    color: "#3f51b5",
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                                {/* Địa điểm */}
                                                                Location
                                                            </Box>
                                                            <Box
                                                                sx={{
                                                                    fontSize: 15,
                                                                    fontWeight: 600,
                                                                    // color: "#00838f"
                                                                }}
                                                            >
                                                                {event.location}
                                                            </Box>
                                                        </Box>
                                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>268 Lý Thường Kiệt, phường 14, quận 10</p> */}
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            {role === "candidate" ? (
                                                <Grid item xs={12} align="center" sx={{
                                                    marginTop: 5
                                                    // marginTop: 8 
                                                }}>
                                                    {isRegistered ? (
                                                        <Button
                                                            variant="contained"
                                                            size="large"
                                                            // className='btnregister'
                                                            // sx={{ mx: 3 }}
                                                            sx={{
                                                                //   backgroundColor: "black",
                                                                backgroundColor: "red",
                                                                "&:hover": {
                                                                    backgroundColor: "grey",
                                                                },
                                                            }}
                                                            onClick={() => {
                                                                setOpenAlertRemove(true);
                                                            }}
                                                        >
                                                            {/* <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon> */}
                                                            {/* Đăng ký */}
                                                            <DeleteIcon sx={{ marginRight: 1 }}></DeleteIcon>
                                                            Remove Registration
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="contained"
                                                            size="large"
                                                            className="btnregister"
                                                            // sx={{ mx: 3 }}
                                                            sx={{
                                                                backgroundColor: "black",
                                                                "&:hover": {
                                                                    backgroundColor: "grey",
                                                                },
                                                            }}
                                                            onClick={() => {
                                                                setOpenAlertRegister(true);
                                                            }}
                                                        >
                                                            {/* <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon> */}
                                                            {/* Đăng ký */}
                                                            <ArrowForwardIcon
                                                                sx={{ marginRight: 1 }}
                                                            ></ArrowForwardIcon>
                                                            Register Now
                                                        </Button>
                                                    )}
                                                </Grid>
                                            ) : null}
                                        </GigaCardBody>
                                    </GigaCard>
                                </Box>
                                <AlertDialog
                                    openAlert={openAlertRegister}
                                    setOpenAlert={setOpenAlertRegister}
                                    alertMessage={"Are you sure you want to register this event?"}
                                    successfulMessage={"Remove register successfully"}
                                    handleSubmit={handleRegister}
                                />
                                <AlertDialog
                                    openAlert={openAlertRemove}
                                    setOpenAlert={setOpenAlertRemove}
                                    alertMessage={"Are you sure you want to remove register?"}
                                    successfulMessage={"Remove register successfully"}
                                    handleSubmit={handleRemoveRegister}
                                />
                            </>
                        )}
                    </>
                }
            </> :
            <MissingPage></MissingPage>
    )
};

export default Page_Event_Id;

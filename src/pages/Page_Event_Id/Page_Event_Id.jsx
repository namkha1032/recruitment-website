// import MUI components
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import './Page_Event_Id.scss'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
// import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';

import picture from '../../assets/img/event.png'
import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';

import { useDispatch, useSelector } from 'react-redux';
import cleanStore from '../../utils/cleanStore';
import useGetRole from '../../hooks/useGetRole';
import { useParams } from 'react-router-dom';
import { transferDatetimeBack } from '../../utils/transferDatetime';


const Page_Event_Id = () => {

    const role = useGetRole()

    const { eventid } = useParams();
    console.log('event id: ', eventid);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "saga/getEvent", payload: eventid })
        return () => {
            cleanStore(dispatch)
        }
    }, [])

    const event = useSelector((state) => state.event)

    const note = event ? event.content : ""
    const contentRef = useRef()
    useEffect(() => {
        if (note) {
            console.log(note)
            contentRef.current.innerHTML = note
        }
    }, [note])
    console.log("contentRef: ", contentRef);


    // handle events
    const handleRegister = (e) => {
        alert("Register successfully!");
        // alert(new Date())
    }



    return (
        <> {event && (
            <Container sx={{ p: 0 }} className='eventid'>
                <Box sx={{
                    fontSize: 50,
                    fontWeight: 600,
                    // color: '#1565C0',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'start',
                    // justifyContent: 'center'
                    display: 'inline-block',
                    marginBottom: 1
                }}>
                    {/* Chi tiết sự kiện */}
                    Event Details
                </Box>

                <Divider sx={{ borderColor: 'lightgray' }}></Divider>

                <Box sx={{ mt: 2 }}>
                    <Box sx={{ mb: 2 }}>
                        <img src={picture}
                            alt="..."
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                border: '5px solid #555',
                                borderRadius: '5px'
                            }} />
                    </Box>
                    <GigaCard>
                        {/* <GigaCardHeader headerIcon={<PsychologyAltRoundedIcon fontSize='large'></PsychologyAltRoundedIcon>}>
                            How To Think Critically and Avoid Fallacies
                        </GigaCardHeader>
                    <GigaCardHeader headerIcon={<CelebrationRoundedIcon fontSize='large'></CelebrationRoundedIcon>}>
                        How To Think Critically and Avoid Fallacies
                    </GigaCardHeader> */}
                        <Box sx={{ paddingLeft: 4, paddingTop: 4 }}>
                            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                                <Box sx={{ fontSize: 40, display: "flex", alignItems: "center" }}>
                                    <CelebrationRoundedIcon fontSize='large' sx={{ color: '#1565C0' }}></CelebrationRoundedIcon>
                                </Box>
                                <Box sx={{
                                    fontSize: 40,
                                    fontWeight: 600,
                                    color: '#1565C0',
                                    display: 'flex',
                                    justifyContent: 'start',
                                    // justifyContent: 'center'
                                    display: 'inline-block',
                                    // marginBottom: 1
                                }}>
                                    {event.eventName}
                                </Box>
                            </Box>
                        </Box>
                        <GigaCardBody>
                            <Box sx={{ fontSize: '18px', fontStyle: 'italic', display: 'flex', justifyContent: 'flex-end', marginBottom: 3 }}>
                                <TodayRoundedIcon sx={{ marginRight: 0.5, color: 'darkgray' }}></TodayRoundedIcon>
                                <span style={{ color: 'darkgray', fontSize: '17px' }}>{event.createdTime}</span>
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
                            <Box ref={contentRef}></Box>
                            {/* ---------------------------------------------------------------------- */}

                            <Grid container sx={{ marginTop: 8 }}>
                                <Grid item md={3} sm={4} xs={6}>
                                    <Box sx={{
                                        display: "flex",
                                        // alignItems: 'center',
                                        // marginTop: 6
                                    }}>
                                        <PeopleAltRoundedIcon fontSize='large' sx={{ marginRight: 2, color: '#1565C0' }}></PeopleAltRoundedIcon>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                                color: '#1565C0'
                                            }}>
                                                {/* Số lượng */}
                                                Quantity
                                            </Box>
                                            <Box sx={{
                                                fontSize: 16,
                                            }}>
                                                {event.quantity} / {event.maxQuantity}
                                            </Box>
                                        </Box>
                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>500/1000</p> */}
                                    </Box>
                                </Grid>

                                <Grid item md={3} sm={4} xs={6}>
                                    <Box sx={{
                                        display: "flex",
                                        // alignItems: 'center',
                                        // marginTop: 3
                                        // justifyContent: 'center'
                                    }}>
                                        <AccessTimeRoundedIcon fontSize='large' sx={{ marginRight: 2, color: '#1565C0' }}></AccessTimeRoundedIcon>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                                color: '#1565C0'
                                            }}>
                                                {/* Thời gian */}
                                                Time
                                            </Box>
                                            <Box sx={{
                                                fontSize: 16,
                                            }}>
                                                {transferDatetimeBack(event.time)}
                                            </Box>
                                        </Box>
                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>21/07/2023</p> */}
                                    </Box>
                                </Grid>

                                <Grid item md={6} sm={4} xs={12}>
                                    <Box sx={{
                                        display: "flex",
                                        // alignItems: 'center',
                                        // marginTop: 3
                                        // justifyContent: 'flex-end'
                                    }}>
                                        <LocationOnRoundedIcon fontSize='large' sx={{ marginRight: 2, color: '#1565C0' }}></LocationOnRoundedIcon>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                                color: '#1565C0'
                                            }}>
                                                {/* Địa điểm */}
                                                Location
                                            </Box>
                                            <Box sx={{
                                                fontSize: 16,
                                            }}>
                                                {event.location}
                                            </Box>
                                        </Box>
                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>268 Lý Thường Kiệt, phường 14, quận 10</p> */}
                                    </Box>
                                </Grid>
                            </Grid>
                            {role ?
                                <Grid item xs={12} align='right' sx={{ marginTop: 8 }}>
                                    <Button
                                        variant='contained'
                                        size='large'
                                        className='btnregister'
                                        // sx={{ mx: 3 }}
                                        onClick={handleRegister}
                                        sx={{ backgroundColor: 'black' }}
                                    >
                                        {/* <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon> */}
                                        {/* Đăng ký */}
                                        <ArrowForwardIcon sx={{ marginRight: 1 }}></ArrowForwardIcon>
                                        Register Now
                                    </Button>
                                </Grid>
                                : null}
                        </GigaCardBody>
                    </GigaCard>
                </Box>
            </Container >
        )}
        </>
    )
}

export default Page_Event_Id
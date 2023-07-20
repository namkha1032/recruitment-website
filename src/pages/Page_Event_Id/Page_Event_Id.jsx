// import MUI components
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import './Page_Event_Id.scss'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

import picture from '../../assets/img/event.jpg'


const Page_Event_Id = () => {


    // handle events
    const handleRegister = (e) => {
        alert("Register successfully!");
        // alert(new Date())
    }


    return (
        <Container sx={{ p: 0 }} className='eventid'>
            <Box sx={{
                fontSize: 38,
                fontWeight: 600,
                color: '#1565C0',
                display: 'flex',
                justifyContent: 'start',
                // justifyContent: 'center'
                // paddingLeft: 1 
            }}>
                Sự kiện 1
            </Box>
            <Divider sx={{ borderColor: 'lightgray' }}></Divider>

            <Grid container sx={{ mt: 0.8 }}>
                <Grid item md={6} sm={12} sx={{ paddingY: 1, paddingRight: 1 }}>
                    <img src={picture}
                        alt="..."
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            border: '5px solid #555'
                        }} />
                </Grid>

                <Grid item md={6} sm={12} sx={{ paddingY: 1, paddingLeft: 1 }}>
                    <Paper elevation={20} sx={{ borderRadius: '10px' }}>
                        <Grid container spacing={2.5}
                            sx={{
                                p: 0.8,
                                display: "flex",
                                alignItems: "center",
                                width: '100%'
                            }}
                            style={{
                                // border: '0px solid black', 
                                // background: 'lightgray',  
                                // filter: 'drop-shadow(0 0 10px black)',
                                margin: 0.5,
                                backgroundColor: '#EEF2F5',
                                borderRadius: '10px',
                                // border: '2px solid black'
                            }}>

                            <Grid item xs={12} align='right'>
                                <Box sx={{ borderRadius: 100, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Typography variant='span' className='header'>500/1000</Typography>
                                    <PeopleAltRoundedIcon color='primary' sx={{ marginLeft: 1 }}></PeopleAltRoundedIcon>
                                </Box>
                            </Grid>
                            <Grid item md={4} sm={5} xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <CelebrationRoundedIcon color='primary' sx={{ marginRight: 1 }}></CelebrationRoundedIcon>
                                <Typography variant='span' className='header'>Tên sự kiện</Typography>
                            </Grid>
                            <Grid item md={8} sm={7} xs={6}>
                                <Box className='content' p={3}>Code War</Box>
                            </Grid>
                            <Grid item md={4} sm={5} xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <DescriptionRoundedIcon color='primary' sx={{ marginRight: 1 }}></DescriptionRoundedIcon>
                                <Typography variant='span' className='header'>Nội dung</Typography>
                            </Grid>
                            <Grid item md={8} sm={7} xs={6}>
                                <Box className='content' p={3} height={140}>Code War là một sự kiện thú vị đến từ FPT Software</Box>
                            </Grid>
                            {/* <Grid item md={3} sm={4} xs={5}>
                                        <Typography variant='span' className='header'>Đã đăng ký</Typography>
                                    </Grid>
                                    <Grid item md={9} sm={8} xs={7}>
                                        <Box className='content' p={3}>500/1000</Box>
                                    </Grid> */}
                            <Grid item md={4} sm={5} xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <AccessTimeRoundedIcon color='primary' sx={{ marginRight: 1 }}></AccessTimeRoundedIcon>
                                <Typography variant='span' className='header'>Thời gian</Typography>
                            </Grid>
                            <Grid item md={8} sm={7} xs={6}>
                                <Box className='content' p={3}>Date time</Box>
                            </Grid>
                            <Grid item md={4} sm={5} xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <LocationOnRoundedIcon color='primary' sx={{ marginRight: 1 }}></LocationOnRoundedIcon>
                                <Typography variant='span' className='header'>Địa điểm</Typography>
                            </Grid>
                            <Grid item md={8} sm={7} xs={6}>
                                <Box className='content' p={3}>Location</Box>
                            </Grid>

                            <Grid item xs={12} align='right'>
                                <Button variant="contained" size='small' className='btnregister' onClick={handleRegister}>
                                    <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon>
                                    Đăng ký
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Page_Event_Id
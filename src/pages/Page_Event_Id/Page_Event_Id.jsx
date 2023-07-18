// import MUI components
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './Page_Event_Id.scss'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import picture from '../../assets/img/event.jpg'


const Page_Event_Id = () => {


    // handle events
    const handleRegister = (e) => {
        alert("Register successfully!");
    }


    return (
        <Container sx={{ p: 0 }} className='eventid'>
            <Box sx={{ 
                fontSize: 38, 
                fontWeight: 600, 
                color: '#1565C0', 
                display: 'flex', 
                justifyContent: 'center' 
            }}>
                Sự kiện 1
            </Box>

            <Grid container sx={{mt: 0.8}}>
                <Grid item md={6} sm={12} sx={{ p: 1 }}>
                        <img src={picture} 
                        alt="..." 
                        style={{ 
                            width: '100%', 
                            height: '100%',
                            objectFit: 'cover', 
                            border: '5px solid #555' 
                        }}/>
                </Grid>

                <Grid item md={6} sm={12} sx={{ p: 1 }}>
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
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            border: '2px solid black'
                        }}>

                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Tên sự kiện:</Typography>
                        </Grid>

                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Code War</Box>
                        </Grid>

                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Nội dung:</Typography>
                        </Grid>

                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Code War là một sự kiện thú vị đến từ FPT Software</Box>
                        </Grid>

                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Số lượng đã tham gia:</Typography>
                        </Grid>

                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>500/1000</Box>
                        </Grid>

                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Thời gian:</Typography>
                        </Grid>

                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Date time</Box>
                        </Grid>

                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Địa điểm:</Typography>
                        </Grid>

                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Location</Box>
                        </Grid>

                        <Grid item xs={12} align='right'>
                            <Button variant="contained" size='small' className='btnregister' onClick={handleRegister}>
                                <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon>
                                Đăng ký
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Page_Event_Id
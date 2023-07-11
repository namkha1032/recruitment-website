import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import './Page_Event_Id.scss'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Page_Event_Id = () => {
    return (
        <Container sx={{ p: 1 }} className='eventid' >
            <Typography variant='h4' align='center' sx={{ fontWeight: 600, color: 'cornflowerblue' }}>Sự kiện 1</Typography>
            <Grid container spacing={2.5} sx={{ p: 1.2, display: "flex", alignItems: "center"}} style={{ border: '2px solid black', background: 'white', margin: 18, width: '100%' }}>
                <Grid item xs={2}>
                    <Typography variant='span' className='header'>Tên sự kiện</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box className='content' p={3}>Music on the soul</Box>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='span' className='header'>Nội dung</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box className='content' p={3}>Music on the soul là một sự kiện thú vị đến từ FA</Box>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='span' className='header'>Số lượng đã tham gia</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box className='content' p={3}>500/1000</Box>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='span' className='header'>Thời gian</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box className='content' p={3}>Date time</Box>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='span' className='header'>Địa điểm</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box className='content' p={3}>Location</Box>
                </Grid>
                <Grid item xs={12} align='right'>
                    <Button variant="contained" size='large' className='btnregister'>
                        <AppRegistrationIcon></AppRegistrationIcon>
                        Đăng ký tham gia
                    </Button>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Page_Event_Id
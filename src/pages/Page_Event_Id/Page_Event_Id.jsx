import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './Page_Event_Id.scss'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const Page_Event_Id = () => {
    return (
        <Container sx={{ p: 1 }} className='eventid'>
            <Typography variant='h4' align='center' sx={{ fontWeight: 600, color: 'slateblue' }}>Sự kiện 1</Typography>
            <Grid container sx={{mt: 1}}>
                <Grid item md={6} sm={12} sx={{ p: 1 }}>
                        <img src="https://file1.hutech.edu.vn/file/news/2-1569353757.jpg" alt="..." style={{ width: '100%', objectFit: 'cover' }} />
                </Grid>
                <Grid item md={6} sm={12} sx={{ p: 1 }}>
                    <Grid container spacing={2.5} sx={{ p: 0.8, display: "flex", alignItems: "center", width: '100%'}} style={{ border: '0px solid black', background: 'lightblue', margin: 0.5, boxShadow: '5px 5px 2px gray' }}>
                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Tên sự kiện</Typography>
                        </Grid>
                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Code War</Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Nội dung</Typography>
                        </Grid>
                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Code War là một sự kiện thú vị đến từ FPT Software</Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Số lượng đã tham gia</Typography>
                        </Grid>
                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>500/1000</Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Thời gian</Typography>
                        </Grid>
                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Date time</Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={7}>
                            <Typography variant='span' className='header'>Địa điểm</Typography>
                        </Grid>
                        <Grid item md={7} sm={6} xs={5}>
                            <Box className='content' p={3}>Location</Box>
                        </Grid>
                        <Grid item xs={12} align='right'>
                            <Button variant="contained" size='small' className='btnregister'>
                                <AppRegistrationIcon sx={{ marginRight: 1 }}></AppRegistrationIcon>
                                Đăng ký tham gia
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Page_Event_Id
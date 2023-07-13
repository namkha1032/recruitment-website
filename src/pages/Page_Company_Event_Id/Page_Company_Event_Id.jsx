//Component Tab
import React from 'react'
import './Page_Company_Event_Id.scss'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';

const Page_Company_Event_Id = () => {
    return (
        <div className='companyeventid' style={{ padding: 10 }}>
            <Typography variant='h4' align='center' sx={{ fontWeight: 600, color: 'cornflowerblue' }}>Sự kiện 1</Typography>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Grid container spacing={2.5} sx={{ p: 1, display: "flex", alignItems: "center" }} style={{ border: '2px solid black', background: 'white', margin: '30px auto', width: '95%', height: '100%' }} >
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Tên sự kiện</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className='content' p={3}>Music on the soul</Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Nội dung</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className='content' p={3}>Music on the soul là một sự kiện thú vị đến từ FA</Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Thời gian</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className='content' p={3}>Date time</Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Địa điểm</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className='content' p={3}>Location</Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" size='small' className='btnregister' sx={{ mx: 2, p: 1 }}>
                                <AppRegistrationIcon sx={{ marginRight: 1 }}></AppRegistrationIcon>
                                Đăng ký tham gia
                            </Button>
                            <Button variant="contained" size='small' color="success" sx={{ p: 1 }}>
                                <EditIcon sx={{ marginRight: 1 }}></EditIcon>
                                Chỉnh sửa
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={6} xs={12}>
                    <Grid container spacing={2.5} sx={{ p: 1, display: "flex", alignItems: "center" }} style={{ border: '2px solid black', background: 'white', margin: '30px auto', width: '95%', height: '100%' }}>
                        <Grid item xs={3}>
                            <Typography variant='span' className='header'>Số lượng đã tham gia</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className='content' p={3}>500/1000</Box>
                        </Grid>
                        <Grid item md={8} sm={7} xs={6}>
                            <Box className='user' p={1}>User 1</Box>
                        </Grid>
                        <Grid item md={4} sm={5} xs={6}>
                            <Button variant="contained" size='small' className='btndetail' sx={{ p:1 }}>
                                <PageviewIcon sx={{ marginRight: 1 }}></PageviewIcon>
                                Chi tiết
                            </Button>
                        </Grid>
                        <Grid item md={8} sm={7} xs={6}>
                            <Box className='user' p={1}>User 2</Box>
                        </Grid>
                        <Grid item md={4} sm={5} xs={6}>
                            <Button variant="contained" size='small' className='btndetail' sx={{ p:1 }}>
                                <PageviewIcon sx={{ marginRight: 1 }}></PageviewIcon>
                                Chi tiết
                            </Button>
                        </Grid>
                        <Grid item md={8} sm={7} xs={6}>
                            <Box className='user' p={1}>User 3</Box>
                        </Grid>
                        <Grid item md={4} sm={5} xs={6}>
                            <Button variant="contained" size='small' className='btndetail' sx={{ p:1 }}>
                                <PageviewIcon sx={{ marginRight: 1 }}></PageviewIcon>
                                Chi tiết
                            </Button>
                        </Grid>
                        <Grid item md={8} sm={7} xs={6}>
                            <Box className='user' p={1}>User 4</Box>
                        </Grid>
                        <Grid item md={4} sm={5} xs={6}>
                            <Button variant="contained" size='small' className='btndetail' sx={{ p:1 }}>
                                <PageviewIcon sx={{ marginRight: 1 }}></PageviewIcon>
                                Chi tiết
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Page_Company_Event_Id
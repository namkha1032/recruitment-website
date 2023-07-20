// import libraries
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// import MUI components
import { Box, Chip, Container, Divider, Grid, Paper, Tab, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Id.scss'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

import picture from '../../assets/img/event.jpg'


const columns = [
    {
        field: 'id',
        renderHeader: () => <span>Mã</span>,
        width: 200
    },
    {
        field: 'name',
        renderHeader: () => <span>Tên</span>,
        width: 350
    },
    {
        field: 'time',
        renderHeader: () => <span>Thời điểm đăng ký</span>,
        width: 350
    },
    {
        field: 'actions',
        type: 'actions',
        renderHeader: () => <span>Chi tiết</span>,
        width: 200,
        headerAlign: 'center',
        align: 'center',
        getActions: (params) => [
            <GridActionsCellItem
                icon={<FindInPageIcon></FindInPageIcon>}
                label="Detail"
                onClick={() => alert("Navigate to user id: " + params.row.id)} />]
    }
];

// Test Data
const rows = [
    { id: 1, name: 'Ronaldo' }, { id: 2, name: 'Messi' }, { id: 3, name: 'Salah' },
    { id: 4, name: 'Bruno' }, { id: 5, name: 'Kevin' }, { id: 6, name: 'Pogba' },
    { id: 7, name: 'Mbappe' }, { id: 8, name: 'Haaland' }, { id: 9, name: 'Reus' },
    { id: 10, name: 'Vinicious' }, { id: 11, name: 'Kaka' }, { id: 12, name: 'Beckham' },
    { id: 13, name: 'Viera' }, { id: 14, name: 'Maldini' }, { id: 15, name: 'Nesta' },
    { id: 16, name: 'Gullit' }, { id: 17, name: 'Carlos' }, { id: 18, name: 'Pirlo' },
    { id: 19, name: 'Van Dijk' }, { id: 20, name: 'Dias' }, { id: 21, name: 'Kroos' },
    { id: 22, name: 'Modric' }, { id: 23, name: 'Xavi' }, { id: 24, name: 'Iniesta' },
    { id: 25, name: 'Ramos' }, { id: 26, name: 'Pepe' }, { id: 27, name: 'Alaba' },
    { id: 28, name: 'Robben' }, { id: 29, name: 'Hazard' }, { id: 30, name: 'Bale' }
];



const Page_Company_Event_Id = () => {

    // useState
    const [value, setValue] = useState('1');


    // handle events
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleRegister = (e) => {
        alert("Register successfully!");
    }

    const handleEdit = (e) => {
        navigate("/company/event/:eventid/update");
    }


    // useNavigate
    const navigate = useNavigate()


    return (
        <Container sx={{ p: 0 }} className='companyeventid'>
            <Box sx={{
                fontSize: 38,
                fontWeight: 600,
                color: '#1565C0',
                display: 'flex',
                justifyContent: 'start',
                // justifyContent: 'center'
                paddingLeft: 1
            }}>
                Sự kiện 1
            </Box>
            <TabContext value={value}>
                <Box sx={{ p: 1 }}>
                    <TabList
                        aria-label='Tabs menu'
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                    // centered
                    >
                        <Tab label='Thông tin' value='1' sx={{ textTransform: 'none', fontSize: 20, marginRight: 3 }} icon={<InfoRoundedIcon />} iconPosition='start' />
                        <Tab label='Danh sách đăng ký' value='2' sx={{ textTransform: 'none', fontSize: 20 }} icon={<FormatListNumberedRoundedIcon />} iconPosition='start' />
                    </TabList>
                    <Divider sx={{ borderColor: 'lightgray' }}></Divider>
                </Box>
                <TabPanel value='1' sx={{ p: 0, mt: 0 }}>
                    <Grid container>
                        <Grid item md={6} sm={12} sx={{ p: 1 }}>
                            <img src={picture}
                                alt="..."
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    border: '5px solid #555'
                                }} />
                        </Grid>

                        <Grid item md={6} sm={12} sx={{ p: 1 }}>
                            <Paper elevation={20} sx={{ borderRadius: '10px' }}>
                                <Grid container spacing={2}
                                    sx={{
                                        p: 0.8,
                                        display: "flex",
                                        alignItems: "center",
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    style={{
                                        // filter: 'drop-shadow(0 0 10px black)', 
                                        margin: 0.5,
                                        // background: 'lightgray', 
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
                                        <Button variant='contained' size='small' className='btnregister' sx={{ mx: 2 }} onClick={handleRegister}>
                                            <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon>
                                            Đăng ký
                                        </Button>
                                        <Button variant='contained' size='small' color='success' onClick={handleEdit}>
                                            <EditIcon sx={{ marginRight: 0.5 }}></EditIcon>
                                            Chỉnh sửa
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>

                <TabPanel value='2' sx={{ p: 0, mt: 2 }}>
                    <div style={{ height: 525, width: '100%' }}>
                        {/* Data Grid */}
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            sx={{
                                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                    outline: "none",
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
                                    backgroundColor: "#1565C0",
                                    color: "white",
                                    fontWeight: 700,
                                },
                            }}
                            localeText={{
                                footerRowSelected: (count) =>
                                    count > 1 ? `${count.toLocaleString()} hàng đã chọn` : `${count.toLocaleString()} hàng đã chọn`,
                                footerTotalRows: 'Tổng:',
                                footerTotalVisibleRows: (visibleCount, totalCount) =>
                                    `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,
                                footerTotalRows: 'Tổng:',
                                labelRowsPerPage: 'Hàng mỗi trang:',
                                labelDisplayedRows: ({ from, to, count }) =>
                                    `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                            }}
                            slotProps={{
                                pagination: {
                                    labelRowsPerPage: "Số lượng hiển thị",
                                    labelDisplayedRows: ({ from, to, count }) =>
                                        `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
                                },
                            }}
                            disableColumnFilter
                            disableColumnSelector
                            pagination
                            pageSizeOptions={[5, 10, 25, 50, 100]}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 25
                                    },
                                },
                            }}>
                        </DataGrid>
                    </div>
                </TabPanel>
            </TabContext>
        </Container >
    )
}

export default Page_Company_Event_Id
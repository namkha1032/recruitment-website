// import libraries
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// import MUI components
import { Box, Chip, Container, Divider, Grid, Paper, Tab, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Id.scss'
import { Button } from '@mui/material'
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import EditIcon from '@mui/icons-material/Edit';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
// import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';

import picture from '../../assets/img/event.png'
import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';


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
            {/* <CelebrationRoundedIcon color='primary' fontSize='large' sx={{ marginRight: 1 }}></CelebrationRoundedIcon> */}
            <Box sx={{
                fontSize: 40,
                fontWeight: 600,
                color: '#1565C0',
                display: 'flex',
                justifyContent: 'start',
                // justifyContent: 'center'
                display: 'inline-block'
            }}>
                Chi tiết sự kiện
            </Box>
            <TabContext value={value}>
                <Box>
                    <TabList
                        aria-label='Tabs menu'
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                    // centered
                    >
                        <Tab label='Thông tin' value='1' sx={{ textTransform: 'none', fontSize: 23, marginRight: 4 }} icon={<InfoRoundedIcon />} iconPosition='start' />
                        <Tab label='Danh sách đăng ký' value='2' sx={{ textTransform: 'none', fontSize: 23 }} icon={<FormatListNumberedRoundedIcon />} iconPosition='start' />
                    </TabList>
                    <Divider sx={{ borderColor: 'lightgray' }}></Divider>
                </Box>

                <TabPanel value='1' sx={{ p: 0, mt: 2 }}>
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
                        </GigaCardHeader> */}
                        <GigaCardHeader headerIcon={<CelebrationRoundedIcon fontSize='large'></CelebrationRoundedIcon>}>
                            How To Think Critically and Avoid Fallacies
                        </GigaCardHeader>
                        <GigaCardBody>
                            <Box sx={{ fontSize: '20px', fontStyle: 'italic', display: 'flex', justifyContent: 'flex-end', marginBottom: 3 }}>
                                <TodayRoundedIcon sx={{ marginRight: 0.5, color: 'darkgray' }}></TodayRoundedIcon>
                                <span style={{ color: 'darkgray' }}>Tạo lúc 16:40 20/07/2023</span>
                            </Box>
                            <p align='justify'>
                                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae sapiente deserunt sequi rerum animi eaque illo excepturi. Iusto saepe cumque ipsa cupiditate ab accusantium dolor soluta veritatis ex hic?</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae modi rerum enim voluptatibus voluptatem! Alias eum velit, animi harum at vitae! Atque, eum. Eos iste soluta vitae quidem itaque saepe?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus rerum libero cupiditate voluptatem, doloremque quaerat culpa soluta! Soluta assumenda at sint et fugit quo natus id beatae! Et, saepe? Ratione!</p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum mollitia asperiores quis quos, ut fugiat harum. Voluptates vero animi alias sapiente odit cumque esse culpa, repudiandae error inventore, autem commodi!</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eum esse quisquam distinctio animi iure possimus omnis tempore dicta consectetur perspiciatis atque in, cupiditate nostrum numquam accusamus blanditiis velit libero!</p>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laborum, ullam necessitatibus harum distinctio similique itaque corrupti qui possimus incidunt quisquam, optio hic molestias et accusantium rem ipsum. Commodi, consequatur.</span>
                            </p>

                            <Grid container sx={{ marginTop: 8 }}>
                                <Grid item md={3} sm={4} xs={6}>
                                    <Box sx={{
                                        display: "flex",
                                        // alignItems: 'center',
                                        // marginTop: 6
                                    }}>
                                        <PeopleAltRoundedIcon fontSize='large' sx={{ marginRight: 2 }}></PeopleAltRoundedIcon>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                            }}>
                                                Số lượng
                                            </Box>
                                            <Box sx={{
                                                fontSize: 16,
                                            }}>
                                                500/1000
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
                                        <AccessTimeRoundedIcon fontSize='large' sx={{ marginRight: 2 }}></AccessTimeRoundedIcon>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                            }}>
                                                Thời gian
                                            </Box>
                                            <Box sx={{
                                                fontSize: 16,
                                            }}>
                                                21/07/2023
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
                                        <LocationOnRoundedIcon fontSize='large' sx={{ marginRight: 2 }}></LocationOnRoundedIcon>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                            }}>
                                                Địa điểm
                                            </Box>
                                            <Box sx={{
                                                fontSize: 16,
                                            }}>
                                                268 Lý Thường Kiệt, phường 14, quận 10, Thành phố Hồ Chí Minh
                                            </Box>
                                        </Box>
                                        {/* <p style={{ fontWeight: 600, fontSize: 20 }}>268 Lý Thường Kiệt, phường 14, quận 10</p> */}
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} align='right' sx={{ marginTop: 8 }}>
                                <Button variant='outlined' size='large' className='btnregister' sx={{ mx: 3 }} onClick={handleRegister}>
                                    {/* <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon> */}
                                    Đăng ký
                                </Button>
                                <Button variant='contained' size='large' color='primary' onClick={handleEdit}>
                                    {/* <EditIcon sx={{ marginRight: 0.5 }}></EditIcon> */}
                                    Chỉnh sửa
                                </Button>
                            </Grid>
                        </GigaCardBody>
                    </GigaCard>
                </TabPanel>

                <TabPanel value='2' sx={{ p: 0, mt: 2 }}>
                    <Box sx={{ width: '100%' }}>
                        {/* Data Grid */}
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            sx={{
                                "&.MuiDataGrid-root": {
                                    borderRadius: 2,
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                    outline: "none",
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
                                    backgroundColor: "#1565C0",
                                    color: "white",
                                    fontWeight: 700,
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                    display: "none",
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                                    color: "white",
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
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                                pagination: {
                                    labelRowsPerPage: "Số lượng hiển thị",
                                    labelDisplayedRows: ({ from, to, count }) =>
                                        `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
                                },
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: {
                                        debounceMs: 500, placeholder: "Tìm kiếm...", sx: {
                                            width: 300,
                                            marginBottom: 1,
                                        }
                                    },
                                    // csvOptions: { disableToolbarButton: true },
                                    // printOptions: { disableToolbarButton: true }
                                },
                            }}
                            disableColumnFilter
                            disableColumnSelector
                            // disableDensitySelector
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
                    </Box>
                </TabPanel>
            </TabContext>
        </Container >
    )
}

export default Page_Company_Event_Id
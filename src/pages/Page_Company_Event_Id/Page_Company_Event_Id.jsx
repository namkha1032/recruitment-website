// import libraries
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// import MUI components
import { Box, Container, Grid, Tab, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Id.scss'
import { Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';


const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Tên', width: 200 },
    { 
    field: 'actions',
    type: 'actions',
    headerName: 'Chi tiết',
    width: 150,
    headerAlign: 'center',
    align: 'center',
    getActions: (params) => [
          <GridActionsCellItem
            icon={<PlagiarismIcon></PlagiarismIcon>}
            label="Detail"
            onClick={() => alert("Navigate to user id: " + params.row.id)}/>]
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

    const handleClick = (e) => {
        navigate("/company/event/:eventid/update");
    }


    const navigate = useNavigate()


    return (
        <Container sx={{ p: 0 }} className='companyeventid'>
            <Typography variant='h4' align='center' sx={{ fontWeight: 600, color: 'slateblue' }}>Sự kiện 1</Typography>

            <Grid container>

                <Grid item md={6} sm={12} sx={{ mt: 8 }}>
                    <img src="https://file1.hutech.edu.vn/file/news/2-1569353757.jpg" 
                    alt="..." 
                    style={{ 
                        width: '100%', 
                        objectFit: 'cover', 
                        border: '5px solid #555' 
                    }}/>
                </Grid>

                <Grid item md={6} sm={12}>
                    <TabContext value={value}>

                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList aria-label='Tabs menu' onChange={handleChange} textColor="primary" indicatorColor="primary" centered>
                                <Tab label='Thông tin sự kiện' value='1' />
                                <Tab label='Danh sách đăng ký' value='2' />
                            </TabList>
                        </Box>

                        <TabPanel value='1' sx={{ p: 2 }}>
                            <Grid container spacing={2} 
                                sx={{ 
                                    p: 0.5, 
                                    display: "flex", 
                                    alignItems: "center", 
                                    width: '100%' 
                                }} 
                                style={{ 
                                    border: '0px solid black', 
                                    background: 'lightblue', 
                                    margin: 0.5, 
                                    filter: 'drop-shadow(0 0 10px black)' 
                                }}>
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
                                    <Button variant='contained' size='small' className='btnregister' sx={{ mx: 2 }}>
                                        <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon>
                                        Đăng ký
                                    </Button>
                                    <Button variant='contained' size='small' color='success' onClick={handleClick}>
                                        <EditIcon sx={{ marginRight: 0.5 }}></EditIcon>
                                        Chỉnh sửa
                                    </Button>
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel value='2' sx={{ p: 2 }}>
                            <div style={{ height: 500, width: '100%' }}>
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
                                          fontWeight: "bold",
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
                                        pageSize: 25 },
                                        },
                                    }}>
                                </DataGrid>
                            </div>
                        </TabPanel>

                    </TabContext>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Page_Company_Event_Id
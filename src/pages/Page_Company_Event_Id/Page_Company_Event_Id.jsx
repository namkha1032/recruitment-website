// import libraries
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


// import MUI components
import { Box, Chip, CircularProgress, Container, Divider, Grid, Paper, Tab, Typography } from '@mui/material'
import React from 'react'
import './Page_Company_Event_Id.scss'
import { Button } from '@mui/material'
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
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
// import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';

// import picture from '../../assets/img/event.png'
import GigaCard from '../../components/GigaCard/GigaCard';
import GigaCardHeader from '../../components/GigaCardHeader/GigaCardHeader';
import GigaCardBody from '../../components/GigaCardBody/GigaCardBody';

// Position
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import { Admin, Candidate, Interviewer, Recruiter } from '../../components/Position/Position';

import { useDispatch, useSelector } from 'react-redux';
import cleanStore from '../../utils/cleanStore';
import useGetRole from '../../hooks/useGetRole';
import { transferDatetimeBack } from '../../utils/transferDatetime';
import userEvent from '@testing-library/user-event';
import { NoResultsOverlay, NoRowsOverlay } from '../../components/DataRick/DataRick';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
// import picture from '../../assets/img/event2.png'
// import picture from '../../assets/img/eventcompany.jpg'
import NoteField from "../../pages/Page_Company_Interview_Id/NoteField/NoteField";
// import picture from '../../assets/img/Fanpage-1web-01-2048x872.png'
// import picture from '../../assets/img/HER-DREAM-web-2048x872.png'
import picture from '../../assets/img/lion.jpg'
import MissingPage from '../../components/MissingPage/MissingPage';



const Page_Company_Event_Id = () => {

    // useNavigate
    const navigate = useNavigate()

    const role = useGetRole()

    const { eventid } = useParams();
    // console.log('company event id: ', eventid);

    const dispatch = useDispatch();

    const user = useSelector(state => state.user)
    useEffect(() => {
        if (user) {
            dispatch({
                type: "eventSaga/getEvent",
                payload: {
                    eventid: eventid,
                    token: user.token
                }
            })
            dispatch({
                type: "eventSaga/getAllCandidateOfEvent",
                payload: {
                    eventid: eventid,
                    token: user.token
                }
            })
            return () => {
                cleanStore(dispatch)
            }
        }
    }, [user])

    const event = useSelector((state) => state.event)
    // console.log("myEvent: ", event)
    const note = event ? event.content : ""
    // const contentRef = useRef()
    // console.log("MY EVENT: ", contentRef.current)
    // useEffect(() => {
    //     if (event) {
    //         contentRef.current.innerHTML = note
    //     }
    //     // if (note) {
    //     // console.log(note)
    //     // contentRef.current.innerHTML = note
    //     // }
    // }, [event])
    // console.log("contentRef: ", contentRef);

    const row_drafts = useSelector((state) => state.candidateJoinEvent)
    const rows = row_drafts ? row_drafts : []
    // Test Data
    // const rows = [
    //     { id: 1, name: 'Ronaldo', time: '22/07/2023 16:00' }, { id: 2, name: 'Messi', time: '22/07/2023 16:00' }, { id: 3, name: 'Salah', time: '22/07/2023 16:00' },
    //     { id: 4, name: 'Bruno', time: '22/07/2023 16:00' }, { id: 5, name: 'Kevin', time: '22/07/2023 16:00' }, { id: 6, name: 'Pogba', time: '22/07/2023 16:00' },
    //     { id: 7, name: 'Mbappe', time: '22/07/2023 16:00' }, { id: 8, name: 'Haaland' time: '22/07/2023 16:00' }, { id: 9, name: 'Reus', time: '22/07/2023 16:00' },
    //     { id: 10, name: 'Vinicious', time: '22/07/2023 16:00' }, { id: 11, name: 'Kaka', time: '22/07/2023 16:00' }, { id: 12, name: 'Beckham', time: '22/07/2023 16:00' },
    //     { id: 13, name: 'Viera', time: '22/07/2023 16:00' }, { id: 14, name: 'Maldini', time: '22/07/2023 16:00' }, { id: 15, name: 'Nesta', time: '22/07/2023 16:00' },
    //     { id: 16, name: 'Gullit', time: '22/07/2023 16:00' }, { id: 17, name: 'Carlos', time: '22/07/2023 16:00' }, { id: 18, name: 'Pirlo', time: '22/07/2023 16:00' },
    //     { id: 19, name: 'Van Dijk', time: '22/07/2023 16:00' }, { id: 20, name: 'Dias', time: '22/07/2023 16:00' }, { id: 21, name: 'Kroos', time: '22/07/2023 16:00' },
    //     { id: 22, name: 'Modric', time: '22/07/2023 16:00' }, { id: 23, name: 'Xavi', time: '22/07/2023 16:00' }, { id: 24, name: 'Iniesta', time: '22/07/2023 16:00' },
    //     { id: 25, name: 'Ramos', time: '22/07/2023 16:00' }, { id: 26, name: 'Pepe', time: '22/07/2023 16:00' }, { id: 27, name: 'Alaba', time: '22/07/2023 16:00' },
    //     { id: 28, name: 'Robben', time: '22/07/2023 16:00' }, { id: 29, name: 'Hazard', time: '22/07/2023 16:00' }, { id: 30, name: 'Bale', time: '22/07/2023 16:00' }
    // ];


    // useState
    const [value, setValue] = useState('1');

    const [page, setPage] = useState(true);


    const error = useSelector(state => state.eventError)
    useEffect(() => {
        if (error.status === 'error') {
            if (error.message === 400 || error.message === 404) {
                setPage(false);
                dispatch({ type: 'eventError/onReset' })
            }
        }
    }, [error])


    // handle events
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    // const handleRegister = (e) => {
    //     alert("Register successfully!");
    // }

    const handleEdit = (e) => {
        navigate(`/company/event/${eventid}/update`);
    }

    const handleDetailClick = (value) => {
        // console.log(value);
        navigate(`/profile/${value}`);
    }


    const columns = useMemo(() => [
        {
            field: 'candidateId',
            type: 'number',
            width: 300,
            headerAlign: 'center',
            align: 'center',
            renderHeader: () => <span>Candidate ID</span>,
            renderCell: (params) => {
                return (
                    <Box
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                                textDecoration: "underline",
                            },
                        }}
                    >
                        {params.value}
                    </Box>
                );
            },
        },
        {
            field: 'candidateFullName',
            type: 'string',
            width: 300,
            headerAlign: 'left',
            align: 'left',
            renderHeader: () => <span>Full Name</span>,
            renderCell: (params) => {
                return (
                    <Box
                        sx={{
                            "&:hover": {
                                cursor: "pointer",
                                textDecoration: "underline",
                            },
                        }}
                    >
                        {params.value}
                    </Box>
                );
            },
        },
        // {
        //     field: 'position',
        //     type: 'string',
        //     width: 200,
        //     headerAlign: 'center',
        //     align: 'center',
        //     renderHeader: () => <span>Position</span>,
        //     renderCell: (params) => {
        //         switch (params.value) {
        //             case "Candidate":
        //                 return <Candidate/>;
        //             case "Interviewer":
        //                 return <Interviewer/>;
        //             case "Recruiter":
        //                 return <Recruiter/>;
        //             case "Admin":
        //                 return <Admin/>;
        //         }
        //     },
        // },
        // {
        //     field: 'candidateUserName',
        //     type: 'string',
        //     width: 250,
        //     headerAlign: 'left',
        //     align: 'left',
        //     renderHeader: () => <span>Username</span>,
        //     renderCell: (params) => {
        //         return (
        //             <Box
        //                 sx={{
        //                     "&:hover": {
        //                         cursor: "pointer",
        //                         textDecoration: "underline",
        //                     },
        //                 }}
        //             >
        //                 {params.value}
        //             </Box>
        //         );
        //     },
        // },
        {
            field: 'candidateEmail',
            type: 'string',
            width: 300,
            headerAlign: 'left',
            align: 'left',
            renderHeader: () => <span>Email</span>,
            renderCell: (params) => {

            },
        },
        // {
        //     field: 'registerTime',
        //     type: 'string',
        //     width: 250,
        //     headerAlign: 'center',
        //     align: 'center',
        //     renderHeader: () => <span>Registration Time</span>,
        //     renderCell: (params) => {

        //     },
        // },
        {
            field: 'actions',
            type: 'actions',
            width: 150,
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderHeader: () => <span>User Information</span>,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<FindInPageIcon></FindInPageIcon>}
                    label="Detail"
                    onClick={() => handleDetailClick(params.row.candidateUserId)} />,]
        }
    ]);


    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.down('md'));


    return (
        // <Container sx={{ p: 0 }} className='companyeventid'>
        page === true ?
            <>
                {isMd && (
                    <>
                        {/* <CelebrationRoundedIcon color='primary' fontSize='large' sx={{ marginRight: 1 }}></CelebrationRoundedIcon> */}
                        <Box sx={{
                            fontSize: 50,
                            fontWeight: 600,
                            // color: '#1565C0',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'start',
                            // justifyContent: 'center'
                            display: 'inline-block'
                        }}>
                            {/* Chi tiết sự kiện */}
                            Event Details
                        </Box>
                        <TabContext value={value}>
                            <Box>
                                <TabList
                                    aria-label='Tabs menu'
                                    onChange={handleChange}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    sx={{
                                        "& .MuiTabs-indicator": {
                                            backgroundColor: "black",
                                        },
                                    }}
                                // centered
                                >
                                    <Tab
                                        // label='Thông tin'
                                        label='Event Information'
                                        value='1'
                                        sx={{
                                            textTransform: "none",
                                            fontSize: 25,
                                            marginRight: 4,
                                            fontWeight: 600,
                                            color: "rgba(0, 0, 0, 0.85)",
                                            "&:hover": {
                                                color: "rgba(190, 190, 190, 0.85)",
                                            },
                                            "&.Mui-selected": {
                                                color: "black",
                                            },
                                        }}
                                        icon={<InfoRoundedIcon />}
                                        iconPosition='start'
                                    />
                                    <Tab
                                        // label='Danh sách đăng ký'
                                        label='Enrolment List'
                                        value='2'
                                        sx={{
                                            textTransform: "none",
                                            fontSize: 25,
                                            marginRight: 4,
                                            fontWeight: 600,
                                            color: "rgba(0, 0, 0, 0.85)",
                                            "&:hover": {
                                                color: "rgba(190, 190, 190, 0.85)",
                                            },
                                            "&.Mui-selected": {
                                                color: "black",
                                            },
                                        }}
                                        icon={<FormatListNumberedRoundedIcon />} iconPosition='start'
                                    />
                                </TabList>
                                <Divider sx={{ borderColor: 'lightgray' }}></Divider>
                            </Box>

                            <TabPanel value='1' sx={{ p: 0, mt: 2 }}>
                                <>
                                    {event &&
                                        (<>
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
                                                            <CelebrationRoundedIcon
                                                                fontSize='large'
                                                                sx={{
                                                                    // color: '#black',
                                                                    color: '#3f51b5'
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                            </CelebrationRoundedIcon>
                                                        </Box>
                                                        <Box sx={{
                                                            fontSize: 40,
                                                            fontWeight: 600,
                                                            // color: '#black',
                                                            color: '#3f51b5',
                                                            // color: '#1565C0',
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
                                                        {/* <TodayRoundedIcon sx={{ marginRight: 0.5, color: 'darkgray' }}></TodayRoundedIcon> */}
                                                        <EditCalendarRoundedIcon sx={{ marginRight: 0.5, color: 'darkgray' }}></EditCalendarRoundedIcon>
                                                        <span style={{ color: 'darkgray', fontSize: '18px' }}>{event.createdTime}</span>
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
                                                            <Box sx={{
                                                                display: "flex",
                                                                // alignItems: 'center',
                                                                // marginTop: 6
                                                            }}>
                                                                <PeopleAltRoundedIcon
                                                                    fontSize='large'
                                                                    sx={{
                                                                        marginRight: 2,
                                                                        // color: '#black',
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0' 
                                                                    }}>
                                                                </PeopleAltRoundedIcon>
                                                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                                    <Box sx={{
                                                                        fontSize: 25,
                                                                        fontWeight: 600,
                                                                        // color: '#black',
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                        {/* Số lượng */}
                                                                        Quantity
                                                                    </Box>
                                                                    <Box sx={{
                                                                        fontSize: 20,
                                                                        fontWeight: 600,
                                                                        // color: "#6d4c41"
                                                                        // color: "#FF9933"
                                                                    }}>
                                                                        {/* {event.quantity} / {event.maxQuantity} */}
                                                                        {rows.length} / {event.maxQuantity}
                                                                    </Box>
                                                                </Box>
                                                                {/* <p style={{ fontWeight: 600, fontSize: 20 }}>500/1000</p> */}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item md={4} sm={4} xs={6}>
                                                            <Box sx={{
                                                                display: "flex",
                                                                // alignItems: 'center',
                                                                // marginTop: 3
                                                                // justifyContent: 'center'
                                                            }}>
                                                                <AccessTimeRoundedIcon
                                                                    fontSize='large'
                                                                    sx={{
                                                                        marginRight: 2,
                                                                        color: '#black',
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                </AccessTimeRoundedIcon>
                                                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                                    <Box sx={{
                                                                        fontSize: 25,
                                                                        fontWeight: 600,
                                                                        color: '#black',
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                        {/* Thời gian */}
                                                                        Time
                                                                    </Box>
                                                                    <Box sx={{
                                                                        fontSize: 20,
                                                                        fontWeight: 600,
                                                                        // color: "#6d4c41"
                                                                        // color: "#FF9933"
                                                                    }}>
                                                                        {transferDatetimeBack(event.time)}
                                                                    </Box>
                                                                </Box>
                                                                {/* <p style={{ fontWeight: 600, fontSize: 20 }}>21/07/2023</p> */}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item md={5} sm={4} xs={12}>
                                                            <Box sx={{
                                                                display: "flex",
                                                                // alignItems: 'center',
                                                                // marginTop: 3
                                                                // justifyContent: 'flex-end'
                                                            }}>
                                                                <LocationOnRoundedIcon
                                                                    fontSize='large'
                                                                    sx={{
                                                                        marginRight: 2,
                                                                        // color: '#black',
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0' 
                                                                    }}>
                                                                </LocationOnRoundedIcon>
                                                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                                    <Box sx={{
                                                                        fontSize: 25,
                                                                        fontWeight: 600,
                                                                        // color: '#black',
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                        {/* Địa điểm */}
                                                                        Location
                                                                    </Box>
                                                                    <Box sx={{
                                                                        fontSize: 20,
                                                                        fontWeight: 600,
                                                                        // color: "#6d4c41"
                                                                        // color: "#FF9933"
                                                                    }}>
                                                                        {event.location}
                                                                    </Box>
                                                                </Box>
                                                                {/* <p style={{ fontWeight: 600, fontSize: 20 }}>268 Lý Thường Kiệt, phường 14, quận 10</p> */}
                                                            </Box>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={12} align='right' sx={{ marginTop: 8 }}>
                                                        {/* <Button variant='outlined' size='large' className='btnregister' sx={{ mx: 3 }} onClick={handleRegister}>
                                    <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon>
                                    Đăng ký
                                </Button> */}
                                                        <Button
                                                            variant='contained'
                                                            size='large'
                                                            // color='primary'
                                                            sx={{
                                                                backgroundColor: "black",
                                                                "&:hover": {
                                                                    backgroundColor: "grey",
                                                                }
                                                            }}
                                                            onClick={handleEdit}
                                                        >
                                                            {/* Chỉnh sửa */}
                                                            <EditIcon sx={{ marginRight: 1 }}></EditIcon>
                                                            Edit
                                                        </Button>
                                                    </Grid>
                                                </GigaCardBody>
                                            </GigaCard>
                                        </>)}
                                </>
                            </TabPanel>

                            <TabPanel value='2' sx={{ p: 0, mt: 2 }}>
                                <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%', borderRadius: 3 }}>
                                    {rows ? (
                                        <Box
                                            sx={{
                                                minHeight: 400,
                                            }}
                                        // sx={{ width: '100%' }}
                                        >
                                            {/* Data Grid */}
                                            <DataGrid
                                                autoHeight
                                                rows={rows}
                                                columns={columns}
                                                sx={{
                                                    "&.MuiDataGrid-root": {
                                                        borderRadius: 2,
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                                        outline: "none",
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                                        outline: "none",
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
                                                        // backgroundColor: "#1565C0",
                                                        backgroundColor: 'black',
                                                        color: "white",
                                                        fontWeight: 700,
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                                        display: "none",
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                                                        color: "white",
                                                    },
                                                    "&.MuiDataGrid-root .MuiCircularProgress-root": {
                                                        color: "black",
                                                    },
                                                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                                        color: 'black'
                                                    }
                                                }}
                                                // localeText={{
                                                //     footerRowSelected: (count) =>
                                                //         count > 1 ? `${count.toLocaleString()} hàng đã chọn` : `${count.toLocaleString()} hàng đã chọn`,
                                                //     footerTotalRows: 'Tổng:',
                                                //     footerTotalVisibleRows: (visibleCount, totalCount) =>
                                                //         `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,
                                                //     footerTotalRows: 'Tổng:',
                                                //     labelRowsPerPage: 'Hàng mỗi trang:',
                                                //     labelDisplayedRows: ({ from, to, count }) =>
                                                //         `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                                                // }}
                                                slots={{
                                                    toolbar: GridToolbar,
                                                    noRowsOverlay: NoRowsOverlay,
                                                    noResultsOverlay: NoResultsOverlay,
                                                }}
                                                slotProps={{
                                                    // pagination: {
                                                    //     labelRowsPerPage: "Số lượng hiển thị",
                                                    //     labelDisplayedRows: ({ from, to, count }) =>
                                                    //         `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
                                                    // },
                                                    toolbar: {
                                                        showQuickFilter: true,
                                                        quickFilterProps: {
                                                            debounceMs: 500, placeholder: "Search...", sx: {
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
                                                }}
                                                getRowId={(row) => row.candidateId}
                                                onCellClick={(params, event) => {
                                                    if (params.field === "candidateId" || params.field === "candidateFullName") {
                                                        handleDetailClick(params.row.candidateUserId);
                                                    }
                                                }}>
                                            </DataGrid>
                                        </Box>) :
                                        (<Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: 50,
                                            }}
                                        >
                                            <CircularProgress
                                                sx={{
                                                    color: "black",
                                                }}
                                            />
                                        </Box>
                                        )}
                                </Paper>
                            </TabPanel>
                        </TabContext>
                    </>
                )}

                {isSm && (
                    <>
                        {/* <CelebrationRoundedIcon color='primary' fontSize='large' sx={{ marginRight: 1 }}></CelebrationRoundedIcon> */}
                        <Box sx={{
                            fontSize: 30,
                            fontWeight: 600,
                            // color: '#1565C0',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'start',
                            // justifyContent: 'center'
                            display: 'inline-block'
                        }}>
                            {/* Chi tiết sự kiện */}
                            Event Details
                        </Box>
                        <TabContext value={value}>
                            <Box>
                                <TabList
                                    aria-label='Tabs menu'
                                    onChange={handleChange}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    sx={{
                                        "& .MuiTabs-indicator": {
                                            backgroundColor: "black",
                                        },
                                    }}
                                // centered
                                >
                                    <Tab
                                        // label='Thông tin'
                                        label='Event Information'
                                        value='1'
                                        sx={{
                                            textTransform: "none",
                                            fontSize: 15,
                                            // marginRight: 2,
                                            fontWeight: 600,
                                            color: "rgba(0, 0, 0, 0.85)",
                                            "&:hover": {
                                                color: "rgba(190, 190, 190, 0.85)",
                                            },
                                            "&.Mui-selected": {
                                                color: "black",
                                            },
                                        }}
                                        icon={<InfoRoundedIcon />}
                                        iconPosition='start'
                                    />
                                    <Tab
                                        // label='Danh sách đăng ký'
                                        label='Enrolment List'
                                        value='2'
                                        sx={{
                                            textTransform: "none",
                                            fontSize: 15,
                                            // marginRight: 2,
                                            fontWeight: 600,
                                            color: "rgba(0, 0, 0, 0.85)",
                                            "&:hover": {
                                                color: "rgba(190, 190, 190, 0.85)",
                                            },
                                            "&.Mui-selected": {
                                                color: "black",
                                            },
                                        }}
                                        icon={<FormatListNumberedRoundedIcon />} iconPosition='start'
                                    />
                                </TabList>
                                <Divider sx={{ borderColor: 'lightgray' }}></Divider>
                            </Box>

                            <TabPanel value='1' sx={{ p: 0, mt: 2 }}>
                                <>
                                    {event &&
                                        (<>
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
                                                <Box sx={{
                                                    paddingLeft: 1,
                                                    paddingTop: 1
                                                    // paddingLeft: 4,
                                                    // paddingTop: 4
                                                }}>
                                                    <Box sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        columnGap: 1
                                                        // columnGap: 2
                                                    }}>
                                                        <Box sx={{
                                                            fontSize: 20,
                                                            display: "flex",
                                                            alignItems: "center"
                                                        }}>
                                                            <CelebrationRoundedIcon
                                                                fontSize='medium'
                                                                // fontSize='large'
                                                                sx={{
                                                                    color: '#3f51b5'
                                                                    // color: '#1565C0'
                                                                }}
                                                            >
                                                            </CelebrationRoundedIcon>
                                                        </Box>
                                                        <Box sx={{
                                                            fontSize: 20,
                                                            fontWeight: 600,
                                                            color: '#3f51b5',
                                                            // color: '#1565C0',
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
                                                    <Box sx={{
                                                        fontSize: '18px',
                                                        fontStyle: 'italic',
                                                        display: 'flex',
                                                        justifyContent: 'flex-end',
                                                        marginBottom: 1
                                                        // marginBottom: 3
                                                    }}>
                                                        {/* <TodayRoundedIcon sx={{
                                                        marginRight: 0.5,
                                                        color: 'darkgray',
                                                    }}
                                                        fontSize='small'
                                                    >
                                                    </TodayRoundedIcon> */}
                                                        <EditCalendarRoundedIcon sx={{
                                                            marginRight: 0.5,
                                                            color: 'darkgray',
                                                        }}
                                                            fontSize='small'
                                                        >
                                                        </EditCalendarRoundedIcon>
                                                        <span style={{ color: 'darkgray', fontSize: '13px' }}>{event.createdTime}</span>
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
                                                            <Box sx={{
                                                                display: "flex",
                                                                // alignItems: 'center',
                                                                // marginTop: 6
                                                            }}>
                                                                <PeopleAltRoundedIcon
                                                                    fontSize='medium'
                                                                    // fontSize='large'
                                                                    sx={{
                                                                        marginRight: 1,
                                                                        // marginRight: 2,
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0' 
                                                                    }}>
                                                                </PeopleAltRoundedIcon>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    justifyContent: "center"
                                                                }}>
                                                                    <Box sx={{
                                                                        fontSize: 18,
                                                                        fontWeight: 600,
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                        {/* Số lượng */}
                                                                        Quantity
                                                                    </Box>
                                                                    <Box sx={{
                                                                        fontSize: 15,
                                                                        fontWeight: 600,
                                                                        // color: "#6d4c41"
                                                                    }}>
                                                                        {/* {event.quantity} / {event.maxQuantity} */}
                                                                        {rows.length} / {event.maxQuantity}
                                                                    </Box>
                                                                </Box>
                                                                {/* <p style={{ fontWeight: 600, fontSize: 20 }}>500/1000</p> */}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sx={{ marginBottom: 2 }}>
                                                            <Box sx={{
                                                                display: "flex",
                                                                // alignItems: 'center',
                                                                // marginTop: 3
                                                                // justifyContent: 'center'
                                                            }}>
                                                                <AccessTimeRoundedIcon
                                                                    fontSize='medium'
                                                                    // fontSize='large'
                                                                    sx={{
                                                                        marginRight: 1,
                                                                        // marginRight: 2,
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                </AccessTimeRoundedIcon>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    justifyContent: "center"
                                                                }}>
                                                                    <Box sx={{
                                                                        fontSize: 18,
                                                                        fontWeight: 600,
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                        {/* Thời gian */}
                                                                        Time
                                                                    </Box>
                                                                    <Box sx={{
                                                                        fontSize: 15,
                                                                        fontWeight: 600,
                                                                        // color: "#6d4c41"
                                                                    }}>
                                                                        {transferDatetimeBack(event.time)}
                                                                    </Box>
                                                                </Box>
                                                                {/* <p style={{ fontWeight: 600, fontSize: 20 }}>21/07/2023</p> */}
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box sx={{
                                                                display: "flex",
                                                                // alignItems: 'center',
                                                                // marginTop: 3
                                                                // justifyContent: 'flex-end'
                                                            }}>
                                                                <LocationOnRoundedIcon
                                                                    fontSize='medium'
                                                                    // fontSize='large'
                                                                    sx={{
                                                                        marginRight: 1,
                                                                        // marginRight: 2,
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0' 
                                                                    }}>
                                                                </LocationOnRoundedIcon>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    justifyContent: "center"
                                                                }}>
                                                                    <Box sx={{
                                                                        fontSize: 18,
                                                                        fontWeight: 600,
                                                                        color: '#3f51b5',
                                                                        // color: '#1565C0'
                                                                    }}>
                                                                        {/* Địa điểm */}
                                                                        Location
                                                                    </Box>
                                                                    <Box sx={{
                                                                        fontSize: 15,
                                                                        fontWeight: 600,
                                                                        // color: "#6d4c41"
                                                                    }}>
                                                                        {event.location}
                                                                    </Box>
                                                                </Box>
                                                                {/* <p style={{ fontWeight: 600, fontSize: 20 }}>268 Lý Thường Kiệt, phường 14, quận 10</p> */}
                                                            </Box>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item xs={12} align='right' sx={{
                                                        marginTop: 5
                                                        // marginTop: 8
                                                    }}>
                                                        {/* <Button variant='outlined' size='large' className='btnregister' sx={{ mx: 3 }} onClick={handleRegister}>
                                    <AppRegistrationIcon sx={{ marginRight: 0.5 }}></AppRegistrationIcon>
                                    Đăng ký
                                </Button> */}
                                                        <Button
                                                            variant='contained'
                                                            size='large'
                                                            // color='primary'
                                                            sx={{
                                                                backgroundColor: "black",
                                                                "&:hover": {
                                                                    backgroundColor: "grey",
                                                                }
                                                            }}
                                                            onClick={handleEdit}
                                                        >
                                                            {/* Chỉnh sửa */}
                                                            <EditIcon sx={{ marginRight: 1 }}></EditIcon>
                                                            Edit
                                                        </Button>
                                                    </Grid>
                                                </GigaCardBody>
                                            </GigaCard>
                                        </>)}
                                </>
                            </TabPanel>

                            <TabPanel value='2' sx={{ p: 0, mt: 2 }}>
                                <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', width: '100%', borderRadius: 3 }}>
                                    {rows ? (
                                        <Box
                                            sx={{
                                                minHeight: 400,
                                            }}
                                        // sx={{ width: '100%' }}
                                        >
                                            {/* Data Grid */}
                                            <DataGrid
                                                autoHeight
                                                rows={rows}
                                                columns={columns}
                                                sx={{
                                                    "&.MuiDataGrid-root": {
                                                        borderRadius: 2,
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                                        outline: "none",
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                                        outline: "none",
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-columnHeader": {
                                                        // backgroundColor: "#1565C0",
                                                        backgroundColor: 'black',
                                                        color: "white",
                                                        fontWeight: 700,
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                                        display: "none",
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-sortIcon": {
                                                        color: "white",
                                                    },
                                                    "&.MuiDataGrid-root .MuiCircularProgress-root": {
                                                        color: "black",
                                                    },
                                                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                                        color: 'black'
                                                    }
                                                }}
                                                // localeText={{
                                                //     footerRowSelected: (count) =>
                                                //         count > 1 ? `${count.toLocaleString()} hàng đã chọn` : `${count.toLocaleString()} hàng đã chọn`,
                                                //     footerTotalRows: 'Tổng:',
                                                //     footerTotalVisibleRows: (visibleCount, totalCount) =>
                                                //         `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,
                                                //     footerTotalRows: 'Tổng:',
                                                //     labelRowsPerPage: 'Hàng mỗi trang:',
                                                //     labelDisplayedRows: ({ from, to, count }) =>
                                                //         `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                                                // }}
                                                slots={{
                                                    toolbar: GridToolbar,
                                                    noRowsOverlay: NoRowsOverlay,
                                                    noResultsOverlay: NoResultsOverlay,
                                                }}
                                                slotProps={{
                                                    // pagination: {
                                                    //     labelRowsPerPage: "Số lượng hiển thị",
                                                    //     labelDisplayedRows: ({ from, to, count }) =>
                                                    //         `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`,
                                                    // },
                                                    toolbar: {
                                                        showQuickFilter: true,
                                                        quickFilterProps: {
                                                            debounceMs: 500, placeholder: "Search...", sx: {
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
                                                }}
                                                getRowId={(row) => row.candidateId}
                                                onCellClick={(params, event) => {
                                                    if (params.field === "candidateId" || params.field === "candidateFullName") {
                                                        handleDetailClick(params.row.candidateUserId);
                                                    }
                                                }}>
                                            </DataGrid>
                                        </Box>) :
                                        (<Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: 50,
                                            }}
                                        >
                                            <CircularProgress
                                                sx={{
                                                    color: "black",
                                                }}
                                            />
                                        </Box>
                                        )}
                                </Paper>
                            </TabPanel>
                        </TabContext>
                    </>
                )}
            </> :
            <MissingPage></MissingPage>
        // </Container >
    )
}

export default Page_Company_Event_Id
